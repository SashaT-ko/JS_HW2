"use strict";

//1
let password = "7Password";
let passwordLength = password.length;
let isFirstLetterNumber = (!isNaN(password[0]));

console.log(passwordLength > 8 && isFirstLetterNumber == true);



//2
const rate = 36;
let userAmmount = prompt("Введіть суму в ГРН");
console.log(rate*userAmmount);



//3
let newUserAmount = 5.2;
let price = 45.22;
let userPrice = newUserAmount*price;
console.log (+userPrice.toFixed(2));




