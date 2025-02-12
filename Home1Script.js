function myFunction1(verb,object) {
    alert('Klik disitu untuk ' + verb + object)
}

window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

var nvb = document.getElementById("nvb")
function showMenu(){
    nvb.style.right = "0";
}
function hideMenu(){
    nvb.style.right = "-200px";
}

