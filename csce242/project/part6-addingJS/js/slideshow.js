//Next arroww!!
document.getElementById("main-quick-shop-right").onclick = (e) => {
    e.preventDefault();
    console.log("clicked right!!");

    const currentImg = getCurrentSlide();
    let nextImg = currentImg.nextElementSibling;

    if(nextImg == null) {
        nextImg = document.querySelector("#main-quick-shop-imgs section:first-child");
    }

    slide(currentImg, nextImg);
};

//Prev arrow !!
document.getElementById("main-quick-shop-left").onclick = (e) => {
    e.preventDefault();
    console.log("clicked left!!");

   const currentImg = getCurrentSlide();
    let prevImg = currentImg.previousElementSibling;

    if(prevImg == null){
        prevImg = document.querySelector("#main-quick-shop-imgs section:last-child");
    }

    slide(currentImg, prevImg);
};

const slide = (current, next) => {
    current.classList.add("hidden");
    current.classList.remove("columns");
    next.classList.remove("hidden");
    next.classList.add("columns");

};

const getCurrentSlide = () => {
    return document.querySelector("#main-quick-shop-imgs section:not(.hidden)");
};
