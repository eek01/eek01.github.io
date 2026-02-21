const happySongs = [];
happySongs["Happy by Pharrell Williams"] = "ZbZSe6N_BXs?si=WDw7mqHHgl22iAlJ";
happySongs["Don't Stop Me Now by Queen"] = "HgzGwKwLmgM?si=Tg7Amg-XOpdnQ-Qf";
happySongs["Can't Stop This Feeling by Justin Timberlake"] = "ru0K8uYEZWw?si=jpOgJOek6xbidUcS";
happySongs["Don't Worry Be Happy by Bobby McFerrin"] = "d-diB65scQU?si=yaNsLe4Gjvh8GNp6";
happySongs["I'm Walking on Sunshine by Katrine and the Waves"] = "iPUmE-tne5U?si=gI5as1yeR9Lwsvww";

const sadSongs = [];
sadSongs["Happier Then Ever by Billie Eillish"] = "5GJWxDKyk3A?si=ZFtTh8T3ZpgZkDkY";
sadSongs["Someone You Loved by Lewis Capaldi"] = "zABLecsR5UE?si=joU3CQwhaUCV2BXC";
sadSongs["Someone Like You by Adele"] = "hLQl3WQQoQ0?si=Ec-74zqqvOqpayiw";
sadSongs["Fix You by Coldplay"] = "k4V3Mo61fJM?si=TLouELYQ6RatbJik";
sadSongs["Hurt by Johnny Cash"] = "8AHCfZTRGiI?si=U3FP7k9pMAYoip9y";

const dropBtn = document.getElementById("dropbtn");
const ytFrame = document.getElementById("yt-frame");
const source = ytFrame.getAttribute("src");

document.getElementById("dropdown-happy").onclick = () => {
    dropBtn.innerHTML = "happy";
    const songList = document.getElementById("song-list");
    songList.innerHTML = "";

    for(let song in happySongs) {
        const liSong = document.createElement("li");
        liSong.innerHTML = song;
        songList.append(liSong);
        console.log("added songgg");

        liSong.onclick = () => {
            ytFrame.classList.remove("hidden");
            ytFrame.setAttribute("src", `${source}${happySongs[song]}`);
            console.log(`${source}${happySongs[song]}`);
        }
    }
};
document.getElementById("dropdown-sad").onclick = () => {
    dropBtn.innerHTML = "sad";
    const songList = document.getElementById("song-list");
    songList.innerHTML = "";

    for(let song in sadSongs) {
        const liSong = document.createElement("li");
        liSong.innerHTML = song;
        songList.append(liSong);
        console.log("added songgg");

        liSong.onclick = () => {
            ytFrame.classList.remove("hidden");
            ytFrame.setAttribute("src", `${source}${sadSongs[song]}`);
            console.log(`${source}${sadSongs[song]}`);
        }
    }
};