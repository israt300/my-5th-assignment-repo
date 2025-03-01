function bgcolorchange() {
    const colors = ["#66D2CE", "#2DAA9E", "#EAEAEA", "#E3D2C3", "#F7CFD8", "#C599B6","#E6B2BA","#AA60C8"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
document.getElementById("colorChangeicon").addEventListener("click", bgcolorchange);

document.getElementById('changepage').addEventListener('click', function() {
    window.location.href = "./inner.html"; 
});