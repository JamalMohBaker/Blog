$(document).ready(function () {
    $(".like1").click(function(){
        $(".like-click").toggleClass("liked");
        if ($(".like-click").hasClass("liked")) {
            var audio = new Audio('../images/sounds/like_button.mp3');
            audio.play();
        }
   });
    $(".favorated button").click(function(){
        $(".favo").toggleClass("liked");
        if ($(".favo").hasClass("liked")) {
            var audio = new Audio('../images/sounds/favorate.mp3');
            audio.play();
        }
       
   });
    $(".rate").click(function(){
        $(".add-rate").toggleClass("dis");
   });
    $(".comment").click(function(){
        $(".add-comment").toggleClass("dis");
       
   });
   $(document).ready(function() {
    // Get references to the big image and all small images
    const $bigImage = $("#bigImage");
    const $smallImages = $(".box img");

    // Attach click event handler to all small images
    $smallImages.on("click", function() {
        // Get the source of the clicked small image
        const smallImageSrc = $(this).attr("src");
        // Update the big image source with the clicked small image's source
        $bigImage.attr("src", smallImageSrc);
        var audio = new Audio('../images/sounds/image_click.mp3');
        audio.play();
    });

});    
});    