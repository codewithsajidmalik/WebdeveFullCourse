// function loginUser(){
//  console.log("hello world")

// }

// function displayUser(){
//     console.log("sajid")
// }

// loginUser();
//  displayUser();

function loginUser(cb){
    console.log("hello world")
    cb(); // cb =  displayuser
   
   }
   
   function displayUser(){
       console.log("sajid")
   }
   
   loginUser(displayUser);  //  this is the call back function
   