$(window).scroll(function(){
    $(".fadeup").css("opacity", 1 - $(window).scrollTop() / 500);
    document.getElementById("registerHeroButton").style.background=`linear-gradient(${$(window).scrollTop()%360+45}deg,var(--neonBlue), var(--neonPink), var(--neonViolet))`;
});

$(document).ready(function() {
    setTimeout(function() {  scrollTo() }, 5000);
});

function scrollTo(id="aboutdiv"){
    document.getElementById(id).scrollIntoView({block:"nearest", behavior:"smooth"});
}

new FlipDown(1667390400, "registerBy",{theme:"light"}).start();
new FlipDown(1667619000, "eventBy",{theme:"light"}).start();