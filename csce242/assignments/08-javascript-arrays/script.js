const happySongs = [];
happySongs["Happy by Pharrell Williams"] = "WDw7mqHHgl22iAlJ";
happySongs["Don't Stop Me Now by Queen"] = "Tg7Amg-XOpdnQ-Qf";
happySongs["Can't Stop This Feeling by Justin Timberlake"] = "jpOgJOek6xbidUcS";
happySongs["Don't Worry Be Happy by Bobby McFerrin"] = "yaNsLe4Gjvh8GNp6";
happySongs["I'm Walking on Sunshine by Katrine and the Waves"] = "gI5as1yeR9Lwsvww";

const sadSongs = [];
sadSongs["Happier Then Ever by Billie Eillish"] = "ZFtTh8T3ZpgZkDkY";
sadSongs["Someone You Loved by Lewis Capaldi"] = "joU3CQwhaUCV2BXC";
sadSongs["Someone Like You by Adele"] = "Q9bi9gwiEWlkY4WM";
sadSongs["Fix You by Coldplay"] = "TLouELYQ6RatbJik";
sadSongs["Hurt by Johnny Cash"] = "bwQrEh3ND6G6iIe1";

dropBtn = document.getElementById("dropbtn");
ytFrame = document.getElementById("yt-frame");

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
            srcTxt = ytFrame.getAttribute("src");
            ytFrame.setAttribute("src", `${srcTxt}${happySongs[song]}`);
            console.log(`${srcTxt}${happySongs[song]}`);
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
            ytFrame.innerHTML = `${sadSongs[song]}`;
        }
    }
};