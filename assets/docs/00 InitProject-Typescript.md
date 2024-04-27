# Init Project | Typescript

## Source

- Build a Local-First Finance app with Expo & WatermelonDB
- https://www.youtube.com/watch?v=x7KE4JD-Q9A

## Init App

```
npx create-expo-app@latest <projectname>
-or in same folder-
npx create-expo-app@latest .
```

## Add Typescript

In root, rename `App.js` to `App.tsx`, then in terminal run the server...

```
npm start

? It looks like you're trying to use TypeScript but don't have the required dependencies installed. Would you like to install typescript@^5.3.0, @types/react@~18.2.45? › (Y/n)
```
Expo will see that we have a typescript files and ask you the question above..
Choose `Y` and it will add react typescript packages
Expo will install and configure Typescript for us and create `tsconfig.json` file in the root of the project.

`tsconfig.json`
```
{
  "compilerOptions": {},
  "extends": "expo/tsconfig.base"
}
```

If no issues, you should see the development server running in your terminal, QR Code to launch `Expo Go`, and other commands

## Simulators

Test them out..

› Scan QR Code | open Expo Go on your phone
› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

Then make a change in the code to test live reload(s).. in App.tsx, change content to `Hello World!` hit save and it should automatically reload and you should see the changes.