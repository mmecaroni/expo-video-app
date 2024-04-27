# Expo Web | Install

## Source

- https://www.youtube.com/watch?v=x7KE4JD-Q9A
- 16:50

## Installation

```
npx expo install react-dom react-native-web @expo/metro-runtime
```

In `app.json` (not sure if this is needed, as in video it shows this, but in docs it does not and adds the '@expo/metro-runtime' in the npm expo package install command)

```
    "web": {
      "favicon": "./assets/favicon.png",
      "bundler": "metro"
    },
```

Start the dev server

```
npx expo start --web
```

The app can be exported as a production website with:

```
npx expo export --platform web
```

OR, IF Expo Server running

```
w
```

You browser should open with an Expo splash screen.