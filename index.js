const motHover = document.querySelector('.mot-hover');

    motHover.addEventListener('mouseover', function() {
    motHover.style.color = 'red'; // Change la couleur en rouge au survol
    console.log("Cécile");
    });

const benjamin = document.getElementById("Ben");
console.log(benjamin);

benjamin.addEventListener("mouseover", (event) => {
    console.log(benjamin.innerText);
});
document.addEventListener("DOMContentLoaded", function() {
    var cecile = document.querySelector("#cecile");
    cecile.addEventListener('mouseover', function () {
        console.log('Cécile');
    })
});