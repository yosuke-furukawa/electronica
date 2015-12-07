# Photon を使って UI を作ってみる。

Photonというのは、Mac OS 風のUIを提供するツールキットです。これを利用することで一気に普通のWebからデスクトップアプリケーションっぽいUIを持ったアプリが作成できます。

Photonをダウンロードするところから始めてみましょう。

まずは `Getting Started` のページに行きましょう。

```
$ open http://photonkit.com/getting-started/
```

`Download` のボタンを押して、zipファイルを展開し、任意のフォルダに保存してください。 

```
$ cp -r /path/to/photon-dist photon
```

フォルダの中が以下のようになっていることを確認してください。

```
photon/
├── css/
│   ├── photon.css
│   ├── photon.min.css
├── fonts/
│   ├── photon-entypo.eot
│   ├── photon-entypo.svg
│   ├── photon-entypo.ttf
│   └── photon-entypo.woff
└── template-app/
    ├── js/
    │   └── menu.js
    ├── app.js
    ├── index.html
    └── package.json
```

この cssフォルダと font フォルダを使って読み込みます。

css と font フォルダを自分が作ったプロジェクトに移動し、下記のようなフォルダ構成になるようにしてください。

```
electronica/
├── css/
│   ├── photon.css
│   ├── photon.min.css
├── fonts/
│   ├── photon-entypo.eot
│   ├── photon-entypo.svg
│   ├── photon-entypo.ttf
│   └── photon-entypo.woff
├── package.json
├── index.js
└── index.html
```

# index.html に css を読みこませる

CSS ファイルを HTMLから読み込ませてみましょう。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="./css/photon.css">
    <title>Hello Electron!</title>
  </head>
  <body>
    <h1>Hello Electron!</h1>
    node version <script>document.write(process.versions.node)</script><br>,
    Chrome version <script>document.write(process.versions.chrome)</script><br>,
    Electron version <script>document.write(process.versions.electron)</script><br>.
  </body>
</html>
```

これで準備完了です。試していきましょう。

# .window .window-content でウィンドウを作る。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- Stylesheets -->
    <link rel="stylesheet" href="./css/photon.css">
    <title>Hello Electron!</title>
  </head>
  <body>
    <h1>Hello Electron!</h1>
    <div class="window">
      <div class="window-content">
        Main Window Content
      </div>
    </div>
  </body>
</html>
```

これが一番初期の `window-content` しかない状態です。実際に表示させてどうなるか確認してください。

# .pane-group .pane で複数ペインを持つウィンドウを作る。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- Stylesheets -->
    <link rel="stylesheet" href="./css/photon.css">
    <title>Hello Electron!</title>
  </head>
  <body>
    <h1>Hello Electron!</h1>
    <div class="window">
      <div class="window-content">
        <div class="pane-group">
          <div class="pane">first pane</div>
          <div class="pane">second pane</div>
          <div class="pane">third pane</div>
        </div>
      </div>
    </div>
  </body>
</html>
```

３つの pane が横に並んだ状態です。実際に表示させてどうなるか確認してください。

# Sidebar layout

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- Stylesheets -->
    <link rel="stylesheet" href="./css/photon.css">
    <title>Hello Electron!</title>
  </head>
  <body>
    <h1>Hello Electron!</h1>
    <div class="window">
      <div class="window-content">
        <div class="pane-group">
          <div class="pane-sm sidebar">sidebar pane</div>
          <div class="pane">main pane</div>
        </div>
      </div>
    </div>
  </body>
</html>
```

サイドに少しだけせまいpaneを作ります。これを使うとサイドバーのようなバーが作れます。

# toolbar layout

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- Stylesheets -->
    <link rel="stylesheet" href="./css/photon.css">
    <title>Hello Electron!</title>
  </head>
  <body>
    <div class="window">
    <header class="toolbar toolbar-header">
    <h1 class="title">Hello Electron!</h1>
    </header>
      <div class="window-content">
        <div class="pane-group">
          <div class="pane-sm sidebar">sidebar pane</div>
          <div class="pane">main pane</div>
        </div>
      </div>
    <footer class="toolbar toolbar-footer">
    <h1 class="title">Footer</h1>
    </footer>
    </div>
  </body>
</html>
```

# 問題

toolbar に リロードボタンを付けてみましょう。

toolbar にアイコンを追加するには、`toolbar-actions` class を利用します。


```html
<div class="toolbar-actions">
 <button id="js-reload" class="btn btn-default">
   <span class="icon icon-arrows-ccw icon-text"></span>
   Reload
 </button> 
</div>
```

またリロードボタンを押したらちゃんとページがリロードされるようにしてみましょう。

```javascript
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const reload = document.getElementById('js-reload');
    reload.addEventListener('click', () => { location.reload(); });
  })
</script>
```


