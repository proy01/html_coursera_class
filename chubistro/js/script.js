let navButton = document.getElementById("nav_button");
console.log(navButton);

navButton.addEventListener("blur", function (){
    if (window.innerWidth < 768) {
        let doCollapse = document.getElementById("navbarSupportedContent");
        new bootstrap.Collapse(doCollapse, {
            toggle: true
        })
    }
});