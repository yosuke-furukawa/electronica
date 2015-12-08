# WebView

`electron` のwebview タグの機能を使って既存のウェブサイトを埋め込んでみましょう。この機能を使うことで、いわゆる `iframe` を使ってウェブサイトをくるんだような状態にして、既存のウェブサイトのクライアントを作ることができるようになります。


# webview タグ

electron の html 上には `webview` というタグが有効になっています。

```html
<webview id="github" src="https://www.github.com/" autosize="on" minwidth="576" minheight="432"></webview>
```

`src` にウェブサイトのURLを設定します。
`autosize` は縦横幅の変更に自動的に追従する属性です。
`minwidth` `minheight` は最小の横幅と高さです。

webview タグは普通のdom要素なので、JavaScriptで操作することも可能です。

```html
<script>
  onload = function() {
    const webview = document.getElementById("github");
    const indicator = document.querySelector(".indicator");

    const loadstart = function() {
      indicator.innerText = "loading...";
    }
    const loadstop = function() {
      indicator.innerText = "";
    }
    webview.addEventListener("did-start-loading", loadstart);
    webview.addEventListener("did-stop-loading", loadstop);
  }
</script>
```

# 問題

webview タグを利用して、任意のウェブサイトを読み込んでみましょう。
前回作成したアプリケーションのmain paneに対してwebview タグが表示されるようにしましょう。

ちょっとブラウザっぽくするために先ほど作った `reload` ボタンを webview の中が更新されるようにして、 戻るための `back` ボタンと進むための `forward` ボタンも追加してみましょう。

# ヒント

`webview` のメソッドとして `reload()` と `goBack()` と `goForward()` というメソッドが存在します。
これを使うと戻る、進む、更新がwebview内で実現できます。
