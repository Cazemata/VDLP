var menu = document.getElementById("menu");
var btns = menu.getElementsByClassName("item");


for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    });
}

// function currentPage() {
//     element.classList.add("active");
// };

// for (var i = 0; i < nav.length; i++) {
//     nav[i].addEventListener('click', currentPage);
// };