function mousedownevent(){
  document.querySelector("#box").style.backgroundColor = "green"

}

function mouseupevent(){
   
    setTimeout(()=>{
        document.querySelector("#box").style.backgroundColor = "yellow"

    },2000)

}
function clickevent(){
    setTimeout(()=>{
        document.querySelector("#box").style.backgroundColor = "blue"

    },2000)

}

