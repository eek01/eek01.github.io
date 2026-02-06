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
