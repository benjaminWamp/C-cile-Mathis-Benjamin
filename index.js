document.addEventListener("DOMContentLoaded", function() {
    const motHover = document.querySelector('.mot-hover');

    motHover.addEventListener('mouseover', function() {
    motHover.style.color = 'red'; // Change la couleur en rouge au survol
    console.log("Cécile");
    });

    motHover.addEventListener('mouseout', function() {
    motHover.style.color = 'black'; // Rétablit la couleur par défaut à la sortie du survol
    });
});