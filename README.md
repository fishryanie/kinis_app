.
├── Gemfile
├── Gemfile.lock
├── GenTreeStructure.sh
├── README.md
├── android
│   ├── app
│   │   ├── build.gradle
│   │   ├── debug.keystore
│   │   ├── proguard-rules.pro
│   │   └── src
│   │       ├── debug
│   │       │   └── AndroidManifest.xml
│   │       └── main
│   │           ├── AndroidManifest.xml
│   │           ├── java
│   │           │   └── com
│   │           │       └── kinis
│   │           │           ├── LandmarksHand.kt
│   │           │           ├── LandmarksPose.kt
│   │           │           ├── MainActivity.kt
│   │           │           └── MainApplication.kt
│   │           ├── playstore.png
│   │           └── res
│   │               ├── drawable
│   │               │   └── rn_edit_text_material.xml
│   │               ├── mipmap-hdpi
│   │               │   ├── ic_launcher.png
│   │               │   └── ic_launcher_round.png
│   │               ├── mipmap-mdpi
│   │               │   ├── ic_launcher.png
│   │               │   └── ic_launcher_round.png
│   │               ├── mipmap-xhdpi
│   │               │   ├── ic_launcher.png
│   │               │   └── ic_launcher_round.png
│   │               ├── mipmap-xxhdpi
│   │               │   ├── ic_launcher.png
│   │               │   └── ic_launcher_round.png
│   │               ├── mipmap-xxxhdpi
│   │               │   ├── ic_launcher.png
│   │               │   └── ic_launcher_round.png
│   │               └── values
│   │                   ├── strings.xml
│   │                   └── styles.xml
│   ├── build.gradle
│   ├── gradle
│   │   └── wrapper
│   │       ├── gradle-wrapper.jar
│   │       └── gradle-wrapper.properties
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   └── settings.gradle
├── app.json
├── babel.config.js
├── clean.sh
├── index.js
├── metro.config.js
├── package.json
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── fonts
│   │   │   ├── Rubik-Black.ttf
│   │   │   ├── Rubik-BlackItalic.ttf
│   │   │   ├── Rubik-Bold.ttf
│   │   │   ├── Rubik-BoldItalic.ttf
│   │   │   ├── Rubik-ExtraBold.ttf
│   │   │   ├── Rubik-ExtraBoldItalic.ttf
│   │   │   ├── Rubik-Italic.ttf
│   │   │   ├── Rubik-Light.ttf
│   │   │   ├── Rubik-LightItalic.ttf
│   │   │   ├── Rubik-Medium.ttf
│   │   │   ├── Rubik-MediumItalic.ttf
│   │   │   ├── Rubik-Regular.ttf
│   │   │   ├── Rubik-SemiBold.ttf
│   │   │   └── Rubik-SemiBoldItalic.ttf
│   │   ├── gifs
│   │   │   ├── icon-scanner.gif
│   │   │   └── scanning.gif
│   │   ├── icons
│   │   │   ├── bottom
│   │   │   │   ├── clock.png
│   │   │   │   ├── home.png
│   │   │   │   └── insole.png
│   │   │   └── init
│   │   │       ├── ic_faceId.png
│   │   │       ├── ic_fingerprint.png
│   │   │       ├── ic_toastError.png
│   │   │       ├── ic_toastSuccess.png
│   │   │       └── ic_toastWarning.png
│   │   ├── images
│   │   │   └── logo.png
│   │   ├── index.ts
│   │   └── lotties
│   │       └── QRScanner.json
│   ├── components
│   │   ├── base
│   │   │   ├── Accordion
│   │   │   │   └── index.tsx
│   │   │   ├── Button
│   │   │   │   └── index.tsx
│   │   │   ├── Camera
│   │   │   │   ├── CaptureButton.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── CheckBox
│   │   │   │   └── index.tsx
│   │   │   ├── Icon
│   │   │   │   └── index.tsx
│   │   │   ├── Image
│   │   │   │   └── index.tsx
│   │   │   ├── Loading
│   │   │   │   └── index.tsx
│   │   │   ├── OTPInput
│   │   │   │   └── index.tsx
│   │   │   ├── Pressable
│   │   │   │   └── index.tsx
│   │   │   ├── ProgressBar
│   │   │   │   └── index.tsx
│   │   │   ├── Radio
│   │   │   │   └── index.tsx
│   │   │   ├── ScrollView
│   │   │   │   └── index.tsx
│   │   │   ├── Shimmer
│   │   │   │   └── index.tsx
│   │   │   ├── StatusBar
│   │   │   │   └── index.tsx
│   │   │   ├── Swipe
│   │   │   │   └── index.tsx
│   │   │   ├── Switch
│   │   │   │   └── index.tsx
│   │   │   ├── Text
│   │   │   │   └── index.tsx
│   │   │   ├── TextInput
│   │   │   │   └── index.tsx
│   │   │   ├── Toast
│   │   │   │   └── index.tsx
│   │   │   ├── View
│   │   │   │   └── index.tsx
│   │   │   └── index.ts
│   │   └── common
│   │       ├── Avatar
│   │       │   └── index.tsx
│   │       ├── BottomSheetBackdrop
│   │       │   └── index.tsx
│   │       ├── ButtonBottom
│   │       │   └── index.tsx
│   │       ├── Header
│   │       │   └── index.tsx
│   │       ├── SegmentedControl
│   │       │   └── index.tsx
│   │       └── index.ts
│   ├── configs
│   │   └── reactotron.ts
│   ├── constants
│   │   └── linesPointPair.ts
│   ├── hooks
│   │   ├── common.ts
│   │   ├── permissions.ts
│   │   ├── redux.ts
│   │   └── useLandmarks.tsx
│   ├── interfaces
│   │   └── shared.ts
│   ├── routes
│   │   ├── Bottom.tsx
│   │   ├── index.tsx
│   │   └── router.ts
│   ├── screens
│   │   ├── bottom
│   │   │   ├── DetectScreen
│   │   │   │   └── index.tsx
│   │   │   ├── HomeScreen
│   │   │   │   └── index.tsx
│   │   │   ├── MessagesScreen
│   │   │   │   ├── index.tsx
│   │   │   │   └── mocks.json
│   │   │   └── index.ts
│   │   └── common
│   │       ├── AccountInfoScreen
│   │       │   └── index.tsx
│   │       └── SettingsScreen
│   ├── stores
│   │   ├── app
│   │   │   └── reducer.ts
│   │   └── index.ts
│   ├── themes
│   │   ├── color.ts
│   │   ├── defaultStyles.ts
│   │   ├── helper.ts
│   │   └── type.d.ts
│   └── utils
│       ├── api.ts
│       ├── helper.ts
│       ├── storage.ts
│       └── storagePersist.ts
├── structure_log.txt
└── tsconfig.json

73 directories, 124 files
```
