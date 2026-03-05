// link to my json >> https://eek01.github.io/csce242/json/womens.json

//asyncronysly!!
const getWomens = async() => {
    const url = "https://eek01.github.io/csce242/json/womens.json";
    const response = await fetch(url);
    return response.json();
};

const showWomens = async() => {
    const womens = await getWomens();
    const womensDiv = document.getElementById("womens-shop");

    womens.forEach(women)=>{
        const a = document.createElement("a");
    };
};