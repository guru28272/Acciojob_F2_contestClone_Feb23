/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  function mapping(person) {
    if (person.marks > 50) {
      console.log(person);
    }
  }
  arr.map(mapping);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  function mapping(person) {
    if (person.marks > 50) {
      console.log(person);
    }
  }
  arr.map(mapping);
}

function addData() {
  //Write your code here, just console.log
  let student = { id: 4, name: "susan", age: "20", marks: 45 };
  function add(arr, student) {
    arr.push(student);
    console.log(arr);
  }
  add(arr, student);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  function remove(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].marks < 50) {
        array.splice(i, 1);
      }
    }
  }
  remove(arr);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let student = [
    { id: 5, name: "alex", age: "25", marks: 75 },
    { id: 6, name: "bob", age: "28", marks: 65 },
    { id: 7, name: "mike", age: "30", marks: 95 },
  ];
  function concate(person) {
    arr = arr.concat(person);
  }
  concate(student);
  console.log(arr);
}
