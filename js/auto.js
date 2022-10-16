$(window).scroll(function(){
    $(".fadeup").css("opacity", 1 - $(window).scrollTop() / 500);
    document.getElementById("registerHeroButton").style.background=`linear-gradient(${$(window).scrollTop()%360+45}deg,var(--neonBlue), var(--neonPink), var(--neonViolet))`;
});

$(document).ready(function() {
    setTimeout(function() {  document.getElementById("aboutdiv").scrollIntoView({block:"nearest", behavior:"smooth"}); }, 5000);
});