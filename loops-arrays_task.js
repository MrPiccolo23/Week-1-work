// Array Activity 1

// let fav_songs = [
//     "Drake - Conrolla ",
//     "The weeknd - Starboy",
//     "Kendrick Lamar - DNA",
// ];
// fav_songs.push("J Cole - Power Trip")
// fav_songs.push("Drake - Nice for what")
// fav_songs.pop()
// console.log(fav_songs)

//  Array Activity 2
// let fav_site = [
//     "Reddit",
//     "Google",
//     "Youtube",
//     "Twitch",
//     "Ebay",
//     "Amazon",
// ];
// fav_site.shift();
// console.log(fav_site)
// .shift method removes the first element from array list

// let fav_site = [
//     "Reddit",
//     "Google",
//     "Youtube",
//     "Twitch",
//     "Ebay",
//     "Amazon",
// ];
// fav_site.unshift("BBC", "Netflix" );
// console.log(fav_site)
// .unshift method adds one or more elements to beginning of array list

// let fav_site = [
//     "Reddit",
//     "Google",
//     "Youtube",
//     "Twitch",
//     "Ebay",
//     "Amazon",
// ];
// fav_site.splice(1,0,"Netflix" );
// console.log(fav_site)
// The splice method changes contents of an array by removing or replacing elements

// Loops Activity 1
let fav_films = ["Lord of the Rings", "Pulp Fiction", "Inception", "The Matrix"]
fav_films.unshift("Spiderman", "The Dark Knight" );
console.log(fav_films)
for(let i = 0; i < fav_films.length; i++){
    console.log(fav_films[i]);
}
// Loops Activity 2

let num = [];
for (let i = 0; i < 6; i++)
{
    num.push(Math.floor(Math.random() * 50) + 1)
}
    console.log(num)

// Loops Activity 3
for (let i = 0; i < 10; i++) {
    console.log(i); 
}
// Loops Activity 4
let fav_movies = ["Lord of the Rings", "Pulp Fiction", "Inception", "The Matrix"]
for (i in fav_movies){
    console.log(fav_movies[i])
}
film_check = fav_movies
    if (film_check[2]){
    console.log("yey it's Inception ");
    }
    else{
    console.log("Boo, we wanted Inception");
    }

// Loops Activity 5
let rand_num = [];
for (let i = 0; i < 6; i++){
    rand_num.push(Math.floor(Math.random() * 30) + 1)
    console.log(rand_num[i])
    if (rand_num[i] % 7 == 0){
        console.log(`${rand_num[i]} is divisible by 7!`);
    }
    else{
        console.log(`${rand_num[i]} is not divisible by 7!`);
    }
}
// Loops Activity 6

const sattarfollowers = ["Imran", "Ian", "Bob", "Charlie"]
const usmanfollowers = ["Imran", "Ian", "Lucy", "Aisha"]
for(let i = 0; i < sattarfollowers.length; i++){
    for(let j = 0; j < usmanfollowers.length; j++){
        if(sattarfollowers[i] === usmanfollowers[j]){
            console.log( "Matching followers:", usmanfollowers[j]);
        }
    }
};



// Loops Activity 7
for (let i=0; i < 7; i++) {
    console.log("Name: Sattar");
}

// This for loop will print ("Name:sattar") sting 7 times.  We start with our initial statement (let i=0), 
// the loop then looks at the condition (i < 7) and the increment expression (i++) and the loop runs accordingly. 
// As long as i is less than 7, i will increment by 1 until it is no longer less than 7.
// Pros we know how exatly what the loop will do and how many times will loop problem. 

let x = 0;
let y = 0;

while (x < 4) {
    x++;
    y += x;

}

// A while loop is a little easier to explain than a for loop because a while loop will simply run the same code over and over until the condition becomes false.
//  Let’s take a look at a simple example of a while loop!


let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);

// similar to a while loop in the fact that it will continue to run until the condition becomes false.
// The only difference is the order in which the loop runs. Here’s a simple example of a do…while statement:
// As you can see, i starts at 0 and is incremented by 1 with each passing iteration. The new value of i is then also logged to the console. 
// In this example, the console will print 1 2 3 4 5.
