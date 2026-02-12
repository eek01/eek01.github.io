window.onload = () => {
    // Slider code
    var slider = document.getElementById("myRange");
    var output = document.getElementById("slider-time");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        const p = document.getElementById("slider-output"); 

        if(this.value < 15) {
            p.innerHTML = "Let's get going! You're going to be late! &#x1F3C3;";
        } else if(this.value >= 30 && this.value <= 40) {
            p.innerHTML = "Let's stop for coffee on the way! You deserve it! &#9749;";
        } else if (this.value >= 15 && this.value < 30) {
            p.innerHTML = "Perfect timing! Leave now and you'll be right on time! &#128077;";
        } else {
            p.innerHTML = "Plenty of time! Have a home made breakfast! &#129363;";
        }
    }

    // countdown code
    function checkTime() {
        const p = document.getElementById("countdown-txt");
        const now = new Date();
        const classTime = new Date();
        //setting class time
        classTime.setHours(8);
        classTime.setMinutes(30);

        const timeLeft = classTime - now;
        const minutesLeft = timeLeft / 60000;

        if (minutesLeft >= 15) {
            p.innerHTML = "You have "+minutesLeft+" minutes left! You have time to grab breakfast!";
        } else if (minutesLeft >= 10 && minutesLeft < 15) {
            p.innerHTML = "You have "+minutesLeft+" minutes left! Let's start heading to class!";
        } else if (minutesLeft >= 5 && minutesLeft < 10) {
            p.innerHTML = "You have "+minutesLeft+" minutes left! Let's put some pep in our step!";
        } else if (minutesLeft >= 0 && minutesLeft < 5) {
            p.innerHTML = "You have "+minutesLeft+" minutes left! We gotta run so we aren't late!";
        } else if (minutesLeft < -15) {
            p.innerHTML = "You have "+minutesLeft+" minutes left! Might as well stop for breakfast at this point!";
        } else if (minutesLeft < -10) {
            p.innerHTML = "You have "+minutesLeft+" minutes left! You can still learn a lot the rest of class! Come on!";
        } else if (minutesLeft < -5) {
            p.innerHTML = "You have "+minutesLeft+" minutes left! You can still sneak into class!";
        }
    }


    // toggle navv!
    document.getElementById("toggle-nav").onclick = () => {
        const pToggle = document.getElementById("p-toggle");
        document.querySelector("#exercise-btn").classList.toggle("hide-small");
        if (pToggle.textContent.trim() === "▼") {
            pToggle.textContent = "▲";
        } else {
            pToggle.textContent = "▼";
        }
    };


    //exercise hide and show code
    document.getElementById("ex-1").onclick = () => {
        document.getElementById("ex-two-content").classList.remove("show");
        document.getElementById("ex-one-content").classList.add("show");
    }
    document.getElementById("ex-2").onclick = () => {
        document.getElementById("ex-two-content").classList.add("show");
        document.getElementById("ex-one-content").classList.remove("show");
        checkTime();
    }

}