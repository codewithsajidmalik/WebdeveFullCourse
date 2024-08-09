// const array = [1,2,3,4,5];
// console.log(array[0]);

// const student = [ // object in array
//     {
//         name:"sajid",// this is zero index 
//         roll:11, // array objects
//         mrks:95
//     },
//     {
//         name:"malik",// this is first index 
//         roll:22, // array objects
//         mrks:98
//     }
// ] 
// const student1 = student[0];
// console.log(student[0])

// const student = ["sajid","malik","khan"]
// console.log(student.length);
// console.log(student)
// student.pop();
// console.log(student)

// console.log(student.sort()); // alphabatically sort ho jayenge

// const  marks = [23,4,5,6,7,8,9];
// console.log(marks);
// marks[0] = 100;
// console.log(marks);
// marks.forEach(function(value,index,array){
//     console.log(value,index,array);

// });

//  ==========********* map in array *******==============
//  const marks =[3,4,5,6];
//  const newMarks = marks.map(function(value){
//     return value*3;
//  });
//  console.log(marks);
//  console.log(newMarks);

const student =["Sajid","Intezar","Shahid","Malik"];
 const newStudents = student.map(function(value){
    return "Mrs'"+value;
 });
 console.log(student);
 console.log(newStudents);

h