let navButton = document.getElementById("nav_button");

navButton.addEventListener('blur', function (){
    if (window.innerWidth < 768) {
        new bootstrap.Collapse("#navbarSupportedContent", {
            toggle: true
        });
    }
})