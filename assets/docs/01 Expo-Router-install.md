# Expo-Router | Install

## Source

- https://www.youtube.com/watch?v=x7KE4JD-Q9A
- 13:30

- https://docs.expo.dev/router/introduction

## Installation (Not doing it this way)

Quick Start
- Brand new project..
We recommend creating a new Expo app using create-expo-app. This will create a minimal project with the Expo Router library already installed. To create a project, run the command:
```
npx create-expo-app@latest --template tabs@50
npx expo start
```

## Manual Installation

IF new project

```
npx create-expo-app
```

IF Existing Project, add packages..

```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

- `expo-router` file-based routing
- `react-native-safe-area-context` works on all devices with notches, bottom bars and more
- `react-native-screens` allows us to navigate through different components
- `expo-linking` allows users to navigate directly to a specific screen with in an app, from an external link from a website or another app
- `expo-constants` access to operating system
- `expo-status-bar` gives us a status bar component

Now need to change the Entry Point

`package.json`

```
{
  "main": "expo-router/entry",
}
```

Modify project configuration

This will be used for 'deep-linking'

`app.json` under the "slug" key, add
```
{
  "scheme": "your-app-scheme",
}
```

Example
```
{
  "scheme": "expofinanceapp",
}
```

### Modify babel.config.js

This should already be set to this..

```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

### Clear bundler cache

After updating the Babel config file, run the following command to clear the bundler cache:

```
npx expo start -c
```

## Restart/Start Expo Server

```
control+C
npm start
```

You should see a new screen with a command to run..

```
mkdir app

touch app/index.js
touch app/index.jsx
touch app/index.tsx
```