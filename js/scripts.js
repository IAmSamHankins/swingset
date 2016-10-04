//$(document).ready(function(){
//    $("p").click(function(){
//        $(this).hide();
//    });
//});

$(document).ready(function(){
    $("form").submit(function(){
        if ($("#commentInput").val()){
            var comment = $("#commentInput").val();
            var commenterName = $("#commenterNameInput").val();
            $('.theComments').prepend('<div class="commentStyle">' + '<p class="commenterName">' + commenterName + '</p>' + '<p>' + comment + '</p>' + '<div class="actionBar"> <button class="replyButton"><i class="fa fa-mail-reply fa-lg"></i>&nbsp Reply</button> <button><i class="fa fa-link fa-lg"></i>&nbsp Link</button> <button><i class="fa fa-flag fa-lg"></i>&nbsp Flag</button></div>' + '<form class="replyBox"><div class="row"><label for="commenterNameInput">Your Name &nbsp<a href="#">Log In</a></label> <input class="u-full-width" type="text" placeholder="e.g. FoodieFooderson" id="commenterNameInput"></div> <div class="row"><label for="commentInput">Your Comment</label><textarea class="u-full-width" placeholder="Your comment here..." id="commentInput"></textarea></div><div class="row"><div class="six columns"><label class="agree-tos"><input type="checkbox"><span class="label-body">Read Terms of Service</span></label></div><div class="six columns"><input class="button-primary u-pull-right" type="submit" value="submit reply"></div></div></form>' +'</div>');
        }
        $("#commentInput").val('');
        $("#commenterNameInput").val('');
        return false;
    });
    $(document.body).on("click", ".replyButton", function(){
        $(this).closest('.commentStyle').find('.replyBox').slideToggle();
    });
});