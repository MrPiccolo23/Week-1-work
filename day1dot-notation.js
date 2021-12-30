
// const i = ["Hello"]

// console.log(i);

// console.log("Hello World")

// console.log("hello".toLocaleUpperCase());

// console.log(Math.random());

// console.log(Math.random()*10);

// console.log(Math.floor(Math.random()*10));

// console.log("   |   |")
// console.log("   |   |")
// console.log("   |   |")
// console.log("-----------")
// console.log("   |   |")
// console.log("   |   |")
// console.log("   |   |")
// console.log("-----------")
// console.log("   |   |")
// console.log("   |   |")
// console.log("   |   |")

// printing grint using array loop

// for (let i = 0; i < 3; i++){
//     console.log("   |   |")
// }
// for (let i = 0; i < 1; i++){
//     console.log("-----------")
// }
// for (let i = 0; i < 3; i++){
//     console.log("   |   |")
// }
// for (let i = 0; i < 1; i++){
//     console.log("-----------")
// }
// for (let i = 0; i < 3; i++){
//     console.log("   |   |")
// }


// Extra activiy 1
// console.log(" Name: Sattar Naqvi")
// console.log(" Age: 27 ")
// console.log(" Star Sign: Aquarius")

// Extra activity 2


// day 2
// .charAt displays 8th character .toUpperCase makes the character uppercase.
// console.log("All around the world".charAt(7).toUpperCase());

// let i = 10;

// i = i + 2;

// console.log(i)
// i = 12

// let i = 10;

// i += 2;

// console.log(i)
// Better way to get i = 12

// prints favouriteDrink in terminal 
// let favouriteDrink = "Red Bull";
// console.log(favouriteDrink)

// let favouriteDrink = "Red Bull";
// console.log("My favourite drink is" +  favouriteDrink);

// template literals are ${name}
// let name = "Sattar"
// let age = 27;
// let favDrink = "Red Bull"

// console.log(`Hi, my name is ${name}. I am ${age} and my favouriate drink is ${favDrink}.` );


// Activity 1

// let name = "Sattar"
// let age = 27;
// let favColour = "Green"

// console.log(`Hi, my name is ${name}. I am ${age} and my favouriate colour is ${favColour}.` );

// name = "Usman"
// age = 28;
// favColour = "Red"

// console.log(`Hi, my name is ${name}. I am ${age} and my favouriate colour is ${favColour}.` );



// Activity 2

// let breakfast = "Eggs and Beans"
// let lunch = "Sandwiches"
// let dinner = "Pasta"

// console.log(`Today I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.` );

// breakfast = "Cereal"
// lunch = "Burgers"
// dinner = "Curry"

// console.log(`Tomorrow I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.` );




// Activity 3
// let date1 = new Date("02/18/2022"); 
// let date2 = new Date ();

// let difference = date1.getTime() - date2.getTime();  
// let days = Math.ceil(difference / (1000 * 3600 * 24));

// console.log(days,   "days left until my birthday.");






// Activity  4 Example 1
// space1 = "O"
// space2 = "O"
// space3 = "X"
// space4 = "X"
// space5 = "O"
// console.log("   |   |")
// console.log(`${space1}  | ${space2} | `)
// console.log("   |   |")
// console.log("-----------")
// console.log("   |   |")
// console.log(`${space3}  | ${space4} |`)
// console.log("   |   |")
// console.log("-----------")
// console.log("   |   |")
// console.log(`${space5}  |   |`)
// console.log("   |   |")


// Activity 4 Example 2

// space1 = "O"
// space2 = "O"
// space3 = "X"
// space4 = "X"
// space5 = "O"
// const vertical = [
//     `${space1}  | ${space2}   |   `,
//     "   |     |   ",
//     "   |     |   ",
//     "-------------",
//     "   |     |   ",
//     `${space3}  | ${space4}   |   `,
//     "   |     |   ",
//     "-------------",
//     "   |     |   ",
//     `${space5}  |     |   `,
//     "   |     |   ",
// ]

// for(let i = 0; i < vertical.length; i++){
//     console.log(vertical[i])
// };



// JavaScript If Else statments

// if (1==="1"){
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// It's false because 1 = number and "1" = string triple = sign they must be the same.

// if (1 !="1"){
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// It's false becasue != is the does not equal sign

// let place = "Manc";
// let weather = "Cloudy";

// if (place == "Manc" && weather == "Sunny"){
//     console.log("Check again");
// }
// else if (place == "Manc" && weather == "Rain"){
//     console.log("Obvs");
// }
// else {
//     console.log("What it isn't raining?");
// }

// && both conditions have to be met
// in order for the code to run.

// ||either condition can be met in order
// for the code to run.

let day = "Saturday"
        //  true     or     false
if (day == "Saturday" || day == "Sunday"){
    console.log("It's weekend!");
}
else {
    console.log("When's weekend!");
}

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

// let breakfast = "Eggs and Beans"
// let lunch = "Sandwiches"
// let dinner = "Pasta"

// console.log(`Today I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.` );

// breakfast = "Cereal"
// lunch = "Burgers"
// dinner = "Curry"

// console.log(`Tomorrow I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.` );

let pizzaToppings = "pepperoni";

switch(pizzaToppings){
    case "pepperoni":
    case "extra cheese":
    case "sausage":
    case "fresh basil":
        console.log("These are important ingredients for my pizza");
        break;
    case "onion":
    case "fresh garlic":
    case "green pepper":
        console.log("Not the best but not the worst!");
        break;
    case "mushroom":
    case "pineapple":
        console.log("It's clear you lack knowledge of true italian culture!");
        break;
    default:
        console.log("I don't think that's a pizza topping?");
}

// Activity 3

password = "sattarnaqvi"
if (password < 8){
    console.log("password is to short");
}
else{
    console.log(password);
}

// Activity 4

num = 10
if (num % 3==0 || num % 5==0){
    console.log("This number is divisible by 3 or 5.");
}
else{
    console.log(" Number Isn't divible by 3 or 5");
}

// Activity 5
num =  10
if (num % 3==0 && num % 5==0){
    console.log("fizz buzz");
}
else if (num % 3==0){
    console.log("fizz");
}
else if  (num % 5==0){
    console.log("buzz");
}
else{
    console.log(num);
}

// Activity 6 
num = 20202


// Activity 7

time = "3pm"
place_of_work = "Manchester"
town_of_home = "Rochdale"
if  (time <"5pm" && place_of_work){
    console.log("I'm at work" );
}
else if (time >"5pm" && town_of_home){
    console.log("I'm at home");
}
else{
    console.log("I'm communting"); 
}
// Activity 8


// string = "zxdcnlgcfxe;jkfbdshinsj;dfbdjksafbjfbjknebgisjdfnjdksjfbjlksdnejFBJKSDS"
// char_pos = string[::-1].find("e")
// char_index = len(string) - char_pos
// print(char_index)

// # if char == "a" or char == "e" or char == "i" or char == "o" or char == "u":
// #     print(char)
// let word = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"


// Activity 9
let str = "TNT";
let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
    console.log("True");
} else {
    console.log("False");
}
// Activity 10

num1 = 3
num2 = 6
if (num1 && num2 % 2==0){
    console.log("Even");
}
else{
    console.log(num1 * num2);
}