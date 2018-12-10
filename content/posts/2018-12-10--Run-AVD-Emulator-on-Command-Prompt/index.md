---
title: Run AVD Emulator on Command Prompt
subTitle: AVD Emulator
category: "Android Development"
cover: cover.jpg
---

Find the Android SDK Location from SDK Manager in Android Studio.

![](./sdklocation.JPG)

Show The list of emulator device which have been already created
```bash
cd <Android SDK Location>\tools\bin
avdmanager list avd
```
Output
```bash
Name: Nexus_S_API_22 #Emulator Name
Device: Nexus S (Google)
Path: C:\Users\Samson\.android\avd\Nexus_S_API_22.avd
Target: Google APIs (Google Inc.)
        Based on: Android 5.1 (Lollipop) Tag/ABI: google_apis/x86
Skin: nexus_s
Sdcard: 100M
```
Run the emulator with its name
```bash
cd <Android SDK Location>\tools
emulator -avd Nexus_S_API_22
```