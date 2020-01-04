$(function(){
    var buildHTML = function(message) {
      if (message.content && message.image) {
        var html = `<div class="message" data-id= ${message.id} >
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
            <img src= ${message.image} class="lower-message__image" >
          </div>
        </div>`
      } else if (message.content) {
        var html = `<div class="message" data-id= ${message.id} >
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      } else if (message.image) {
        var html = `<div class="message" data-id= ${message.id} >
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
            <img src= ${message.image} class="lower-message__image" >
          </div>
        </div>`
      };
      return html;

  };
  $('.new_message').on('submit', function(e) {
    e.preventDefault();
    
    $('.form__submit').prop('disabled', false);
    $('.migisita').animate({ scrollTop: $('.migisita')[0].scrollHeight});
    $("form")[0].reset();
    $("form__mask").prop('disabled', true);
    return false
    
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
   });
  
  var reloadMessages = function() {
    var last_message_id = $('.message:last').data('id');
    console.log(last_message_id)
    $.ajax({
      url: "api/messages",  
      type: 'get', 
      data: {id: last_message_id},
      dataType: 'json',
    })
    .done(function(data){ 
  }
  if (document.location.href.match(/\/groups\/\d+\/messages/)){
   setInterval(reloadMessages, 7000);
  }
});