// button click ex!!
document.getElementById("btn-show-msg").onclick = () => {
    document.getElementById("p-msg").innerHTML = "Hi Erin!!"
};

// link click example!!
// e parameter = event that makes it happen (clicking)
// e.currentTarget is the element the event was performed on (the link)
document.getElementById("a-click").onclick = (e) => {
    e.preventDefault(); // dont go to the links destination (to not have the # at the end of the http)
    e.currentTarget.innerHTML = "Clicked";
};

//start and stop ball bouncing
document.getElementById("btn-bounce").onclick = (e) => {
    const ball = document.getElementById("ball");

    if(e.currentTarget.innerHTML.toLowerCase() == "start") {
        e.currentTarget.innerHTML = "Stop";
        ball.classList.add("bounce");
    } else {
        e.currentTarget.innerHTML = "Start";
        ball.classList.remove("bounce");
    }
}

document.getElementById("txt-num-days").onchange = (e) => {
    const numEntered = parseInt(e.currentTarget.value);
    const p = document.getElementById("p-plant-msg");    

    if(numEntered <=1) {
        p.innerHTML = "Yay we were fed today!";
    } else if(numEntered <=2) {
        p.innerHTML = "Im getting a lil thirstyyy"
    } else if (numEntered <= 5) {
        p.innerHTML = "Im starting to wilttttt"
    } else {
        p.innerHTML = "you killed meeee X("
    }
    
};

//toggle navvvv
document.getElementById("toggle-nav").onclick = () => {
    document.querySelector("#main-nav ul").classList.toggle("hide-small");
};