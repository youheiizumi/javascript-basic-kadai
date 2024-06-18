//btnというidを持つHTML要素を取得し、定数に代入する
const btn1 = document.getElementById('btn');

//textというidを持つHTML要素を取得し、定数に代入する
const text1 = document.getElementById('text');

//HTML要素がクリックされたときにイベント処理を実行する
btn1.addEventListener('click',() => {

 // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
 setTimeout(() => {
  text1.textContent = 'ボタンをクリックしました';
}, 2000);
})





