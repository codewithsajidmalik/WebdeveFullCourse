// class student 
// {
//     constructor(){
//         console.log("object is created")
//     }
// }
// const s1 = new student(); // constructor call ho rha h yaha par

// class student 
// {
//     constructor(firstname,lastname){
//       this.firstname = firstname;
//       this.lastname = lastname;
//     }
//     displayname(){ // method
//         console.log(this.firstname+" "+this.lastname);
//     }
// }
// const s1 = new student("sajid","malik");
// const s2 = new student("anam","khan");
// s1.displayname(); // methods calling
// s2.displayname();

class student 
{
    constructor(firstname,lastname){
      this.firstname = firstname;
      this.lastname = lastname;
    }
    displayname(){ // method
        return this.firstname+" "+this.lastname;
    }
}
const s1 = new student("sajid","malik");
const s2 = new student("anam","khan");
const name1 = s1.displayname(); // return value stored karai h yha****=====

const name2 =s2.displayname();

