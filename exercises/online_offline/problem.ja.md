# Online Offline

Online か Offline かを示すイベントがあります。実際には 普通に `online` と `offline` を示すイベントを受け取るか、 `navigator.onLine` というメソッドを呼び出すと実施できます。


```html
<script>
  var alertOnlineStatus = function() {
    window.alert(navigator.onLine ? 'online' : 'offline');
  };

  window.addEventListener('online',  alertOnlineStatus);
  window.addEventListener('offline',  alertOnlineStatus);

  alertOnlineStatus();
</script>
```

# 問題

オンラインイベントを受け取り、画面上にオンラインかオフラインかを表示させてみましょう。


