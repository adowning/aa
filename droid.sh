#!/bin/zsh
# #yarn serve
# aapt="$ANDROID_HOME/build-tools/27.0.3/aapt"


# cd android
# # Install APK to device
# # Use as: apkinstall app-debug.apk
# # apkinstall="adb devices | tail -n +2 | cut -sf 1 | xargs -I X adb -s X install -r $1"
# # As an alternative to apkinstall, you can also do just ./gradlew installDebug

# # Alias for building and installing the apk to connected device
# # Run at the root of your project
# # $ buildAndInstallApk
# ./gradlew assembleDebug
# adb devices | tail -n +2 | cut -sf 1 | xargs -I X adb -s X install -r $1 ./app/build/outputs/apk/debug/app-debug.apk

# cd ..
#export '/home/ash/.oh-my-zsh/custom/z_myandroidaliases.zsh'
# shopt -s expand_aliases &
npx cap sync
emu -avd good24 &
cd android;
buildInstallLaunchDebugApk;
cd ..