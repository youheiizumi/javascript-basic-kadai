$(function () {
  $('#fade-in').on('click', function() {
    // フェードインする
    $('#target').fadeIn();
  });

  $('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut();
  });

  $('#change-color').on('click', function() {
    //色変化する
    $('#target').css('color', 'red');
  });

  $('#change-text').on('click', function() {
    //テキスト変化する
    $('#target').text('Hello!');
  });
});