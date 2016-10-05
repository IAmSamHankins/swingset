//$(document).ready(function(){
//    $("p").click(function(){
//        $(this).hide();
//    });
//});

$(document).ready(function(){
    $(".commentBox").submit(function(){
        if ($("#commentInput").val()){
            var comment = $("#commentInput").val();
            var commenterName = $("#commenterNameInput").val();
            $('.theComments').prepend('<div class="commentStyle">' + '<p class="commenterName">' + commenterName + '</p>' + '<p>' + comment + '</p>' + '<div class="actionBar"> <button class="replyButton small"><i class="fa fa-mail-reply fa-lg"></i>&nbsp Reply</button> <button class="small"><i class="fa fa-link fa-lg"></i>&nbsp Link</button> <button class="flagButton small"><i class="fa fa-flag fa-lg"></i>&nbsp Flag</button></div>' + '<form class="replyBox"><div class="row"><label for="replyNameInput">Your Name &nbsp<a href="#">Log In</a></label> <input class="u-full-width" type="text" placeholder="e.g. Ham4Hamilton" id="replyNameInput"></div> <div class="row"><label for="replyInput">Your Comment</label><textarea class="u-full-width" placeholder="Your comment here..." id="replyInput"></textarea></div><div class="row"><div class="six columns"><label class="agree-tos"><input type="checkbox"><span class="label-body">Read Terms of Service</span></label></div><div class="six columns"><input class="button-primary u-pull-right" type="submit" value="submit reply"></div></div></form><div class="repliesArea"></div>'+'</div>');
        }
        $("#commentInput").val('');
        $("#commenterNameInput").val('');
        return false;
    });
    $(document.body).on('click', '.flagButton', function() {
        $(this).toggleClass('flaggedButton');
    })
    $(document.body).on("submit", ".replyBox", function() {
        if ($(this).parent().find("#replyInput").val()){
        var reply = $(this).parent().find("#replyInput").val();
        var replyName = $(this).parent().find("#replyNameInput").val();
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
    
});