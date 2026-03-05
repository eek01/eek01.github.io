// link to my json >> https://eek01.github.io/csce242/json/womens.json

//asyncronysly!!
const getWomens = async() => {
    const url = "https://eek01.github.io/csce242/json/womens.json";
    const response = await fetch(url);
    return response.json();
};

const showWoman = async() => {
    const womens = await getWomens();
    const shopWomens = document.getElementById("shop-content");
    
    const imgDiv = document.createElement("div");
    imgDiv.setAttribute('id', "shop-img");
    imgDiv.classList.add("one");
    shopWomens.append(imgDiv);

    const img = document.createElement("img");
    imgDiv.append(img);
    img.src=`https://eek01.github.io/csce242/json/images/womens-images/${womens[8].img_name}`;

    const shopDiv = document.createElement("div");
    shopDiv.setAttribute('id', "shop-description");
    shopDiv.classList.add("one")
    shopWomens.append(shopDiv);

    const title = document.createElement("h3");
    title.innerHTML = `${womens[8].title}`;
    shopDiv.append(title);

    const price = document.createElement("h5");
    price.innerHTML = `$${womens[8].price}`;
    shopDiv.append(price);
    
    const hr1 = document.createElement("hr");
    shopDiv.append(hr1);

    const size = document.createElement("p");
    size.innerHTML = "Size";
    shopDiv.append(size);

    //Size buttons
    const sizeDiv = document.createElement("div");
    sizeDiv.setAttribute('id',"size-btn");

    const divS = document.createElement("div");
    const h6S = document.createElement("h6");
    h6S.innerHTML = "S";
    divS.append(h6S);
    sizeDiv.append(divS);

    const divM = document.createElement("div");
    const h6M = document.createElement("h6");
    h6M.innerHTML = "M";
    divM.append(h6M);
    sizeDiv.append(divM);

    const divL = document.createElement("div");
    const h6L = document.createElement("h6");
    h6L.innerHTML = "L";
    divL.append(h6L);
    sizeDiv.append(divL);

    const divXL = document.createElement("div");
    const h6XL = document.createElement("h6");
    h6XL.innerHTML = "XL";
    divXL.append(h6XL);
    sizeDiv.append(divXL);

    const divXXL = document.createElement("div");
    const h6XXL = document.createElement("h6");
    h6XXL.innerHTML = "XXL";
    divXXL.append(h6XXL);
    sizeDiv.append(divXXL);

    shopDiv.append(sizeDiv);

    //buy now button
    const button = document.createElement("button");
    button.setAttribute('id', "buy-now-btn");
    button.innerHTML = "Buy Now";
    shopDiv.append(button);

    const hr2 = document.createElement("hr");
    shopDiv.append(hr2);

    const detailDiv = document.createElement("div");
    detailDiv.setAttribute('id', "shop-details");
    shopDiv.append(detailDiv);

    // details section
    const details = document.createElement("h5");
    details.innerHTML = "Details";
    detailDiv.append(details);

    const detailInfo = document.createElement("h6");
    detailInfo.innerHTML = `- Product Code: ${womens[8]._id}`;
    detailDiv.append(detailInfo);

    //features section
    const features = document.createElement("h5");
    features.innerHTML = "Features";
    detailDiv.append(features);

    //loop thru all features
    womens[8].features.forEach((feature)=>{
            const h6 = document.createElement("h6");
            h6.innerHTML = `- ${feature}`;
            detailDiv.append(h6);
    });

    //care section
    const care = document.createElement("h5");
    care.innerHTML = "Care";
    detailDiv.append(care);

    //loop thru all Care items
    womens[8].care.forEach((careItem)=>{
            const h6 = document.createElement("h6");
            h6.innerHTML = `- ${careItem}`;
            console.log(careItem);
            detailDiv.append(h6);
    });



};

showWoman();