function nav() {
    document.getElementById("mydropdown").classList.toggle("show");
    document.getElementById("mydropdown").style.marginLeft = ("-85px");
    document.getElementById("mydropdown").style.marginTop = ("-250px");
}
function one() {
    document.getElementById("drop2").classList.toggle("show");
}
function two() {
    document.getElementById("drop3").classList.toggle("show");
}
nav();
one();
two();