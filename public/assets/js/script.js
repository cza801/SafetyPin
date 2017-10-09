var header = $(".navbar");
$(window).scroll(function() {
var scroll = window.scrollTop();
if (scroll = 100vh) {
    header.addClass("backbround-color: rgba(0,0,0,.6)");
} else {
    header.removeClass("backbround-color: rgba(0,0,0,.6)");
}
});