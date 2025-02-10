// 1. ATM Withdrawal System
function runATM() {
    let balance = 5000, pin = 1234;
    let enteredPin = prompt("Enter PIN:");
    let amount = parseInt(prompt("Enter withdrawal amount:"));

    let result;
    if (parseInt(enteredPin) !== pin) result = "Incorrect PIN";
    else if (amount > balance) result = "Insufficient Funds";
    else if (amount % 100 !== 0) result = "Enter amount in multiples of 100";
    else result = `Withdrawal successful. Remaining balance: ${balance - amount}`;
    
    document.getElementById("atmOutput").innerText = result;
}

// 2. Online Shopping Discount
function runShopping() {
    let orderAmount = parseFloat(prompt("Enter order amount:"));
    let discount = orderAmount > 1000 ? 0.2 : orderAmount >= 500 ? 0.1 : 0;
    let finalAmount = orderAmount - (orderAmount * discount);
    let shipping = finalAmount < 50 ? 10 : 0;

    document.getElementById("shoppingOutput").innerText = 
        `Final amount after discount & shipping: $${(finalAmount + shipping).toFixed(2)}`;
}

// 3. Student Grading System
function runGrading() {
    let marks = parseInt(prompt("Enter marks:"));
    let attendance = parseInt(prompt("Enter attendance percentage:"));
    if (attendance > 90) marks += 5;

    let grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : marks >= 60 ? "D" : "F";

    document.getElementById("gradeOutput").innerText = `Final Grade: ${grade}`;
}

// 4. Smart Traffic Light
function runTrafficLight() {
    let density = prompt("Enter traffic density (Heavy, Moderate, Light):");
    let timing = density === "Heavy" ? "Green for 60s" : density === "Moderate" ? "Green for 40s" : "Green for 20s";

    document.getElementById("trafficOutput").innerText = timing;
}

// 5. Movie Ticket Pricing
function runMoviePricing() {
    let age = parseInt(prompt("Enter age:"));
    let showTime = parseInt(prompt("Enter show time (24-hour format):"));
    
    let price = 12;
    if (showTime < 17) price *= 0.8;
    if (age > 60) price *= 0.7;
    if (age < 12) price *= 0.6;

    document.getElementById("movieOutput").innerText = `Final Ticket Price: $${price.toFixed(2)}`;
}
