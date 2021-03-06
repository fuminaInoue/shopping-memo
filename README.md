# Shopping Memo

## 概要
タブ分けとチェックボックス機能がついたシンプルなメモ。

## URL
https://shopping-memo-8251d.web.app

## 使用例
スーパーなどで買い物をするとき、タブ分けを活用することで売り場を行ったり来たりすることが少なくなります。
また、チェックボックスもついているのでタスク管理などにも便利です。

## 目指した課題解決
スーパーで買い物をする際にメモアプリを使っていたが、「グルーピングができないので売り場を行ったり来たりすることが多い」という自分の困りごとを解決するために作成しました。

## 工夫した点


### 未チェックのリストの数をバッジで表示
どのタブにいても全体の「未チェック数」を把握できるよう、タブ名の横にバッジを表示。
「まだあれを買ってないな」「あと○個タスクが残ってる！」
など直感的にわかるようにしています。

https://user-images.githubusercontent.com/93621856/148710639-9ef72c28-6819-4a84-b439-b77a2efb6d77.mov


### local Storageを使用
開発コストを抑えるためにlocal Storageを使用。
連想配列をJSONで格納することによってデータ管理をスマートにしました。

https://user-images.githubusercontent.com/93621856/148710642-eef679a4-d540-43fc-b3fc-0abed3880bfd.mov


### 好きな名前でタブを複数作れる
お買い物用に作成したアプリですが
様々な用途に対応できるよう、タブ名は自由につけれるように。
もちろん多数のタブにもスクロールで対応しています。

https://user-images.githubusercontent.com/93621856/148710514-b51ac554-5a4b-49bd-87d2-a2ea5f2248cb.mov


### 文字サイズとテーマカラーを選択できる
使用する人の好みに合わせて使えるように
設定画面から文字サイズ、テーマカラーを変更できるようにしました。
local Storageに保存するためリセットするまでは設定が保持されます。

https://user-images.githubusercontent.com/93621856/148710514-b51ac554-5a4b-49bd-87d2-a2ea5f2248cb.mov
