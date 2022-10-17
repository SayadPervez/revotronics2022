$(window).scroll(function(){
    $(".fadeup").css("opacity", 1 - $(window).scrollTop() / 500);
    document.getElementById("registerHeroButton").style.background=`linear-gradient(${$(window).scrollTop()%360+45}deg,var(--neonBlue), var(--neonPink), var(--neonViolet))`;
});

$(document).ready(function() {
    setTimeout(function() {  myScrollTo('aboutdiv') }, 5000);
});

function myScrollTo(id="aboutdiv"){
    document.getElementById(id).scrollIntoView({behavior:"smooth",block:"center"});
}

function openInNewTab(url){
    window.open(url, '_blank').focus();
}