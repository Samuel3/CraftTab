# CraftTab. Lets. Get. Productive

## 📖 Table of Contents

- [Features](#✨-Features)
- [Prerequisites](#🎯-Prerequisites)
- [Getting Started](#🚀-Getting-Started)
- [Project Structure](#🏗-Project-Structure)
- [Commands](#🕹-Commands)
- [Release](#📦-Release)
- [License](#📜-License)

## ✨ Features

- Kanban Board
- Calculator
- Bookmarks


## 🚀 Getting Started

1. Install dependencies

```shell
npm i
```

2. Run development live reload

```shell
npm run start:dev
```

3. Open Chrome browser
4. Go to this url: `chrome://extensions`
5. Click on `"Developer mode"`
6. Click on `"Load unpacked"`
7. Choose the `extension` directory from this root directory
8. Yay, you did it! 😏
9. Now update the code as you want! 😛

> ℹ️ More info about developing Chrome extension can be found [here](https://developer.chrome.com/docs/extensions/mv3)

## 🏗 Project Structure

So the purpose is to take the advantage of the type system of TypeScript and to use the power of Nx workspace to create multiple applications with the powerful framework Angular!

So we have 3 applications:

1. Popup (`apps/popup`) - used for the upper popup
2. Options (`apps/options`) - used for the options page
3. DevTools Panel (`apps/devtools-panel`) - used for the devtools panel

In every Chrome extension we have background script that communicate with the content scripts, which can be found in `apps/scripts/background/src/main.ts`.

We are also can inject content script which can be found in `apps/scripts/content/src/main.ts`.

All the applications have already the Chrome types so can just use `chrome` and the editor will recognize it.

## 🕹 Commands

Start with development configuration

```shell
npm run start:dev
```

Start with production configuration.

```shell
npm run start:prod
```

Build with development configuration.

```shell
npm run build:dev
```

Build with production configuration.

```shell
npm run build:prod
```


## 📜 License

[MIT](LICENSE)

## Color Style

See https://coolors.co/202c39-283845-b8b08d-f2d492-f29559

Primary: `#202C39`

Secondary: `#283845`

Tertiary: `#F5F5F5`

Quaternary: `#F2D492`

Contrast: `#FF29559`
