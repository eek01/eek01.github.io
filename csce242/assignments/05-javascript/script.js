window.onload = () => {
    document.getElementById("geometry").onclick = () => {
        console.log("CLIKED");
        document.getElementById("triangle").style.display = "block";
    }

    // const datetxt = document.getElementById("p-date");
    // const date = document.getElementById("date-picker");
    // date.addEventListener('change', function() {
    //     const datePicked = this.value;
    //     datetxt.innerHTML = ("You picked the date: " +datePicked);
    // });

    const datetxt = document.getElementById("p-date")
    document.getElementById("date-picker").onchange = () => {
        const date = document.getElementById("date-picker").value;
        datetxt.innerHTML = date;
        console.log("date changed!")
    }

    const img = document.getElementById("div-img");
    img.onclick = () => {
        console.log("img clicked");
        img.style.border='5px solid #9c2a3f';
    } 
}


