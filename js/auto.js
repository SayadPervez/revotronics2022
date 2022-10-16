$(window).scroll(function(){
    $(".fadeup").css("opacity", 1 - $(window).scrollTop() / 500);
});

$(document).ready(function() {
    setTimeout(function() {  document.getElementById("aboutdiv").scrollIntoView({block:"nearest", behavior:"smooth"}); }, 5000);
});