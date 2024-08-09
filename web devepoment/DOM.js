// console.log("malik saab");
// let x =10;
// console.log(x);

// const x = document.getElementById('heading');
// console.log(x)

// const x = document.getElementsByClassName('box')
// // console.log(x);
// console.log(x[1]);

// const x = document.getElementsByTagName('h1')
//  console.log(x);

// const x = document.querySelector('h1')
//  console.log(x);

// const x = document.querySelectorAll('h1')
//   console.log(x);


//  document.querySelector('#heading').style.color = "red";

// setTimeout(()=>{
//     document.querySelector('#heading').style.fontSize = "10px";


// },5000);

// setTimeout(()=>{
//    const x = document.querySelector('#heading')
//    x.style.fontSize = "10px";
//    x.style.backgroundColor = "red";


// },5000);
 

function changeColor(){
  const x =  document.querySelectorAll("#heading")
  x[0].style.backgroundColor = "red";
  x[0].style.color = "yellow";
  x.innerHTML = "malik fitness";
    
}

document.querySelector("#btn").onclick = changeColor;