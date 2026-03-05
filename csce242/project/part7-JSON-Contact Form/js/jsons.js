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

    console.log("hiii");
    womens.forEach((woman)=>{
        const a = document.createElement("a");
        a.href=`${woman.link}`
        womensDiv.prepend(a);

        const section = document.createElement("section");
        section.classList.add("shop-section");
        a.append(section);

        const img = document.createElement("img");
        section.append(img);
        img.src=`https://eek01.github.io/csce242/json/images/womens-images/${woman.img_name}`;

        const div = document.createElement("div");
        div.classList.add("shop-section-txt");
        section.append(div);

        const name = document.createElement("p");
        name.innerHTML = `${woman.title}`;
        div.append(name);

        const price = document.createElement("p");


    });
};

showWomens();