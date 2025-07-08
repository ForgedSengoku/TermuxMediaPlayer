// server.js
// Coder Boss: ForgedSengoku
// This server handles file uploads and controls the Termux media player.

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const port = 3000;

// --- Directory Setup ---
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- Multer for File Uploads ---
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// --- Routes ---
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// --- Socket.IO Logic ---
io.on('connection', (socket) => {
    console.log('🔥 A user connected! Ready to play some sounds. 🔥');

    // Send the initial list of files to the new client
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error("Couldn't read upload directory:", err);
            return;
        }
        socket.emit('file_list', files);
    });

    // --- Media Player Controls ---
    socket.on('play', (filename) => {
        console.log(`▶️ Playing: ${filename}`);
        const filePath = path.join(__dirname, uploadDir, filename);
        // Stop any currently playing sound first
        exec('termux-media-player stop');
        // Play the new sound
        exec(`termux-media-player play "${filePath}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
        });
    });

    socket.on('play_loop', (filename) => {
        console.log(`🔁 Loop Playing: ${filename}`);
        const filePath = path.join(__dirname, uploadDir, filename);
        // This is a bit of a hack for looping. We'll just restart it when it finishes.
        // A more robust solution might involve checking player status, but this is simpler.
        const playLoop = () => {
            const playProcess = exec(`termux-media-player play "${filePath}"`);
            playProcess.on('exit', () => {
                console.log(`Looping ${filename} again...`);
                playLoop();
            });
        };
        exec('termux-media-player stop'); // Stop previous sounds
        playLoop();
    });

    socket.on('stop', () => {
        console.log('⏹️ Stopping player.');
        exec('termux-media-player stop');
    });

    socket.on('delete', (filename) => {
        console.log(`🗑️ Deleting: ${filename}`);
        const filePath = path.join(__dirname, uploadDir, filename);
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(`Error deleting file: ${err}`);
                return;
            }
            console.log(`File ${filename} deleted.`);
            // Refresh file list for all clients
            fs.readdir(uploadDir, (readErr, files) => {
                if (readErr) {
                    console.error("Couldn't read upload directory:", readErr);
                    return;
                }
                io.emit('file_list', files); // Use io.emit to update everyone
            });
        });
    });

    socket.on('disconnect', () => {
        console.log('👋 User disconnected.');
    });
});

// --- File Upload Endpoint ---
app.post('/upload', upload.single('soundFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log(`⬆️ File uploaded: ${req.file.originalname}`);

    // After upload, refresh file list for all clients
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error("Couldn't read upload directory:", err);
            return;
        }
        io.emit('file_list', files);
    });

    res.status(200).send(`File uploaded successfully: ${req.file.originalname}`);
});


// --- Start Server ---
http.listen(port, () => {
    console.log(`🎮 Server is live on http://localhost:${port}. Let's go! 🎮`);
});
