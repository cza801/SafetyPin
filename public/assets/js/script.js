$(window).on("scroll", function() {
    if($(window).scrollTop() < 457) {
        $("#navDash").css("background-color", "rgba(36, 38, 45, 0)");
    } else if ($(window).scrollTop() > 457){
       $("#navDash").css("background-color", "rgba(36, 38, 45, 0.8)");

    }
});


$('#linksLanding #sendForm').on("click", function() {
	$(body).css("background-image", "linear-gradient(-180deg, #B4EC51 0%, #429321 100%);");
	$(body).css("height", "");
});