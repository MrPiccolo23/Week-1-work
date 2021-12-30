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
