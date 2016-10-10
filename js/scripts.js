$(document).ready(function(){
    var allowReplies = true; 
    var commentTotal = 5;
    var replyName = "Ham4Hamilton";
    $('.drawer').drawer();
    $('.replyToggle').on('click', function() {
      $(this).toggleClass('flaggedButton').toggleClass('replyToggle');
      if ($(this).text() == 'replies on'){
        $(this).text('replies off');
        allowReplies = false;
      } else {
        $(this).html('replies on');
        allowReplies = true;
      }
      console.log('allowReplies is ' + allowReplies);
    });
    
    $(".commentBox").submit(function(){
        if ($("#commentInput").val()){
            var comment = $("#commentInput").val();
            var commenterName = 'Ham4Hamilton';
            if (allowReplies == true) {
            $('.theComments').prepend('<div class="commentStyle">' + '<p class="commenterName">' + commenterName + '</p>' + '<p>' + comment + '</p>' + '<div class="actionBar"> <button class="replyButton small"><i class="fa fa-mail-reply fa-lg"></i>&nbsp Reply</button> <button class="small"><i class="fa fa-link fa-lg"></i>&nbsp Link</button> <button class="flagButton small"><i class="fa fa-flag fa-lg"></i>&nbsp Flag</button></div>' + '<form class="replyBox"> <label for="replyInput" class="commenterLabel">Commenting As</label> <div class="commenterBar"> <img src="images/47.jpg"><p class="commentingAs">Ham4Hamilton<br/><span class="commenterLinks"><a href="#" class="drawer-toggle">View Profile</a> | Not You? <a href="#">(Log Out)</a></span></p></div><textarea class="u-full-width" placeholder="Your comment here..." id="replyInput"></textarea><div class="row"><div class="ten columns"><label class="agree-tos"><input type="checkbox"><span class="label-body">Read Terms of Service</span></label></div><div class="two columns"><input class="button-primary u-pull-right" type="submit" value="submit comment"></div></div></form><div class="repliesArea"></div>'+'</div>');
            }
            else {
            $('.theComments').prepend('<div class="commentStyle">' + '<p class="commenterName">' + commenterName + '</p>' + '<p>' + comment + '</p>' + '<div class="actionBar"><p>Not Accepting Replies</p><button class="small"><i class="fa fa-link fa-lg"></i>&nbsp Link</button> <button class="flagButton small"><i class="fa fa-flag fa-lg"></i>&nbsp Flag</button></div></div></div>');
            }
            commentTotal++;
            $('#commentNumber').html(commentTotal);
        }
        $("#commentInput").val('');
        $("#commenterNameInput").val('');
        return false;
    });
    $('.actionBar').on('click', '.flagButton', function() {
        $(this).toggleClass('flaggedButton');
    });
    $(document.body).on('click', '.followButton', function() {
        $(this).toggleClass('followedButton');
        if ($(this).text() == 'following'){
            $(this).html('<i class="fa fa-user fa-lg"></i>&nbsp follow');
        } 
        else {
            $(this).text('following');
        }
    });
    
    $(document.body).on("submit", ".replyBox", function() {
        commentTotal++;
        $('#commentNumber').html(commentTotal);
        if ($(this).parent().find("#replyInput").val()){
        var reply = $(this).parent().find("#replyInput").val();
//        var replyName = $(this).parent().find("#replyNameInput").val();
        $(this).closest('.commentStyle').find('.repliesArea').append('<div class="replyStyle">' + '<p class="commenterName">' + replyName + '</p>' + '<p>' + reply + '</p>' + '<div class="actionBar"><button class="small"><i class="fa fa-link fa-lg"></i>&nbsp Link</button> <button class="flagButton small"><i class="fa fa-flag fa-lg"></i>&nbsp Flag</button></div>' +'</div>');
        };
        $(this).closest('.commentStyle').find('.replyBox').slideUp();
        $("#replyInput").val('');
        $("#replyNameInput").val('');
        return false;
    });
    $(document.body).on("click", ".replyButton", function(){
        $(this).closest('.commentStyle').find('.replyBox').slideToggle();
    });
    $( "input[type='radio']" ).checkboxradio({
      icon: false
    });
      $( function() {
    $( "#tabs" ).tabs({
      beforeLoad: function( event, ui ) {
        ui.jqXHR.fail(function() {
          ui.panel.html(
            "Couldn't load this tab. We'll try to fix this as soon as possible. " +
            "If this wouldn't be a demo." );
        });
      }
    });
  } );
    $(".tabs").on('click', "#commentsTab", function(){
        $("#commentsTab").addClass('activeTab');
        $.get('comment-history.html', function(response) {
            $('#tabContentArea').html(response).slideDown();
        });
    });
});