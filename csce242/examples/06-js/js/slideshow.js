document.getElementById("arrow-next").onclick = (e) => {
    e.preventDefault();
    const currentImg = document.querySelector("#slideshow img:not(.hidden");
    let nextImg = currentImg.nextElementSibling;

    if(nextImg == null){
        nextImg = document.querySelector("#slideshow img:first-child");
    }

    currentImg.classList.add("hidden");
    nextImg.classList.remove("hidden");
};