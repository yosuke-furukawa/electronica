# Electron Packager

`asar` でパッケージングしたファイルは `electron` が入っているユーザーにしか実行できません。この回では、 作ったアプリを配布する方法を学びましょう。

# そもそもアプリケーションを配布するとは

アプリケーションを実行可能な環境で配布するにはいくつかの前提知識が必要になります。

Mac OS の場合、以下の様なフォルダ構成でファイルが存在している必要があります。

```
electron/Electron.app/Contents/Resources/app/
├── package.json
├── main.js
└── index.html
```

WindowsやLinuxの場合は以下の様なフォルダ構成でファイルが存在している必要があります。

```
electron/resources/app
├── package.json
├── main.js
└── index.html
```

asar を使っておくと以下のようにまとめることができるようになるので、まとめておきましょう。

```
electron/resources/
└── app.asar
```

windows の場合は255文字までしかパスに含められないので、こういう場合には必須になります。
さらにこの上で electron の実行ファイルを内包する必要があります。

# electron-packagerを利用する

上記のようなことを手でやるのはとても面倒なので、ライブラリを利用しましょう。

Electronの実行環境を `asar` と一緒にコンパイルして実行してくれる、`electron-packager` というライブラリを利用します。

実際に活用してみましょう。

```
$ npm install electron-packager -g
```

```
$ electron-packager <source directory> <app name> --platfrom=<platform> --arch=<arch> --version=<electron version>
```


# 問題

実際に先ほど作ったアプリを `electron-packager` で配布可能なパッケージにしてみましょう。
自分のローカルに保存し、ファイルを実行してみましょう。
