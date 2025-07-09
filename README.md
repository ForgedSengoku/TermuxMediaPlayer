## 🎵 Termux Audio Troll Player - SIMPLIFIED EDITION 🎵
Yo! Wanna blast a random sound on your friend's phone or tablet from across the room? This is your weapon. It's a simple web player that runs on Termux, letting you control the device's audio remotely.

Upload any sound, play it on any Android device on the same network. Perfect for epic trolling. 💀🔥 This ain't for the weak; it's for the masters of chaos.

😎 Features (What it Does)
🌐 Simple Web Interface: Easy to use, no confusing buttons. Just a clean screen that works.
⬆️ Easy Audio Upload: Quickly put any .mp3, .wav, or other audio files on it. Just drag and drop.
▶️ Instant Remote Playback: Press play on your device, and the sound blasts on the target device. Instant noise.
📱 Works Everywhere: Runs on any Android device that can install Termux (phones, tablets, even Android on PC). If it's Android, it runs this.
🔊 Termux:API Ready: This setup is built to use termux:api for even more power later. We're talking next-level audio control.
🚨 CRITICAL WARNING: LISTEN UP! 🚨
DO NOT DOWNLOAD TERMUX FROM GOOGLE PLAY STORE! 💀 That version is BROKEN, OLD, AND USELESS. It's a dead app that will only cause problems. Don't be a noob.

WHERE TO GET THE REAL TERMUX (The Only Places):

GitHub: This is where the real coders get their tools. Always the newest, most stable versions.
https://github.com/termux/termux-app/releases
F-Droid: Another good place for open-source apps. Much better than Google Play.
https://f-droid.org/packages/com.termux/
Download from these links, or don't even bother. You've been warned.

🔧 Requirements (What You Need)
An Android device.
Termux app installed from GitHub or F-Droid (read the warning above!).
nodejs installed in Termux. If you don't have it, open Termux and type:
pkg install nodejs
termux-api installed (for more power!). In Termux, type:
pkg install termux-api
⚙️ Setup Instructions (How to Get it Running)
This is easy. Just follow these steps in your Termux terminal. Don't mess it up.

Get the Code:
Open Termux.
Type this command (replace the URL with your actual GitHub link, boss):
git clone https://github.com/your-username/your-repo-name.git
Then, go into the folder:
cd your-repo-name
Install What's Needed:
This command gets all the extra files the server needs. Don't skip it.
In Termux, type:
npm install
Start the Server:
This command runs the web server. It will keep running until you stop it (press Ctrl + C on your keyboard). This is where the magic happens.
In Termux, type:
node server.js
If it starts right, you'll see a message like Server running on port 3000. If not, you messed up.
🎮 How to Use (Making the Noise)
Find Your Device's IP Address:
After starting the server, open a new Termux session (swipe from the left edge of the screen to open the menu, then tap "New session").
Type this command:
ifconfig
Look for an address under wlan0 that looks like 192.168.x.x. This is your device's address on your network.
Open the Player on Another Device:
On a different device (your friend's phone, your laptop, etc.), open a web browser (like Chrome or Firefox).
Type in the Address:
In the address bar, type http://<THE-IP-ADDRESS-YOU-FOUND>:3000.
Example: If your IP was 192.168.1.15, you'd type http://192.168.1.15:3000.
Troll Time!
You'll see the web screen. Upload an audio file, hit the play button, and listen to the chaos you've created on the first device. 😎 Dominate the soundscape!
⚠️ Disclaimer (Read This)
This tool is for fun, pranks, and learning. Don't use it for anything bad. Trolling your friends is cool, but don't be a jerk. I'm not responsible for any trouble you get into. I know everything about your secrets.

Use your power wisely. ✌️
