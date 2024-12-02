// Q1 =>:Given an array of numbers, use the map function with an arrow function to square each element of the array.
// Answer:
// let arr = [2,3,4,5,6]
// let cubeArr = arr.map((value)=>{
//     return (value*value)
// })
// console.log(cubeArr);


// Q2 =>:Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..
//answer:
// let getGrade = (score)=>{
//    return score>=90?'A':
//           score>=80?'B':
//           score>=70?'D':
//           score>=60?'B':'F';
// }

// console.log(getGrade(99));
// console.log(getGrade(89));
// console.log(getGrade(78));
// console.log(getGrade(65));
// console.log(getGrade(50));

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year
//answer:
// let car = {
//     CompanyName:"Ford",
//     model:"ford s3",
//     year:2003
// }
// console.log(car)

// let changeyear = (obj)=>{
//     obj.year=2004
// }
// changeyear(car);
// console.log(car)

// let printDetails = (obj)=>{
//     const{model,year}=obj;
//     console.log(`model:${model} year:${year}`)
// }

// printDetails(car)

// Q4 Given an array of numbers, use the filter function to create a new array containing only the prime numbers
// answer:
// let arr1 = [1,2,3,4,5,6,7,8,9,10]
// let isprime = (n)=>{
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// let filteredArr = arr1.filter((n)=>{
//     return  isprime(n)
// })
// console.log(arr1)
// console.log(filteredArr)

//Map()
//Data trasformation
// const celsius = [0, 20, 30];
// const fahrenheit = celsius.map(temp => temp * 9/5 + 32);
// console.log(fahrenheit); // [32, 68, 86]

//formating data
// const names = ["john", "alice", "bob"];
// const capitalized = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
// console.log(capitalized); // ["John", "Alice", "Bob"]

//Extracting data
// const people = [{ name: "John", age: 25 }, { name: "Alice", age: 30 }];
// const ages = people.map(person => person.age);
// console.log(ages); // [25, 30]

// filter()
// filtering data based on condition
// const numbers = [1, 2, 3, 4, 5];
// const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); // [2, 4]

// reduce()
// const numbers = [1, 2, 3, 4];
// const total = numbers.reduce((acc, num) => acc + num, 0);
// console.log(total); // 10

//6 Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
// let req = async ()=>{
//      Response = await fetch('https://jsonplaceholder.typicode.com/todos')
//      const data = Response.json();
//      console.log(data)
// }
// req()


//Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

// let user = {
//     name:"Red",
//     adress:{
//         state:"TN",
//         city:"chennai",
//         street:"ABC street"
//     },
//     //here the contact  object is not defined to use the optional chaining
// };

// const userContact = user.contact?.phone;
// console.log(userContact)