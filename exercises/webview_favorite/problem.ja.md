# Webview を使ってブラウザを作る

さて、webview の使い方も分かってきたところで、 `ミニブラウザ` なら作れるようになったかと思います。ここから小さいブラウザを作ってみましょう。

まず、先ほど作ったリロードボタン、戻る、進むボタンの最後に URL フォームを入れてみましょう。

```html
<!-- URL フォーム -->
<input type="text" id="urlbar" class="form-control" placeholder="URL" value="https://github.com">
```

このURLフォームはエンターキーを押したら操作できるようにします。

main.js を下記のように編集しましょう。

```javascript
const urlbar = document.getElementById('urlbar');
urlbar.addEventListener('keypress', (e) => {
  if (e.keyIdentifier === 'Enter') {
    webview.setAttribute('src', urlbar.value);
  }
});
```

# 問題
下記の機能を持つブラウザを作りましょう。

1. お気に入りボタンを入れてみましょう。お気に入りを押したらside pain にお気に入りで押したURLがリストとして並ぶようにしてください。
2. side pain のお気に入りに入れたURLをクリックしたら `webview` の `src` を書き換えて遷移するようにしてください。

# ヒント1

お気に入りを入れるためにサイドパネルを使いましょう。
サイドパネルには以下のようにURLが並ぶようにしてください。

```html
<ul id="fav-list" class="list-group">
  <li class="list-group-item">
    <p>https://github.com/</p>
  </li>
  <li class="list-group-item">
    <p>https://google.com/</p>
  </li>
  <li class="list-group-item">
    <p>https://yahoo.com/</p>
  </li>
</ul>
```

# ヒント2

お気に入りリストがクリックされたらwebviewのURLに反映してみてください。
main.js でお気に入りがクリックされるタイミングでリストアイテムがクリックされた時のイベントを作っておき、 webview に反映します。

```js
const favoriteButton = document.getElementById('favorite');
favoriteButton.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.addEventListener('click', () => {
    // ... リストの内容を url として取得する。
    webview.setAttribute('src', url);
  });
});
```
