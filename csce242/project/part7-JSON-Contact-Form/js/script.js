window.onload = () => {
    document.getElementById("toggle-nav").onclick = () => {
        document.querySelector("#header-nav ul").classList.toggle("hide-small");
    };
    document.getElementById("toggle-search").onclick = () => {
        document.querySelector("#womens-search-drop ul").classList.toggle("hide-small");
    };
    
};