"use strict";

//1
let password = "7Password";
let passwordLength = (password.length);
let passwordFirstLetter = (isNaN(password[0]));

console.log(passwordLength > 8 && passwordFirstLetter == false);



//2
const rate = 36;
let enterAmmount = prompt("Введіть суму в ГРН");
console.log(rate*enterAmmount);



//3
let numberLitre = 5.2;
let priceLitre = 45.22;
let price = numberLitre*priceLitre;

console.log (+price.toFixed(3));




