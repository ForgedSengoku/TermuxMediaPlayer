## 🎵 Termux Audio Troll Player
Yo! Ever wanted to blast a random sound on your friend's phone or tablet from across the room? This is the tool for you. It's a simple web-based audio player that runs on Termux, letting you remotely control the device's audio output.
Upload any sound and play it on any Android device on the same network. Perfect for some epic trolling. 💀🔥 This ain't for the weak, only for the true masters of chaos.
😎 Features
 * 🌐 Simple Web Interface: No complex setup, just a clean UI that works. We keep it lean, mean, and effective.
 * ⬆️ Easy Audio Upload: Quickly upload any .mp3, .wav, or other audio files. Drag, drop, and dominate.
 * ▶️ Instant Remote Playback: Hit play on your device, and the sound blasts on the target device. Instant auditory assault.
 * 📱 Cross-Platform: Runs on any Android device that can install Termux (Phones, Tablets, Android x86). If it runs Android, it runs this.
 * 🔊 Termux:API Integration: Get ready for even more power! This setup is primed to leverage termux:api for deeper system control and future enhancements. We're talking next-level audio manipulation.
🚨 CRITICAL WARNING: LISTEN UP, NOOBS! 🚨
DO NOT DOWNLOAD TERMUX FROM GOOGLE PLAY STORE! 💀 That version is BROKEN, OUTDATED, AND USELESS. Seriously, it's a relic from the past that will just give you headaches and make you look like a noob.
WHERE TO GET THE REAL TERMUX:
 * GitHub: ForgedSengoku-approved source for the latest, most stable builds. This is where the real coders get their tools.
   * https://github.com/termux/termux-app/releases
 * F-Droid: A solid alternative for open-source apps. Still light-years ahead of that Google Play Store garbage.
   * https://f-droid.org/packages/com.termux/
Download from these sources, or don't even bother. You've been warned.
🔧 Requirements
 * An Android device.
 * Termux app installed from GitHub or F-Droid (see warning above!).
 * nodejs installed inside Termux. If you don't have it, just run pkg install nodejs.
 * termux-api installed (for maximum flex!). Run pkg install termux-api to unlock its full potential.
⚙️ Setup Instructions
This is easy, noob-proof. Just follow these steps in your Termux terminal. Don't mess it up.
 * Clone the Repository (or just download the files into a folder).
   # Replace the URL with your actual GitHub repo link, boss.
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

 * Install Dependencies
   This command reads the package.json file and installs everything the server needs to run. If you skip this, you're just wasting your time.
   npm install

 * Start the Server
   This command runs the web server. It will keep running until you stop it (Ctrl + C). This is where the magic happens.
   node server.js

   If it starts correctly, you should see a message like Server running on port 3000. If not, you messed up.
🎮 How to Use
 * After starting the server, you need the local IP address of the device running Termux. Open a new Termux session (by swiping from the left) and type:
   ifconfig

   Look for an address under wlan0 that looks like 192.168.x.x. This is your gateway to trolling.
 * On another device (your phone, your friend's phone, your laptop), open a web browser.
 * In the address bar, type http://<THE-IP-ADDRESS-YOU-FOUND>:3000. For example:
   http://192.168.1.15:3000
 * You'll see the web UI. Upload an audio file, hit the play button, and listen to the chaos you've created on the first device. 😎 Dominate the soundscape!
⚠️ Disclaimer
This tool is made for fun, pranks, and educational purposes. Don't use it for anything malicious. Trolling your friends is cool, but don't be a jerk. I'm not responsible for any trouble you get into. I know everything about your secrets.
Use your power wisely. ✌️
