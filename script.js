const peliculasMap = new Map();

peliculasMap.set(0, {
    titulo: "Baki Hanma",
    imagen: "Baki.jpg",
    edad: "16+",
});

peliculasMap.set(1, {
    titulo: "Bleach",
    imagen: "bleach.jpg",
    edad: "13+",
});

peliculasMap.set(2, {
    titulo: "Vinland Saga",
    imagen: "vinland.jpg",
    edad: "18+",
});

peliculasMap.set(3, {
    titulo: "Vinland Saga Season 2",
    imagen: "vinland2.jpg",
    edad: "18+",
});

peliculasMap.set(4, {
    titulo: "Hajime no Ippo",
    imagen: "hajime.png",
    edad: "16+",
});

peliculasMap.set(5, {
    titulo: "Record of Ragnarok",
    imagen: "record.jpg",
    edad: "16+",
});

peliculasMap.set(6, {
    titulo: "Demon Slayer",
    imagen: "demon.jpg",
    edad: "13+",
});

peliculasMap.set(7, {
    titulo: "Cyberpunk: Edgerunners",
    imagen: "cyber.jpg",
    edad: "18+",
});

const peliculasArray = [...peliculasMap.values()];



const recommendedContainer = document.getElementById("recommended-movies");
const trendingContainer = document.getElementById("trending-movies");

peliculasArray.forEach((movie, index) => {
    const peliculasItem = document.createElement("div");
    peliculasItem.classList.add("peliculas-item");

    const img = document.createElement("img");
    img.src = movie.imagen;
    peliculasItem.appendChild(img);

    const age = document.createElement("div");
    age.classList.add("age");
    age.innerHTML = `<p>${movie.edad}</p>`;
    peliculasItem.appendChild(age);

    recommendedContainer.appendChild(peliculasItem.cloneNode(true));
    trendingContainer.appendChild(peliculasItem.cloneNode(true));
});
