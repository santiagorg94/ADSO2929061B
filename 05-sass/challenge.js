const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener("click", function() {
    menu.classList.toggle("show"); 
    menuToggle.textContent = menu.classList.contains("show") ? "X" : "☰"; // Cambia entre 'X' y '☰'
});


window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
        menu.classList.remove("show"); 
        menu.style.display = "flex"; 
        menuToggle.textContent = "☰"; 
    } else {
        menu.style.display = ""; 
    }
});

