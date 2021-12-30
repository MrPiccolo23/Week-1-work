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


const coffeeShop = {
    name: "StarBucks",
    drinks: {
        item: "Cappuccino", price: "£5",
        item: "Latte", price: "£3",
        item: "Red Bull", price: "£2",
        item: "tea", price: "£1",
        item: "hot chocolate", price: "£4"
    },
    Food: {
        item: "Chicken Burger", price: "£5",
        item: "Pizza", price: "£7",
        item: "Sandwich", price: "£2",
        item: "Cookie", price: "£1"
},

    takeOrder: () =>{
        return `${(this.orderCount)}. `;
        orderCount++;
    },
    
    drinksOrdered(){
        return `Your drinks order ${(this.drinks.item)}`;
    },
    foodOrdered (){
        return `Your Food order ${(this.Food.item)}`;
    }

};
console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());


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