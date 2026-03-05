//json file parsing
//https://github.com/portiaportia/portiaportia.github.io/blob/master/json/fish.json
//put json file up online and access it like we're about to do (for assignments)

//do backend asyncronysly
const getFish = async() => {
    const url = "https://portiaportia.github.io/json/fish.json";
    const response = await fetch(url);
    return response.json();
};

const showFish = async() => {
    const fishes = await getFish();
    const fishListDiv = document.getElementById("fish-list");

    fishes.forEach((fish)=>{
        const section = document.createElement("section");
        section.classList.add("fish");
        fishListDiv.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = fish.title;
        section.appendChild(h3);

        const pLength = document.createElement("p");
        pLength.innerHTML = `Length: ${fish.length}`;
        section.appendChild(pLength);

        const h4 = document.createElement("h4");
        h4.innerHTML = "Colors:";
        section.append(h4);

        const ul = document.createElement("ul");
        section.append(ul);

        //loop thru colorssss
        fish.colors.forEach((color)=>{
            const li = document.createElement("li");
            li.innerHTML = color;
            ul.append(li);
        });

        const img = document.createElement("img");
        section.append(img);
        img.src = `https://portiaportia.github.io/json/${fish.img}`;
    });
};



showFish();

//https://openbrewerydb.org/