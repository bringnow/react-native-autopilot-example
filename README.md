# react-native-autopilot Example

Basic runnable example of [react-native-autopilot](https://github.com/bringnow/react-native-autopilot).

## Getting started

First, install all required dependencies:
```
npm install
```

If not already installed, you also need to get the react-native CLI:
```
npm install -g react-native-cli
```

Now you can start the react-native packager (server):
```
react-native start
```

### Android

The packager needs to be reachable from the Android phone (or emulator), so add a reverse port fowarding:

```
adb reverse tcp:8081 tcp:8081
```

Now you can install and run the Android app on a connected Android device or emulator:

```
react-native run-android
```

To get the filtered app log use:

```
	adb logcat *:S ReactNative:V ReactNativeJS:V
```
