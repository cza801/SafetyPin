$(window).on("scroll", function() {
    if($(window).scrollTop() < 457) {
        $("#navDash").css("background-color", "rgba(36, 38, 45, 0)");
    } else if ($(window).scrollTop() > 457){
       $("#navDash").css("background-color", "rgba(36, 38, 45, 0.8)");

    }
});