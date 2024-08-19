
 //                     chapter 4
 
 //  4.1 

 let a = 3 ,b=true,c="hello";


 // 4.2
 //Legal Variable name
 let hello;
 let go123;
 let su$pecious;
 const web_cj = "s";
 var $uper_Man_;
 // Illegal variable names 
 
 // let 1hello;
 // let %Numb@r;
 // let sir _n@me;
 // var (brown)#;
 // const 0op;
 
 // 4.3
 
//  document.getElementById('main').innerText = "Rules for naming JS variables";
//  document.getElementById("nos").innerText = "Numbers";
//  document.getElementById("dollar").innerText = "$";
//  document.getElementById("_").innerText = "_";
//  document.getElementById("alphabets").innerText = "Alphabets";
//  document.getElementById("example").innerText = " : $my_1stVariable";
//  document.getElementById("dollar2").innerText = "$";
//  document.getElementById("_2").innerText = "_";
//  document.getElementById("letter").innerText = "letter";
//  document.getElementById("sensitive").innerText = "sensitive";
//  document.getElementById("keyword").innerText = "keywords";





 

//                          chapter 5

//5.1

let num1 = 3;
let num2 = 5;
let sum = num1 + num2 ;
console.log(`Sum of ${num1} and ${num2} is ${sum}`);

// 5.2



let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2 ;
console.log(`Difference of ${num1} and ${num2} is ${difference}`);
console.log(`Product of ${num1} and ${num2} is ${product}`);
console.log(`Quotient of ${num1} and ${num2} is ${quotient}`);


// 5.3

let number;
console.log(`Variable after declaration is: ${number}`);
number = 5;
console.log(`Initial value: ${number}`);
number = ++number;
console.log(`Value after increment is: ${number}`);
number+=7;
console.log(`Value after addition is: ${number}`);
number = --number;
console.log(`Value after decrement is: ${number}`);
number/=3;
console.log(`The remainder : ${number%number}`);

// 5.4

let ticket_price = 600;
console.log(`Total cost to buy 5 tickets to a movie is ${ticket_price * 5} PKR`);


// 5.5

let table = 4
console.log("Table of 4");
console.log(`${table} * 1 = ${table*1}`);
console.log(`${table} * 2 = ${table*2}`);
console.log(`${table} * 3 = ${table*3}`);
console.log(`${table} * 4 = ${table*4}`);
console.log(`${table} * 5 = ${table*5}`);
console.log(`${table} * 6 = ${table*6}`);
console.log(`${table} * 7 = ${table*7}`);
console.log(`${table} * 8 = ${table*8}`);
console.log(`${table} * 9 = ${table*9}`);
console.log(`${table} * 10 = ${table*10}`);

// 5.6

let temp_In_Celcius = 25;
let temp_In_Fahrenheit = 70;
let conversion_celcius = (temp_In_Fahrenheit - 32 ) * (5/9);
let conversion_fahrenheit = (temp_In_Celcius * (9/5) ) + 32;
console.log(`25 C is ${(temp_In_Celcius * (9/5) ) + 32} `);
console.log(`70 F is ${(temp_In_Fahrenheit - 32 ) * (5/9)} `);


// 5.7

let item1_Price = 650;
let item2_Price = 100;
let item1_Quantity = 3;
let item2_Quantity = 7;
let shippngCharges = 100
console.log(`Total cost of your order is ${(item1_Price*item1_Quantity) + (item2_Price*item2_Quantity) + shippngCharges}`);

// 5.8

let total_marks = 980;
let obtained_marks = 804;
let percntage = (obtained_marks/total_marks)*100;
console.log(`Total Marks : ${total_marks}`);
console.log(`Obtained Marks : ${obtained_marks}`);
console.log(`Percentage : ${percntage}%`);

// 5.9

let USD = 10;
let SR = 25;
console.log(`Total currency in PKR : ${(USD*104.80) + (SR * 28)}`);

// 5.10

let current_year = 2024;
let birth_year = 2001;
console.log(" Current Year : "+ current_year);
console.log(" Birth year : " + birth_year);
console.log("Your age is : " + (current_year - birth_year));

// 5.11

let Radius = 20;
let pi = 3.142
let Circumference = 2 * pi * Radius;
let Area = pi * Math.pow(Radius,2);
console.log(`Radius of a Circle is : ${Radius}`);
console.log(`The Circumfference is : ${Circumference}`);
console.log(`The Area is : ${Area}`);

// 5.12

let favouriteSnack = "chocolate chip";
let currentAge = 15;
let estimateAge = 65;
let snackPerDay = 3;
let totalSnacks = (snackPerDay*365) * (estimateAge - currentAge);
console.log(`You will need ${totalSnacks} ${favouriteSnack} to last you until the ripe age of ${estimateAge}`);


//                      chapter 6


//6.1


let x = 10;
console.log("Result:");
console.log(`The value of a is : ${x}`);
x= ++x;
console.log(`The value of ++a is: ${x}`);
console.log(`Now the value of a is : ${x}`);
console.log(`The vale of a++ is : ${x++}`);
console.log(`Now the value of a is : ${x}`);
x= --x;
console.log(`The value of --a is: ${x}`);
console.log(`Now the value of a is : ${x}`);
console.log(`The value of a-- is: ${x--}`);
console.log(`Now the value of a is : ${x}`);

//  6.2


let d= 2, e= 1;
let result = --d - --e + ++e + e--;
console.log(result);









