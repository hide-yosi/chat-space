$(function(){
  function buildHTML(comment){
    var html = `<div class="message">
    <div class="upper-message">
    <div class="upper-message__user-name">
    testestes
    </div>
    <div class="upper-message__date">
    2019/11/11 03:22
    </div>
    </div>
    <div class="lower-message">
    <p class="lower-message__content">
    ${comment.text}
    </p>
    <img class="lower-message__image" src="${comment.image.url}" >
    </div>
    </div>`
    
    return html;
  }
  $('.new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data)
      var html = buildHTML(data);
    $('.migisita').append(html);
    $('.form__submit').prop('disabled', false);
    $('.migisita').animate({ scrollTop: $('.migisita')[0].scrollHeight});
    $("form")[0].reset();
    $("form__mask").prop('disabled', true);
    return false
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
 })
 })
 
  