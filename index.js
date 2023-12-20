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