window.onload = () => {
    const divBub = document.getElementById("aquarium-holder");
    for(let i = 0; i < 20; i++){
            const bub = document.createElement("div");
            bub.classList.add("bubble");

            const randNum = Math.floor(Math.random() * (390 - 80 +1)) + 80;
            bub.style.left = `${randNum}px`;

            divBub.append(bub);
            bub.classList.add("float");

            bub.style.animationDelay = `${i*0.3}s`;
    };
};