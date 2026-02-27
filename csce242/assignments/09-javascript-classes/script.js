class Song {
    constructor(title, artist, album, year, genre, coverArt, ytCode) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.genre = genre;
        this.coverArt = coverArt;
        this.ytCode = ytCode;
    }

    get item() {
        const songContainer = document.createElement("div");

        const songDiv = document.createElement("div");
        songDiv.classList.add("song-div");
        songContainer.append(songDiv);

        //title
        const a1 = document.createElement("a");
        a1.href="#";
        const h3 = document.createElement("h3");
        songDiv.append(h3);
        h3.innerHTML = this.title;
        //artist
        const h5 = document.createElement("h5");
        songDiv.append(h5);
        h5.innerHTML = `By ${this.artist}`;
        //cover art
        const img = document.createElement("img");
        a1.append(img);
        img.src = this.coverArt;

        //adding to page
        songDiv.append(a1);

        songContainer.append(this.modal());

        a1.onclick = (e) => {
            e.preventDefault();
            document.getElementById('id01').style.display='block';
            console.log("clicked!!");
        };
        return songContainer;
    }

    modal() {
        const modalDiv = document.createElement("div");
        modalDiv.classList.add("w3-modal");
        modalDiv.id = "id01";

        const modalContent = document.createElement("div");
        modalContent.classList.add("w3-modal-content");

        modalDiv.append(modalContent);

        const modalContainer = document.createElement("div");
        modalContainer.classList.add("w3-container");

        modalContent.append(modalContainer);

        const modalSpan = document.createElement("span");
        modalSpan.classList.add("w3-button");
        modalSpan.classList.add("w3-display-topright");

        modalContainer.append(modalSpan);
        modalSpan.innerHTML = "&times;";

        const columnsDiv = document.createElement("div");
        columnsDiv.classList.add("columns");
        modalContainer.append(columnsDiv);

        const ytCodeContainer = document.createElement("iframe");
        this.setAttributes(ytCodeContainer);

        columnsDiv.append(ytCodeContainer);

        columnsDiv.append(this.modalInfo());

        console.log("added modal!!");
        return modalDiv;
    }

    modalInfo() {
        const div = document.createElement("div");
        
        const modalTitle = document.createElement("h3");
        modalTitle.innerHTML = this.title;
        const modalArtist = document.createElement("p");
        modalArtist.innerHTML = this.artist;
        const modalAlbum = document.createElement("p");
        modalAlbum.innerHTML = this.album+", "+this.year;
        const modalGenre = document.createElement("p");
        modalGenre.innerHTML = this.genre;

        div.append(modalTitle);
        div.append(modalArtist);
        div.append(modalAlbum);
        div.append(modalGenre);

        return div;

    }
    
    setAttributes(frame) {
        frame.setAttribute("src", `www.youtube.com/embed/${this.ytCode}`);
        frame.setAttribute("allowfullscreen", true);
    }
}



const songs = [];
songs.push(new Song("Sailboat", "Cavetown", "Running With Scissors", 2026, "Bedroom Pop", "images/sailboat-cover.jpg", "KaHvNbId7BY?si=9y09EVPxGapnHjfw"));
songs.push(new Song("Kiss Me Again", "Babe City", "I Love You Forever", 1111, "Pop", "images/kiss-me-again-cover.png", "n4VxOz7faFk?si=jhqsLvpJiOFeEjpz"));
songs.push(new Song("Stateside + Zara Larsson", "PinkPantheress", "Fancy Some More?", 2025, "Pop", "images/stateside-cover.png", "lIxQe1R5hs0?si=eT74f9iHHQR5NjwH"))
songs.push(new Song("Jackie and Wilson", "Hozier", "Hozier (Expanded Edition)", 2014, "Soulful", "images/jackie-and-wilson-cover.png", "cSWqxbswQAY?si=XxlJlyZRGksd3Lyb"));

songs.forEach((song)=>{
    document.getElementById("music").append(song.item);
});

document.querySelector(".w3-container span").onclick = () => {
    document.getElementById('id01').style.display='none';
};

// sailboat by cavetown:                       <iframe src="https://www.youtube.com/embed/KaHvNbId7BY?si=9y09EVPxGapnHjfw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
// kiss me again by babecity:                  <iframe src="https://www.youtube.com/embed/n4VxOz7faFk?si=jhqsLvpJiOFeEjpz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
// Stateside + Zara Larsson by PinkPantheress: <iframe src="https://www.youtube.com/embed/lIxQe1R5hs0?si=eT74f9iHHQR5NjwH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
// jackie and wilson by Hozier:                <iframe src="https://www.youtube.com/embed/cSWqxbswQAY?si=XxlJlyZRGksd3Lyb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
