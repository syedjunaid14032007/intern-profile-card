// console.log("script.js is connected!");
// const greet = (name) => {
//     return `Hello ${name}`;
// }
// const square = (n) => n*n;
// console.log(square(15));
// console.log(greet('junaid bro'));

// const { use } = require("react");

// const fruits = ["apple","banana","guava"];
// console.log(fruits[0]);
// console.log(fruits.length);
// fruits.push("grapes");
// console.log(fruits);
// console.log(fruits.map(f => f.toUpperCase()));


// const user = {
//     name: "Junaid",
//     age: 19,
//     isIntern: true
// };
// console.log(user.name);
// console.log(user["age"]);

const title = document.querySelector('h1');
const allCards = document.querySelectorAll('.card');
const box = document.getElementById("main-banner");

title.textContent = "Updated Heading";
title.style.color = '#f2b705';
box.classList.add('active');
box.classList.remove('hidden');

const button = document.querySelector("#subscribe");

button.addEventListener("click", () => {
    console.log("Button was clicked");
})

const form = document.querySelector("#sign-up");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    console.log("Signed up : ${email}");
})

const us = {name:"Junaid",age: 19};
const {name, age} = us;

const colors = ["red","green","blue"];
const [first,second] = colors;

const nums = [1, 2, 3];
const morenums = [...nums,4,5];

const base = {theme: "dark"};
const settings = {...base,fontSize: 16};

const total = 250;
console.log(`Total due ${total}`);
const double = n => n*2;
