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


// function addTillTen() {
//      let i = 0;
//      for (i = 0; i < 10; i += 0.2) {
//        console.log(i);
//      }
//    }
   
//    addTillTen();


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



// let arr = ["I", "Study", "Javascript"]
// arr.splice(0,1)
// console.log(arr)

// let arr = ["I", "Study", "Javascript"]
// console.log(arr.slice())


// let arr = ["I", "Study", "Javascript"]
// arr.forEach((item,index) => {
//      console.log('list of items:', item, 'this is the index:', index)
     // console.log((arr.indexOf("I" ,0)))
     // console.log((arr.indexOf(2, 0)))
     // console.log(arr.sort)
// })

     // let arr = [1,2,3,4,5,2]

     // console.log(arr.includes(2));

     // console.log(arr.reverse());
     // arr.map((item, index) => {
     //      console.log('list off items:', 'This is index of:', index)
     // })


// function compare (a,b) {
//      if(a > b) {
//           return 1;
//      }if (a == b){
//           return 0;
//      }
// }
// arr.compare(a,b)


// write an array that will sort

// Write a function that will sort an array in descending order [5, 2, 1, -10, 8]

// let arr = [5, 2, 1, -10, 8];

// let sortedArr = arr.sort();
// console.log(sortedArr.reverse()); 

// function sortNumbers(arr) {
//      arr.sort(function(a, b) {
//        return b - a;
//      });
//      return arr;
//    }

// let arr = [5, 2, 1, -10, 8];
// let sortedArr = sortNumbers(arr);
// console.log(sortedArr); 


// // Write a function that will sort an array ascending order [5, 2, 1, -10, 8]

// let arr = [5, 2, 1, -10, 8];

//    let sortedArr = arr.sort();
// console.log(sortedArr); 


// you have a javascript array of user objects, each one has user.name.  write the code that converts it into an array of names 

// const users = [
//      {
//      name:'john', age:30
// },
// {
//      name:'peter', age:25
// },
// {
//      name:'mary', age:28
// },
// ]


// console.log (users.map(item => item.name));



// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.


// const input = "George Raymond Richard Martin";

 
// console.log( input.split(" ").map(function (words){ return words[0]; }) );


// const initials = input
//   .split(" ")
//   .map((word) => word[0])
//   .join("");

//   console.log(initials);

  

// console.log( input.split(" ").map(function (words){ return words[0]; }).join("") );


// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

// const input = [
//      {
//        name: "John",
//        age: 13,
//      },
//      {
//        name: "Mark",
//        age: 56,
//      },
//      {
//        name: "Rachel",
//        age: 45,
//      },
//      {
//        name: "Nate",
//        age: 67,
//      },
//      {
//        name: "Jennifer",
//        age: 65,
//      },
//    ];
   
//    const ages = input.map((name) => name.age);

// const ages = input.map(function (name) {
//      return name.age 
// })
   
//   console.log([Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]) ;


// or written with Arrow function


// const input = "George Raymond Richard Martin";

// console.log(
//   input
//     .split(" ")
//     .map(function (word) {
//       return word[0];
//     })
//     .join("")
// );
// function getInitials(input) {
//      let initials = "";
//      const words = input.split(" ");
   
//      for (let i = 0; i < words.length; i++) {
//        initials += words[i].charAt(0);
//      }
   
//      return initials.toUpperCase();
//    }
   
//    const input = "George Raymond Richard Martin";
//    const initials = getInitials(input);
   
//    console.log(initials); // Output: GRRM



// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

//    function getAgeDifference(input) {
//      let minAge = input[0].age;
//      let maxAge = input[0].age;
   
//      for (let i = 1; i < input.length; i++) {
//        const age = input[i].age;
//        if (age < minAge) {
//          minAge = age;
//        }
//        if (age > maxAge) {
//          maxAge = age;
//        }
//      }
   
//      const ageDifference = maxAge - minAge;
//      return {
//        youngestAge: minAge,
//        oldestAge: maxAge,
//        ageDifference: ageDifference,
//      };
//    }
   
//    const input = [  
//      {    name: "John",    age: 13,  }, 
     
//      {    name: "Mark",    age: 56,  }, 
     
//      {    name: "Rachel",    age: 45,  }, 
     
//      {    name: "Nate",    age: 67,  },  
     
//      {    name: "Jennifer",    age: 65,  },];
   
//    const result = getAgeDifference(input);
//    console.log(result); // Output: { youngestAge: 13, oldestAge: 67, ageDifference: 54 }



