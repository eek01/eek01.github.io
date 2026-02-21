const happySongs = [];
happySongs["Happy by Pharrell Williams"] = "WDw7mqHHgl22iAlJ";
happySongs["Don't Stop Me Now by Queen"] = "Tg7Amg-XOpdnQ-Qf";
happySongs["Can't Stop This Feeling by Justin Timberlake"] = "jpOgJOek6xbidUcS";
happySongs["Don't Worry Be Happy by Bobby McFerrin"] = "yaNsLe4Gjvh8GNp6";
happySongs["I'm Walking on Sunshine by Katrine and the Waves"] = "gI5as1yeR9Lwsvww";

const sadSongs = [];
sadSongs["Happier Then Ever by Billie Eillish"] = "ZFtTh8T3ZpgZkDkY";
sadSongs["Someone You Loved by Lewis Capaldi"] = "joU3CQwhaUCV2BXC";
sadSongs["Someone Like You by Adele"] = "Ec-74zqqvOqpayiw";
sadSongs["Fix You by Coldplay"] = "TLouELYQ6RatbJik";
sadSongs["Hurt by Johnny Cash"] = "U3FP7k9pMAYoip9y";

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