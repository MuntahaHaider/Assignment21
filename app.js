// Chap 43-48(EVENTS)

// Q1
function message(){
    alert("Welcome to the Google....")
}

// Q2
function image1(){
    alert("Buy Refurbished & Second Hand Mobile Phones – I Need A Mobile")
}
function image2(){
    alert("Mobile phones with 128GB Memory: 6 Best Mobile Phones with 128Gb Memory For Immense Storage -")
}
function image3(){
        alert("Buy Refurbished, Second Hand & Used Mobile Phone")
}
function image4(){
    alert("Latest 5g Mobile Phone Online | Samsung India")
}

// Q3
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Q4


// Q5

// Get references to the counter elements
var counterElement = document.getElementById("counter");
var increaseButton = document.getElementById("increaseBtn");
var decreaseButton = document.getElementById("decreaseBtn");

// Initial counter value
var counterValue = 0;

// Update the counter display
function updateCounter() {
    counterElement.textContent = counterValue;
}

// Increase counter on button click
increaseButton.addEventListener("click", function() {
    counterValue++;
    updateCounter();
});

// Decrease counter on button click
decreaseButton.addEventListener("click", function() {
    counterValue--;
    updateCounter();
});






//Chap 49-   (EVENTS)

// Q1
// Q2
// Q3