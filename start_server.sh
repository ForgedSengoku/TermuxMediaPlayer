#!/data/data/com.termux/files/usr/bin/bash

termux-wake-lock   # 🔒 Prevent device from sleeping

cd /data/data/com.termux/files/home/TermuxMediaPlayer

while true; do
  node server.js
  echo "Server crashed. Restarting in 3 seconds..."
  sleep 3
done
