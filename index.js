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
let decreaseBtns = document.querySelectorAll('.decreaseBtn');
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

let numDis = document.getElementById('numDis');
let num = 24;
let increaseBtns = document.querySelectorAll('#increaseBtn');

increaseBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        if (num < 30) {
            num += 1;
            numDis.textContent = num;
        }
    });
});




document.getElementById("removeBtn").addEventListener("click", function() {
    document.getElementById("content").innerHTML="";
});


function updateDateAndDay() {
    let now = new Date();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayString = daysOfWeek[now.getDay()];
    let dateString = now.toLocaleDateString('en-US');

    document.getElementById("day").textContent = dayString;
    document.getElementById("date").textContent = dateString;
}
setInterval(updateDateAndDay, 1000);


function showMessage(buttonNumber) {
    let allMessages = document.querySelectorAll('.hidden');
    allMessages.forEach(msg => msg.classList.add('hidden')); 
    let message = document.getElementById("msg" + buttonNumber);
    message.classList.remove('hidden');

}