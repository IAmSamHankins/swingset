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
            $('.theComments').prepend('<div class="commentStyle">' + '<p class="commenterName">' + commenterName + '</p>' + '<p>' + comment + '</p>' + '<div class="actionBar"> <button><i class="fa fa-mail-reply fa-lg"></i>&nbsp Reply</button> <button><i class="fa fa-link fa-lg"></i>&nbsp Link</button> <button><i class="fa fa-flag fa-lg"></i>&nbsp Flag</button></div>' + '</div>' + '');
        }
        $("#commentInput").val('');
        $("#commenterNameInput").val('');
        return false;
    });
    $('.replyButton').on('click', function() {
        $(this).closest('.commentStyle').find('.replyBox').slideToggle();
    })
});