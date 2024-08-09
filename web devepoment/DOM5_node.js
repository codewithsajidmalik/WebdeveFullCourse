// console.log(document);
// let x = document.querySelector("#header");
// console.log(x.parentNode); // parent is body
// console.log(x.childNodes[0].nodeValue); // child node is text
// console.log(x.previousSibling);

function addnew(){
    const para = document.createElement("p");
    const node = document.createTextNode("anam fitness khan"); // paragraph ko add kaara diya yha 
    para.appendChild(node);

    const elem = document.querySelector('#box1'); // box1 ke ander add hua hai 
    elem.appendChild(para);
}