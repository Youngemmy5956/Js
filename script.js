// console.log("hello word")

// alert("hello word")

// console.log(typeof 4.5)

// console.log(typeof true)

// console.log(typeof 4 < 3)

// console.log(typeof 4 > 2)



// var myname=prompt ("enter a number", "");



// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
  

// function greet (name) {
//      return 'Hello world' +name;
// }
// console.log (greet('Peter'))

// const color = "RED"

// function changeColor ()  {
//   return color
// }
// console.log(color ())


// function isPrime(num) {
//      // Check if num is less than 2, as all prime numbers are greater than 1
//      if (num < 2) {
//        return false;
//      }
         
//      // Check for divisors from 2 up to the square root of num
//      for (let i = 2; i <= Math.sqrt(num); i++) {
//        if (num % i === 0) {
//          return false;
//        }
//      }
   
//      // If no divisors were found, num is prime
//      return true;
//    }
//    console.log(isPrime(7))
 

// function isPrime(n){
//      if (n===1){
//           return false;
//      }else if (n===2){
//           return true
//      }else{
//           for (var x=2; x< n; x++){
//                if (n % x === 0){
//                     return false
//                }
//           }
//           return true;
//      }

// }
// console.log(isPrime(3))

//    function getType(value) {
//      return typeof value;
//    }    
       

//    console.log(getType("hello")); // "string"
//    console.log(getType(42)); // "number"
//    console.log(getType(true)); // "boolean"
//    console.log(getType({})); // "object"
//    console.log(getType(undefined)); // "undefined"
//    console.log(getType(function() {})); // "function"


//    console.log(typeof true)
//    console.log(typeof 42)
//    console.log(typeof undefined)
//    console.log(typeof Hello)
//    console.log(typeof function() {})
//    console.log(typeof {})



// var arrayOfNumbers = [3,5,7,9,10];
//  console.log(arrayOfNumbers[0])

//  var objects={
//      animal: 'cow'
//      number :[2,4,6,8,10],
//  }
//   console.log(objects.number) 


// var newObject =['red','blue','white','black'];
// myArray[0]= 'food'
// myArray.push(green)
// // myArray.pop(green)
// myArray.unshift(green)
// console.log(myArray)


// let firstName = prompt("Please enter your first name:");
// let lastName = prompt("Please enter your last name:");

// console.log("Your full name is: " + firstName + " " + lastName);


// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");

// console.log(`Hello ${firstName} ${lastName}!`);


// console.log(2 + 5);




// let num1 = 2;
// let num2 = 5;

// let sum = num1 + num2;

// console.log(sum);



// let sum= 1+1
// console.log(sum)


// let num = (prompt("Enter a number: "));

// if (num > 0) {
//   console.log("Positive number");
// }
// else if (num < 0) {
//   console.log("Negative number");
// }
// else {
//   console.log("Zero");
// }



// let john = {
//      name:'john',
//      sayHi: function () {
//           alert('hi john')
//      }
// }

// john.sayHi();


// let str = 'Hello'
// console.log(str.toUpperCase());

// let n = 1.23456;
// console.log(n.toFixed(3));

// console.log(typeof 0);

// console.log(typeof new Number(0));

// let number = 0;


// let number = 4;


// let num = Number('123')


// let str = 'Hello'

// str = 5;
// console.log(str);

// let str = {
//      name:'john'
// }
// str.name
// console.log(str.name)

// let billion  = 1000000000;

// let billions = 1_000_000_000;

// let billionss = 1e9;

// console.log(1e3 * 1000);


// let num = 255;

// console.log(num.toString(16));

// let num = 255.123456;

// console.log(math.round(num));



// let num = 255.123456;


// console.log(num.toFixed(1));

// let num = 255.123456;
// console.log(parseInt(num));

// let num = '255';
// console.log(typeof parseFloat(num));

// let num = '255';
// console.log(parseFloat(num));




// create a script that promts the user to enter two numbers and then shows their sum

// let num1 = parseInt(prompt("Enter the first number: "));
// let num2 = parseInt(prompt("Enter the second number: "));


// let sum = num1 + num2;

// alert("The sum of " + num1 + " and " + num2 + " is " + sum);




// write a javascript function that will run and add 0.2 till it gets to 10

// let i = 0;
// while(1 != 10){
//      1+= 0.2;
// }


function addTillTen() {
     let i = 0;
     for (i = 0; i < 10; i += 0.2) {
       console.log(i);
     }
   }
   
   addTillTen();


// let i = 0;
// while(i != 10){
//      i += 0.2;
// }


// function addTillTen() {
//      let sum = 0;
//      let num = 0;
//      while (num < 10) {
//        sum += 0.2;
//        num += 0.2;
//      }
//      return sum;
//    }


// function sum (a, b){
//      return a + b
// }
// console.log(sum(2,3));

// console.log('the sum of the numbers are:', sum(2,3));


// console.log(`the sum of the numbers are = ${sum(2,3)}`);


// special character

// let people = "Guests:\n * john\n * peter\n * mary";

// console.log(people);


// let anotherStr = "Hello world, \*Another quotes\*"
// console.log(anotherStr)



// let num1 =  
// let num2 = prompt("Enter the second number:");

// // Convert the input strings to numbers (since prompt returns string)
// num1 = parseInt(num1);
// num2 = parseInt(num2);

// // Add the two numbers
// let sum = num1 + num2;

// if (sum > 100) {
//     alert("The sum is greater than 100!");
// } else if (sum === 100) {
//     alert("The sum is equal to 100.");
// }else
// alert ("The sum is less than 100.");




// function sumInput() {
//      let numbers = [];
//      while (true) {
//        let input = prompt("Enter a number:");
   
//        // stop asking for input when user enters a non-numeric value, an empty string or presses "Cancel"
//        if (input === "" || input === null || !isFinite(input)) {
//          break;
//        }
   
//        // add the input number to the array
//        numbers.push(+input);
//      }
   
//      // calculate the sum of array items
//      let sum = 0;
//      for (let number of numbers) {
//        sum += number;
//      }
//      return sum;
//    }

   
//    function sumInput() {
//      let numbers = [];
//      while (true) {
//        let input = prompt("Enter a number:");
   
//        // stop asking for input if the input is empty, not a number, or "Cancel" is clicked
//        if (input === '' || input === null || !isFinite(input)) break;
   
//        numbers.push(+input);
//      }
   
//      let sum = 0;
//      for (let number of numbers) {
//        sum += number;
//      }
//      return sum;
//    }
   
// Write a function that return a string with the upper case first character data

// function capitalizeFirstLetter(str) {
//      return str.charAt(0).toUpperCase() + str.slice(1);
//    }
   
   
//    console.log(capitalizeFirstLetter("hello world")); 
//    console.log(capitalizeFirstLetter("my beautiful wife")); 
   

//    Write a function that would extract numeric value from string and return it

   
// function extractNumber(str) {
//      const regex = /\d+/g;
//      const result = str.match(regex);
//      return result ? Number(result[0]) : null;
//    }
   
//    This function uses a regular expression (regex) to find any sequence of one or more digits in the input string, and returns the first match as a number. If there are no matches, it returns `null`.