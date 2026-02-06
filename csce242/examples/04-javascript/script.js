// function sayHello(){
//     alert("Hello World");
// }

//new way to write functionss!!! arrow function
// let sayHello = () => {
//     alert("Hello World");
// };

// window.onload ensures body is loaded first
// window.onload = () => {
//     alert("Hello World");
// };

const bounceBall = () => {
    const ball = document.getElementById("ball");
    ball.classList.add("bounce");
};

//var=global scope
//let=changable
//const=default, is need to change variable, change to let

// When the user clicks the button their name is written to paragraph
const writeMessage = () => {
    const firstName = document.getElementById("txt-first-name").value;
    const messageP = document.getElementById("message");

    messageP.innerHTML = "Hellooo " + firstName;
};

//!!!!! always
window.onload = () => {
    document.getElementById("bounce-button").onclick = bounceBall;
    document.getElementById("message-button").onclick = writeMessage;
};


