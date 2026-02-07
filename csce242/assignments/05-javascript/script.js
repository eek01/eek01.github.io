window.onload = () => {
    document.getElementById("geometry").onclick = () => {
        console.log("CLIKED");
        document.getElementById("triangle").style.display = "block";
    }

    // getdate
    // getmonth
    // getfullyear
    // year u chose: $date+"/"$month+
    // create date function!!
    function displayDate() {
        const dateInput = document.getElementById("date-picker").value;
        console.log(dateInput)
        const dateObj = new Date(dateInput);
        const day = dateObj.getDate() + 1;
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();

        document.getElementById("p-date").innerHTML = `You picked the date: ${month}/${day}/${year}`;
    }
    document.getElementById("date-picker").onchange = () => {
            displayDate();
            console.log("date changed!");
        }

    const img = document.getElementById("div-img");
    img.onclick = () => {
        console.log("img clicked");
        img.style.border='5px solid #9c2a3f';
    } 
}