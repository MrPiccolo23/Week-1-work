// Functions
// const pressGrindBeans = () =>{
//     console.log("Griding for 20 seconds");
// }
// pressGrindBeans();

// let coffeeIsGrinding = false;

// const pressGrindBeans = () =>{
//     if (coffeeIsGrinding){
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans();

const cashWithdrawal = (amount, accnum) =>{
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal(300, 50449921);
cashWithdrawal(30,50449921);
cashWithdrawal(200, 50447921);

const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp(7,3);
console.log(addUp(2,5));

// function might call on other functions and use that to achieve its goal 
// for example 

const mutiplyByNineFifths = (celsius) =>{
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return mutiplyByNineFifths(celsius) + 32;
};
console.log("The temperature is" + getFahrenheit(15) + "F")

// function Declaration

// function square (number){
//     return number * number;
// };
// square(5);

// Function Expressions 
// const square = function(number){
//     return number * number;
// };
// square(5);

// Arrow function syntax
// const square = (number) => {
//     return number * number;
// };
// square(5);

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


// Objects

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers:true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "filter coffee",
//         "tea",
//         "hot chocolate"

//     ]
// };

// activity 

// const person = {
//     name: "sattar",
//     age: "27",
// };
// person.name
// person.age
// console.log(person.name)
// console.log(person.age)


// let offer = "none";
// let time = 1200;
// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers:true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "filter coffee",
//         "tea",
//         "hot chocolate"

//     ],

//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with suprisingly priced sandwish",
//     noOffer: "Sorry no offer"

// };
// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }

// Activity

// let alarm = "";
// let day = "Saturday";
// const alarmclock = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am",
//     weekdays: ["Monday","Tuesday","Wednesday","Thursday","Friday"]
// };
// if (day = "Saturday" || "Sunday"){
//     alarm = alarmclock.weekendAlarm;
//     console.log(alarmclock.weekendAlarm);
// } else if (day == weekdayAlarm){
//     alarm = alarmclock.weekdayAlarm;
//     console.log(alarmclock.weekdayAlarm);
// }

let alarm = "";
let day = "Saturday";

const wakeUp = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
};
if (day = "Saturday" || "Sunday"){
    alarm = wakeUp.weekendAlarm;
    console.log(wakeUp.weekendAlarm);
}else{
    console.log(wakeUp.weekdayAlarm); 
}

// const person = {
//     name: "sattar",
//     age: "27",
//     favSongs: ["Drake - Conrolla ","The weeknd - Starboy","Kendrick Lamar - DNA",]

// };

// console.log(person.name, person.age)
// console.log(person["name"]);
// if (person.name === "sattar"){
//     console.log(person.favSongs)
// };

// let offer = "none";
// let time = 1200;
// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers:true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "filter coffee",
//         "tea",
//         "hot chocolate"

//     ],

//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with suprisingly priced sandwish",
//     noOffer: "Sorry no offer",
//     openCafe:() =>{
//         return "come on in";
//     },
//     closeCafe:() =>{
//         return "we are closed, come back tomorrow!"
//     }

// };
// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

let offer = "none";
let time = 1200;
const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers:true,
    drinks: [
        "Cappuccino",
        "Latte",
        "filter coffee",
        "tea",
        "hot chocolate"

    ],

    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with suprisingly priced sandwish",
    noOffer: "Sorry no offer",
    openCafe (){
        if(this.hasSpecialOffers){
            return "Time for a special offer!";
        }
    },
    closeCafe (){
        return "we are closed, come back tomorrow!"
    }

};
console.log(cafe.openCafe());

// Activity 1

const person = {
    name: "Sattar",
    age: 27,
    fav_Song: "Drake - Conrolla ",
    sayHi() {
    return `Hello, my name is ${this.name}.`;
    },
};
console.log(person.sayHi(), person.age, person.fav_Song);

// Activity 2
const pet = {
    name: "Oreo",
    typeOfPet: " Turkish shorthair cat",
    age: 8,
    colour: "White and Grey",
    eat(){
        return `${this.name} is eating`;
    },
    drink(){
        return `${this.name} is drinking`;
    }
}
console.log(pet.eat());

// Activity 3
// const coffeeShop = {
//     name: "StarBucks",
//     drinks: {
//         item: "Cappuccino", price: "£5",
//         item: "Latte", price: "£3",
//         item: "Red Bull", price: "£2",
//         item: "tea", price: "£1",
//         item: "hot chocolarw", price: "£4",
// },
//     Food: {
//         {item: "Chicken Burger", price: "£5",
//         item: "Pizza", price: "£7",
//         item: "Sandwich", price: "£2",
//         item: "Cookie", price: "£1",
// },

//     takeOrder(){
//         return `${orderCount}. `;
//         orderCount++;
//     // console.log(`This is ${orderCount} Pizza with ${topping} costs ${price}`);
//     // orderCount++;
//     },
    
//     drinksOrdered(){
//         return `Your drinks order ${this.drinks.item}.`;
//     },
//     foodOrdered(){
//         return ` Your Food order ${this.food.item}.`;
//     },

// };
// console.log(coffeeShop.drinksOrdered(), coffeeShop.takeOrder());

// const coffeeShop = {
//     branch: "MONEEY",

//     drinksAndFood: {
//         drinks: {
//             coke: "Coke",
//             coffee: "Coffee"
//         },

//         food: {
//             burger: "Burger",
//             sandwich: "Sandwich"
//         }
//     },

//     prices: {
//         drinkPrices: {
//             coke: "80p",
//             coffe: "80p"
//         },

//         foodPrices: {
//             burger: "£1.00",
//             sandwich: "£2.00"
//         }
//     },

//     // Methods
//     yourOrder() {
//         return "Your order:";
//     },

//     drinksOrdered() {
//         return `${this.prices.drinkPrices.coffe} - ${this.drinksAndFood.drinks.coffee}.`;
//     },

//     foodOrdered() {
//         return `${this.prices.foodPrices.burger} - ${this.drinksAndFood.food.burger}.`;
//     },

//     totalCost() {
//         return `Total cost £13`;
//     }
    
// };

// // We print
// console.log(coffeeShop.yourOrder(), coffeeShop.drinksOrdered(), coffeeShop.foodOrdered(), coffeeShop.totalCost());