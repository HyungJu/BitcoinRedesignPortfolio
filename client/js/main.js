var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
        document.getElementById("header-bg").style.opacity = "0.3";
    } else {
        document.getElementById("header").style.top = "-120px";
        document.getElementById("header-bg").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
}
