window.onload = () => {
    document.getElementById("toggle-nav").onclick = () => {
        document.querySelector("#header-nav ul").classList.toggle("hide-small");
    };
    document.getElementById("mens-toggle-search").onclick = () => {
        console.log("clicked");
        document.querySelector("#mens-search-drop ul").classList.toggle("hide-small");
    };
};