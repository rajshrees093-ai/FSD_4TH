console.log("Rajshree Bhuyan");

// object
let students = { n: "hari", age: 22, course: "CSE" };
console.table(students);

// array table
console.table(["apple", 12, "Ece"]);

// time check
console.time("test");
for (let i = 0; i < 10000; i++) {}
console.timeEnd("test");

// grouping
console.group("cse24");
console.log("name: prip");
console.groupEnd("cse24");

// counter
console.count("click");
console.count("click");
console.count("click");
console.count("click");
console.count("click");

// function
function add(p, q) {
  return p + q;
}
console.log(add(2, 3));

// arrow function
const mul = (a, b) => a * b;
console.log(mul(2, 3));

// array operations
let arr = [10, 20, 30, 40];
console.log(arr[0]);
arr.push(20);
arr.pop();
console.log(arr);

// object
let student1 = {
  name: "rajshree",
  age: 20,
  course: "b.tech"
};
console.table(student1);

// date
let today = new Date();
console.log(today);

// another table
let studentss = { name: "raj", age: 25, course: "cse" };
console.table(studentss);


console.log=(Math.random());

//string
text="hello world";
console.log(text.length());
console.log(text.toUppercase());
console.log(text.toLowercase());
console.log(text.includes("java"));

//type conversion

let strnmm="123";
let convert  =Number(strnmm);
console.log(convert+"  ");

//nan
console.log(isNaN("abc"));
console.log(isNaN(123));

//dom manipulation
setTimeOut(()=>{
    console.log("executed after 2 second");
},2000);

//try catch
// try{
//     let result 

// }
