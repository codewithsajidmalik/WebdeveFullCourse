// let btn = document.querySelector("#btn");
// btn.onclick = demo; // function calling
// btn.onclick = demo2; // function calling

function demo(){
    console.log("event 1")
}

function demo2(){
    console.log("event 2") // event override
}

// event listening

document.querySelector("#btn").addEventListener("click",demo);
document.querySelector("#btn").addEventListener("click",demo2);
// console.log("ok")