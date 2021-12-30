// Activity 1
const factorial = (n) =>{
    if ((n === 0) || (n ===1 )){
        return 1;
    } else{
        return (n * factorial (n-1));
    }
}
console.log(factorial(33));

// Activity 2

let orderCount =0;

const takeOrder = (topping, price) =>{
    console.log(`This is ${orderCount} Pizza with ${topping} costs ${price}`);
    orderCount++;
}
takeOrder("Pineapple", "£10");
takeOrder("Chiken", "£4");
takeOrder("Cheese", "£2");

// Activity 3


// function verify(){

// }
// let pin = prompt("Enter your ATM PIN");
// if(pin == "1234")
// alert ("")
let BILLS = [100, 200, 20, 50, 10];

let cash_machine = function (amount) {
    BILLS.sort(function(a, b) { return a < b });
    let i = 0;
    while (amount > 0) {
        if (BILLS[i] <= amount) {
            console.log("Give me a bill of " + BILLS[i] + "€");
            amount = amount - BILLS[i];
        } else if (i < BILLS.length) {
            i = i + 1;
        } else {
            console.log("It lack " + amount + "€");
            break;
        }
    }
}

cash_machine(550);