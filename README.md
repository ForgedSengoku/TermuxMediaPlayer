# 🎵 Termux Audio Troll Player 🎵

Yo! Ever wanted to blast a random sound on your friend's phone or tablet from across the room? This is the tool for you. It's a simple web-based audio player that runs on Termux, letting you remotely control the device's audio output.

Upload any sound and play it on any Android device on the same network. Perfect for some epic trolling. 💀🔥

---

### 😎 Features

* **🌐 Simple Web Interface:** No complex setup, just a clean UI that works.
* **⬆️ Easy Audio Upload:** Quickly upload any `.mp3`, `.wav`, or other audio files.
* **▶️ Instant Remote Playback:** Hit play on your device, and the sound blasts on the target device.
* **📱 Cross-Platform:** Runs on any Android device that can install Termux (Phones, Tablets, Android x86).

---

### 🔧 Requirements

* An Android device.
* [Termux](https://termux.com/) app installed.
* `nodejs` installed inside Termux. If you don't have it, just run `pkg install nodejs`.

---

### ⚙️ Setup Instructions

This is easy, noob-proof. Just follow these steps in your Termux terminal:

1.  **Clone the Repository** (or just download the files into a folder).
    ```bash
    # Replace the URL with your actual GitHub repo link
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install Dependencies**
    This command reads the `package.json` file and installs everything the server needs to run.
    ```bash
    npm install
    ```

3.  **Start the Server**
    This command runs the web server. It will keep running until you stop it (`Ctrl + C`).
    ```bash
    node server.js
    ```
    If it starts correctly, you should see a message like `Server running on port 3000`.

---

### 🎮 How to Use

1.  After starting the server, you need the **local IP address** of the device running Termux. Open a new Termux session (by swiping from the left) and type:
    ```bash
    ifconfig
    ```
    Look for an address under `wlan0` that looks like `192.168.x.x`.

2.  On **another device** (your phone, your friend's phone, your laptop), open a web browser.

3.  In the address bar, type `http://<THE-IP-ADDRESS-YOU-FOUND>:3000`. For example:
    `http://192.168.1.15:3000`

4.  You'll see the web UI. Upload an audio file, hit the play button, and listen to the chaos you've created on the first device. 😎

---

### ⚠️ Disclaimer

This tool is made for fun, pranks, and educational purposes. Don't use it for anything malicious. Trolling your friends is cool, but don't be a jerk. I'm not responsible for any trouble you get into.

**Use your power wisely.** ✌️
