window.onload = () => {
    document.getElementById("toggle-nav").onclick = () => {
        document.querySelector("#header-nav ul").classList.toggle("hide-small");
    };
};