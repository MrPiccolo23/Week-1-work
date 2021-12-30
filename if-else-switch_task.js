// Activity 1

age = 16

if (age > 17){
    console.log ("Yes I can serve you.");
}
else {
    console.log("You aren’t old enough”.");
}

// Exaample 2
age = 18
country = "uk"

if (age > 17 && country == "uk"){
    console.log ("Yes I can serve you.");
}
else {
    console.log("You aren’t old enough.");
}

// Activity 2

// let pizzaToppings = "pepperoni";

// switch(pizzaToppings){
//     case "pepperoni":
//     case "extra cheese":
//     case "sausage":
//     case "fresh basil":
//         console.log("These are important ingredients for my pizza");
//         break;
//     case "onion":
//     case "fresh garlic":
//     case "green pepper":
//         console.log("Not the best but not the worst!");
//         break;
//     case "mushroom":
//     case "pineapple":
//         console.log("It's clear you lack knowledge of true italian culture!");
//         break;
//     default:
//         console.log("I don't think that's a pizza topping?");
// }

// Activity 3

// password = "sattarnaqvi"
// if (password < 8){
//     console.log("password is to short");
// }
// else{
//     console.log(password);
// }

// Activity 4

// let num = 10;
// if (num % 3==0 || num % 5==0){
//     console.log("This number is divisible by 3 or 5.");
// }
// else{
//     console.log(" Number Isn't divible by 3 or 5");
// }

// Activity 5
// let num =  15;
// if (num % 3==0 && num % 5==0){
//     console.log("fizz buzz");
// }
// else if (num % 3==0){
//     console.log("fizz");
// }
// else if  (num % 5==0){
//     console.log("buzz");
// }
// else{
//     console.log(num);
// }

// Activity 6 
let num = 10001;
let numString = num.toString(); 
let reverseNumString = numString.split('').reverse().join('');

if (num == reverseNumString){
    console.log(`Yes ${num} is a palindrome`)
} else {
    console.log(`No ${num} is not a palindrome`)
}



// Activity 7

// let time = "3pm"
// let place_of_work = "Manchester"
// let town_of_home = "Rochdale"
// if  (time <"5pm" && place_of_work){
//     console.log("I'm at work" );
// }
// else if (time >"5pm" && town_of_home){
//     console.log("I'm at home");
// }
// else{
//     console.log("I'm communting"); 
// }
// Activity 8


// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// // counter go through whole array using length as limiter
// for (let i = 0; i < vowelArr.length; i++){
// //  console.log(string.lastIndexOf(vowelArr[i]));
// // gets index of vowel in current iteration
//     index = string.lastIndexOf(vowelArr[i]);
// // compares current index to find highest index
// if (index >= highestIndex ){
// // so new highestindex becomes index
//     highestIndex = index;
// // won't reach last two nums in vowelarray
//     lastVowel = vowelArr[i];
// }
// }

// // This like logs the last Vowel to the console. 
// console.log(lastVowel); 
// // This line logs the index number of the last vowel. 
// console.log(highestIndex)



// Activity 9
// let str = "TNT";
// let strReverse = str.split("").reverse().join("");

// if (str === strReverse) {
//     console.log("True");
// } else {
//     console.log("False");
// }
// Activity 10

let num1 = 2
let num2 = 1
if (num1 && num2 % 2==0){
    console.log("Even");
}
else{
    console.log(`${num1 * num2}`);
}