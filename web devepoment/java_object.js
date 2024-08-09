const student = {
    firstname: "sajid",
    lastname: "malik",
    dob: "10 may",
    pin: 1233,
    displayname:function(){
        return this.firstname+" "+this.lastname
    }
}

// console.log(student.firstname)

const fullname = student.displayname();
console.log(fullname);