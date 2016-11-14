# Introduction

これから `Electron` に関してのエクササイズを開始します。 `Electron` はデスクトップアプリケーションを作るためのフレームワークです。本フレームワークを活用することでJavaScript/HTML/CSSでデスクトップアプリケーションを作ることができるようになります。

概要を解説するために、[Quick start](https://github.com/atom/electron/blob/master/docs-translations/jp/tutorial/quick-start.md) をよく読んでおくことをおすすめします。
まず最初に `Electron` を作るための環境構築をしましょう。

```
$ mkdir electronica1
$ cd electronica1
$ npm init -y
```

# Hello Electron アプリケーションを作る

electronica1 フォルダの中で `index.js` という名前のファイルを作り中身を下記のように記述してください。

```javascript
'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// Report crashes to our server.
electron.crashReporter.start({
  'companyName': '',
  'submitURL': ''
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // Mac OS だったらアプリケーションを殺さない
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
```

同じフォルダの中で `index.html` を作成し、下記のように記述してください。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello Electron!</title>
  </head>
  <body>
    <h1>Hello Electron!</h1>
    node version <script>document.write(process.versions.node)</script>,
    Chrome version <script>document.write(process.versions.chrome)</script>,
    Electron version <script>document.write(process.versions.electron)</script>.
  </body>
</html>
```

フォルダ全体の構成が下記のようになっていることを確認してください。

```tree
electronica1/
├── package.json
├── index.js
└── index.html
```

さらに `Electron` を実行するためのモジュールをインストールします。

```
$ npm install electron-prebuilt --save
```

終わったら `package.json` を開き下記のようにファイルを修正してください。

```
{
  "name": "electroinca1",
  "version": "0.0.1",
  "main": "index.js",
  "scripts": {
    "start": "electron index.js" // scriptsに electron index.js を足す
  },
  "devDependencies": {
    "electron-prebuilt": "^0.35.0"
  }
}
```

