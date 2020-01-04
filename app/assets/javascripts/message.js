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
      var html = buildHTML(data);
    $('.migisita').append(html);
    $('.text').val('');
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
      console.log("___data___");
      console.log(data);
     if (data.length !==0) {
      var insertHTML = '';
      $.each(data, function(i, message) {
        insertHTML += buildHTML(data)
      });
      $('.migisita').append(insertHTML);
      //var html = buildHTML(data);
      //$('.migisita').append(html);
       $('.form__submit').prop('disabled', false);
       $('.migisita').animate({ scrollTop: $('.migisita')[0].scrollHeight});
       $(".form__mask").prop('disabled', false);
        return false;
     }
    })
   .fail(function(){
     console.log('FAIL');
     alert("メッセージ送信に失敗しました");
   });
  }
  if (document.location.href.match(/\/groups\/\d+\/messages/)){
   setInterval(reloadMessages, 7000);
  }
});