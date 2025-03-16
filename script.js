document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown-btn");

    dropdowns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            this.classList.toggle("active"); // Toggles active class
            let icon = this.querySelector(".icon"); // Selects the icon
            icon.classList.toggle("rotate"); // Triggers rotation effect
        });
    });
});
