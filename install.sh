#!/usr/bin/bash

pkg update -y
pkg upgrade -y
pkg install python
pkg install wget
pkg install ffmpeg libwebp
pkg install nodejs
pkg install npm
pkg install tesseract
pkg install imagemagick
pkg install nano
npm i node-tesseract-ocr
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm audit fix

echo -e "\033[1;36mEnter your user name\033[0m"
read namauser
echo -e "\033[1;36mEnter the owner name\033[0m"
read tinggaluser
echo -e "\033[1;36mHow old are you?\033[0m"
read umuruser
clear
if [ $umuruser -ge 11 ]
then
echo -e "\033[1;32mYou are old enough to use jarvis\033[0m"
else
echo -e "\033[1;31mYou are not old enough to use the bot, we dont take any responsibility over your deeds\033[0m"
fi
echo -e "\n\033[1;34m[ JARVIS ]\033[0m"
echo -e "\033[1;35mReport Bug at\033[0m"
echo "https://wa.me/919947291867"
echo -e "\033[1;35mInstagram\033[0m"
echo "https://instagram.com/denssptraa"
echo -e "\033[1;35mYouTube Channel\033[0m"
echo "https://youtube.com/channel/JZmods"
echo -e "\n\033[1;34m[ INFO ]\033[0m"
echo -e "\033[1;35mUsername : \033[0m""$namauser"
echo -e "\033[1;35mAge : \033[0m""$umuruser"
echo -e "\033[1;35mOwner : \033[0mAkshay\n"
echo -e "\033[1;33mJarvis is optimised, run npm start to start jarvis\033[0m"