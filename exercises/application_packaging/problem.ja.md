# Introduction

Application を packaging する方法を学びましょう。
ココで言うapplication packaging とは、ファイルを１つに結合してまとめることを指します。

まとめることで、Windows の 255バイト以上のパスを持つファイルを作成できない問題や require の高速化に繋がります。

# パッケージを作成するには

`asar` アーカイブを作成します。 `asar` というのは `tar` と同じように複数のファイルを１つのファイルに繋げて保存する形式です。パッケージを解凍しなくても任意のファイルを読み込むことができます。

では実際にパッケージを作ってみましょう。

1. asar ユーティリティをインストールします

```
$ npm install -g asar
```

2. `asar pack` でパッケージングする

```
$ asar pack your-app app.asar
```

3. `asar list` でパッケージ化された中身を見る。

```
$ asar list app.asar
```

こうして作られた `asar` パッケージはファイルとして読み込むこともできますが、直接 `electron` から実行することもできます。

```
$ electron app.asar
```

# 問題

`Hello electron` で作ったボタンだけのアプリケーションを `asar` でパッケージングしてみましょう。

パッケージングしたアプリケーションを実際に実行して、中の`DONE`ボタンを押し、実行完了させてください。
