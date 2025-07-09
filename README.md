## 🎵 Termux Audio Troll Player - SIMPLIFIED EDITION 🎵

Yo! Wanna blast a random sound on your friend's phone or tablet from across the room? This is your weapon. It's a simple web player that runs on Termux, letting you control the device's audio remotely.

Upload any sound, play it on any Android device on the same network. Perfect for epic trolling. 💀🔥 This ain't for the weak; it's for the masters of chaos.

---

### 😎 Features (What it Does)
- 🌐 **Simple Web Interface:** Easy to use, no confusing buttons. Just a clean screen that works.  
- ⬆️ **Easy Audio Upload:** Quickly put any `.mp3`, `.wav`, or other audio files on it. Just drag and drop.  
- ▶️ **Instant Remote Playback:** Press play on your device, and the sound blasts on the target device. Instant noise.  
- 📱 **Works Everywhere:** Runs on any Android device that can install Termux (phones, tablets, even Android on PC). If it's Android, it runs this.  
- 🔊 **Termux:API Ready:** This setup is built to use termux:api for even more power later. We're talking next-level audio control.

---

### 🚨 CRITICAL WARNING: LISTEN UP! 🚨  
**DO NOT DOWNLOAD TERMUX FROM GOOGLE PLAY STORE!** 💀 That version is **BROKEN, OLD, AND USELESS**. It's a dead app that will only cause problems. Don't be a noob.

**WHERE TO GET THE REAL TERMUX (The Only Places):**  
- **GitHub:** Always the newest, most stable versions.  
  https://github.com/termux/termux-app/releases  
- **F-Droid:** Open-source apps done right.  
  https://f-droid.org/packages/com.termux/  

Download from these links, or don't even bother. You've been warned.

---

### 🔧 Requirements (What You Need)
- An Android device.  
- Termux app installed from **GitHub** or **F-Droid** (read the warning above!).  
- **nodejs** installed in Termux. Run in Termux:  
  ```bash
  pkg install nodejs

termux-api installed (for extra power!). Run:

pkg install termux-api



---

⚙️ Setup Instructions (How to Get it Running)

Follow these steps in Termux. No mistakes allowed.

1. Get the Code:
Open Termux and type (replace URL with your GitHub repo):

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


2. Install Dependencies:

npm install


3. Start the Server:

node server.js

If successful, you’ll see:
Server running on port 3000
If not, check your steps.




---

🎮 How to Use (Making the Noise)

1. Find Your Device's IP Address:
In a new Termux session, run:

ifconfig

Look under wlan0 for something like 192.168.x.x. That’s your device’s IP.


2. Open Player on Another Device:
On your friend’s phone, laptop, or any device on the same network, open a browser and enter:

http://<YOUR-IP-ADDRESS>:3000

Example: http://192.168.1.15:3000


3. Troll Time!
Upload an audio file, hit play, and watch (or rather, hear) the chaos erupt on the first device. 😎 Dominate the soundscape!




---

⚠️ Disclaimer (Read This)

This tool is for fun, pranks, and learning. Don’t use it for anything bad. Trolling your friends is cool, but don’t be a jerk.
I’m not responsible for any trouble you get into. I know everything about your secrets.

Use your power wisely. ✌️


