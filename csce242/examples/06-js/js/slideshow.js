// next arrow!!!
document.getElementById("arrow-next").onclick = (e) => {
    e.preventDefault();
    const currentImg = getCurrentSlide();
    let nextImg = currentImg.nextElementSibling;

    if(nextImg == null){
        nextImg = document.querySelector("#slideshow img:first-child");
    }

    slide(currentImg, nextImg);
};

// prev arrow!!
document.getElementById("arrow-prev").onclick = (e) => {
    e.preventDefault();
    const currentImg = getCurrentSlide();
    let prevImg = currentImg.previousElementSibling;

    if(prevImg == null){
        prevImg = document.querySelector("#slideshow img:last-child");
    }

    slide(currentImg, prevImg);
};

//get current img
const getCurrentSlide = () => {
    return document.querySelector("#slideshow img:not(.hidden");
}

//slide
const slide = (current, next) => {
    current.classList.add("hidden");
    current.classList.remove("columns");
    next.classList.remove("hidden");
    next.classList.add("columns");
}