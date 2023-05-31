const navLinks = document.querySelectorAll(".navbar__link");

navLinks.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
        navLinks.forEach((item) => {
            item.classList.remove("navbar__link--active");
        });

        e.target.classList.add("navbar__link--active");
    });
});
