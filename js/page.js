$(document).ready(function() {
    setTimeout(function() {  myScrollTo('aboutdiv') }, 5000);
});

function myScrollTo(id="aboutdiv"){
    document.getElementById(id).scrollIntoView({behavior:"smooth",block:"center"});
}

function openInNewTab(url){
    window.open(url, '_blank').focus();
}