// JSON methods
// javaScript object Notation

// JSON.stringify
// JSON.parse

// let student = {
//     name:'john',
//     age: 30,
//     isAdmin: false,
//     courses:['html','css','js'],
//     spouse: null,
// };

// let json = JSON.stringify(student);
// console.log(json);

// let newObject = JSON.parse(json);
// console.log(typeof newObject)

// turn the user into JSON and then read it back into another variable

// let user = {
//     name: 'john smith',
//     age:35
// };

// let newUser = JSON.stringify(user);
// let newUsers = JSON.parse(newUser)
// console.log(typeof newUser)
// console.log(typeof newUsers)
  
    // recursion and stack 

    // linked 
    

    // const list = {
    //     head: {
    //         value: 6
    //         next: {
    //             value: 10                                             
    //             next: {
    //                 value: 12
    //                 next: {
    //                     value: 3
    //                     next: null	
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // };

//   nodde
    // class ListNode {
    //     constructor(data) {
    //         this.data = data
    //         this.next = null                
    //     }
    // }

    // js linked list

    // class LinkedList {
    //     constructor(head = null) {
    //         this.head = head
    //     }
    // }

    // let node1 = new ListNode(2)
    // let node2 = new ListNode(5)
    // node1.next = node2

    // let list = new LinkedList(node1)

    // console.log(list.head.next.data) //returns 5


//     Global variables are those declared outside of a block
// Local variables are those declared inside of a block



// Initialize a global variable
// var species = "human";
 
// function transform() {
//   // Initialize a local, function-scoped variable
//   var species = "werewolf";
//   console.log(species);
// }

// // Log the global and local variable
// console.log(species);
// transform();
// console.log(species);


//  closure


// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();


// if (Math.random() > 0.5) {
//     var x = 1;
//   } else {
//     var x = 2;
//   }
//   console.log(x);


// if (Math.random() > 0.5) {
//     const x = 1;
//   } else {
//     const x = 2;
//   }
//   console.log(x); // ReferenceError: x is not defined


// closure


// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();

// function makeAdder(x) {
//     return function (y) {
//         return x + y;


//     };
//   }
  
//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
  
//   console.log(add5(2)); // 7
//   console.log(add10(2)); // 12


// classes


// // Declaration
// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }
  
//   // Expression; the class is anonymous but assigned to a variable
//   const Rectangle = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
  
//   // Expression; the class has its own name
//   const Rectangle = class Rectangle2 {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };


// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//     // Getter
//     get area() {
//       return this.calcArea();
//     }
//     // Method
//     calcArea() {
//       return this.height * this.width;
//     }
//     *getSides() {
//       yield this.height;
//       yield this.width;
//       yield this.height;
//       yield this.width;
//     }
//   }
  
//   const square = new Rectangle(10, 10);
  
//   console.log(square.area); // 100
//   console.log([...square.getSides()]); // [10, 10, 10, 10]
  