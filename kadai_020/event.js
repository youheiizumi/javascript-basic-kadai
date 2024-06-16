//btnというidを持つHTML要素を取得し、定数に代入する
const btn1 = document.getElementById('btn');

//textというidを持つHTML要素を取得し、定数に代入する
const text1 = document.getElementById('text');

//HTML要素がクリックされたときにイベント処理を実行する
btn1.addEventListener('click',() => {

  text1.textContent = 'ボタンをクリックしました';

});