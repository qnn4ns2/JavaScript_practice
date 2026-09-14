/*
HTMLの中から任意のIDが付いた要素を取得するには
「querySelector()」というメソッドを使用する。
JavaScriptの基本文法は「オブジェクト.メソッド('パラメーター')」
「HTML全体を表すdocumentオブジェクトの中から指定したセレクター
(＝パラメーター)を持つ要素を取得してね(=メソッド)」という意味
　セレクターはID名を指定する場合は「＃ID名」
　　　　　　　クラス名を指定する場合は「.クラス名」となる
*/

/*
「.value」はHTMLの入力フォーム（<input> や <textarea>、<select> など）に入力された値や選択された値を取得・変更する働き
    ※「value」はHTMLのタグ内に書き込む「属性（設定値）」のことなので混同しないように注意！
【動き(機能)】JavaScriptからフォームの中に自動で文字を入れたり、中身を空っぽ（リセット）にしたりできる
*/
console.log(document.querySelector('#colorPicker').value);


/*
JavaScriptから文字を表示させるには「どこの」「何を」「どう変えるのか」を指示する必要がある
今回の場合は
    ①「カラーコードを検索」と書かれている部分の
    ②テキストを
    ③「カラーコード：」に変える
*/
//HTMLページ.ID「colorText」の要素.要素内のテキスト='文字列「カラーコード：」
//HTMLページから「colorText」というIDの要素を探し出し、そのテキストに「カラーコード：」という文字列を代入する
document.querySelector('#colorText').textContent = 'カラーコード：';