// const input = [
//      {
//        name: "John",
//        age: 13,
//      },
//      {
//        name: "Mark",
//        age: 56,
//      },
//      {
//        name: "Rachel",
//        age: 45,
//      },
//      {
//        name: "Nate",
//        age: 67,
//      },
//      {
//        name: "Jennifer",
//        age: 65,
//      },
//    ];
   
//    const ages = input.map((person) => person.age);
   
//   console.log([Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]) ;
  


// let set = new Set();
// let john = {name:  "john"}
// let peter = {name:  "peter"}
// let mary = {name:  "mary"}


// set.add(john);
// set.add(peter);
// set.add(mary);
// set.add(peter);
// set.add(john);
// set.add(peter);


// console.log(set.size);


// let values = ["harry", "barry", "marry", "harry", "barry", "marry", "harry", "barry", "marry" ];

// console.log(new Set(values));

// const newObject = {
//      name: "Jennifer",
//      age: "65",
// };
// console.log(Object.entries(newObject));

// const newObjects = {}


// write a function sumSalaries(salaries) that returns the sum of all salaries using object.values and a for .. of  loop. if salariesis empty, then the result must be 0.
   


// let salaries = {
//      "john": 100,
//      "peter": 300,
//      "mary": 250
// };

// function sumSalaries(salaries) {

//      let sum = 0;
//      for (let salary of Object.values(salaries)) {
//        sum += salary;
//      }
   
//      return sum;
     
//    }

   
// console.log(sumSalaries(salaries));

// function sumSalaries(salaries) {
//      return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
//    }
   

// array destructing


// let arr = ['John', 'Emma' ]

// let [firstName, lastName] = arr;

// console.log(arr)

// console.log(arr[0])
   

// let user = {};
// [user.name, user.surname] = "john smith".split("")

// console.log(typeof "john smith".split(""))

// console.log(typeof "john smith")


// let users = new map ();
// users.set('name', 'john')
// user.set("age", '30')



// Write the destructuring assignment that reads name property into the variable name.years property into the variable age.isAdmin property into the variable isAdmin (false, if no such property)Here’s an example of the values after your assignment:

// let user = {
//      name: "John",
//      years: 30
//    };
   
//    let {name, years: age, isAdmin = false} = user;


//    console.log(name)
//    console.log(age)
//    console.log(isAdmin)





  //  let salaries = {
  //    "John": 100,
  //    "Pete": 300,
  //    "Mary": 250,
     
  //  };

   

  //  function topSalary(salaries) {
  
  //    let maxSalary = 0;
  //    let topPaid = null;
   
  //    for(let [name, salary] of Object.entries(salaries)) {
  //      if (salary > maxSalary) {
  //        maxSalary = salary;
  //        topPaid = name;
  //      }
  //    }
   
  //    return topPaid;
  //  }

  //  console.log(topSalary(salaries));



//   function topSalary(salaries) {
//   let maxSalary = 0;
//   let topEarner = null;
  
//   if (Object.keys(salaries).length === 0) {
//     return null;
//   }
  
//   for (let [name, salary] of Object.entries(salaries)) {
//     if (salary > maxSalary) {
//       maxSalary = salary;
//       topEarner = name;
//     }
//   }
  
//   return topEarner;
// }

// let salaries = {}; // Empty object

// console.log(topSalary(salaries)); // Output: null


// function topSalary(salaries) {
//      let maxSalary = 0;
//      let topEarners = [];
     
//      if (Object.keys(salaries).length === 0) {
//        return null;
//      }
     
//      for (let [name, salary] of Object.entries(salaries)) {
//        if (salary > maxSalary) {
//          maxSalary = salary;
//          topEarners = [name];
//        } else if (salary === maxSalary) {
//          topEarners.push(name);
//        }
//      }
     
//      return topEarners[Math.floor(Math.random() * topEarners.length)];
//    }
 
//    console.log(topSalary(salaries)); // Output: "Pete" or "David"
      




//    describe("topSalary", function() {
//      it("returns top-paid person", function() {
//        let salaries = {
//          "John": 100,
//          "Pete": 300,
//          "Mary": 250
//        };
   
//        assert.equal( topSalary(salaries), "Pete" );
//      });
   
//      it("returns null for the empty object", function() {
//        assert.isNull( topSalary({}) );
//      });
//    });


// let now = new Date();
// console.log(now);

// let year = now.getFullYear();
// console.log(year)

// let hours = now.getHours();
// console.log(hours)

// let date = new Date(2020, 0, 4);
// console.log(date)


// create a date object for the date: feb 20, 2012, 3:12am.

// let datesTime = new Date(2012, 01, 20, 3, 12);
// console.log(datesTime);


// JSON method






   


  
