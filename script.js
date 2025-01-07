document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for getting in touch! We'll respond as soon as possible.");
        form.reset();
    });
});
