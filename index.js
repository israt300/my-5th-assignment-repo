function bgcolorchange() {
    const colors = ["#66D2CE", "#2DAA9E", "#EAEAEA", "#E3D2C3", "#F7CFD8", "#C599B6","#E6B2BA","#AA60C8"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
document.getElementById("colorChangeicon").addEventListener("click", bgcolorchange);

 document.getElementById('changepage').addEventListener('click', function() {
    window.location.href = "./inner.html"; 
 });
 const buttonGroup = document.getElementsByClassName('completed')
 Array.from(buttonGroup).forEach((button) => {
    button.addEventListener("click", function () {
        alert("Board Update Successfully!"); 
        button.disabled = true;
        button.style.backgroundColor = "#d1d5db"; 
        button.style.cursor = "not-allowed";
        button.style.opacity = "0.7"; 
    });
});


 let numberDisplay = document.getElementById('numberDisplay');
let number = 6;
let decreaseBtns = document.querySelectorAll('#decreaseBtn');
decreaseBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        if (number > 0) {
            number -= 1; 
            numberDisplay.textContent = number; 
        } else {
            alert("Number has reached 0!");
        }
    });
});
