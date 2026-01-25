const places = [
	{
		name: "Lisabon",
		country: "Portugalsko",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Lisabon.png"
	},
	{
		name: "Alexandrie",
		country: "Egypt",
		state: "revealed",
        visited: "2025-10-05",
		image: "../../images/karty/Alexandrie.png"
	},
    {
		name: "Angkor Wat",
		country: "Kambodža",
		state: "hidden",
        visited: "",
		image: "../../images/karty/AngkorWat.png"
	},
    {
		name: "Athény",
		country: "Řecko",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Atheny.png"
	},
    {
		name: "Barcelona",
		country: "Španělsko",
		state: "revealed",
        visited: "2021-08-02",
		image: "../../images/karty/Barcelona.png"
	},
    {
		name: "Bath",
		country: "Anglie",
		state: "revealed",
        visited: "2023-05-04",
		image: "../../images/karty/Bath.png"
	},
    {
		name: "Benátky",
		country: "Itálie",
		state: "revealed",
        visited: "2023-06-05",
		image: "../../images/karty/Benatky.png"
	},
    {
		name: "Berlín",
		country: "Německo",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Berlin.png"
	},
    {
		name: "Bratislava",
		country: "Slovensko",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Bratislava.png"
	},
    {
		name: "Budapešť",
		country: "Maďarsko",
		state: "revealed",
        visited: "2021-11-06",
		image: "../../images/karty/Budapest.png"
	},
    {
		name: "Drážďany",
		country: "Německo",
		state: "revealed",
        visited: "2024-12-12",
		image: "../../images/karty/Drazdany.png"
	},
    {
		name: "Florencie",
		country: "Itálie",
		state: "revealed",
        visited: "2023-06-02",
		image: "../../images/karty/Florencie.png"
	},
    {
		name: "Györ",
		country: "Maďarsko",
		state: "revealed",
        visited: "2018-08-26",
		image: "../../images/karty/Gyor.png"
	},
    {
		name: "Island",
		country: "Island",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Island.png"
	},
    {
		name: "Káhira",
		country: "Egypt",
		state: "revealed",
        visited: "2024-10-19",
		image: "../../images/karty/Kahira.png"
	},
    {
		name: "Kodaň",
		country: "Dánsko",
		state: "revealed",
        visited: "2023-10-04",
		image: "../../images/karty/Kodan.png"
	},
    {
		name: "Krakov",
		country: "Polsko",
		state: "revealed",
        visited: "2022-03-24",
		image: "../../images/karty/Krakov.png"
	},
    {
		name: "Londýn",
		country: "Anglie",
		state: "revealed",
        visited: "2020-08-05",
		image: "../../images/karty/Londyn.png"
	},
    {
		name: "Malmö",
		country: "Švédsko",
		state: "revealed",
        visited: "2023-10-07",
		image: "../../images/karty/Malmo.png"
	},
    {
		name: "Madeira",
		country: "Portugalsko",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Madeira.png"
	},
    {
		name: "Luoyang",
		country: "Čína",
		state: "revealed",
        visited: "2025-05-19",
		image: "../../images/karty/Luoyang.png"
	},
    {
		name: "Neapol",
		country: "Itálie",
		state: "revealed",
        visited: "2023-06-04",
		image: "../../images/karty/Neapol.png"
	},
    {
		name: "Osvětim",
		country: "Polsko",
		state: "revealed",
        visited: "2022-09-03",
		image: "../../images/karty/Osvetim.png"
	},
    {
		name: "Pompeje",
		country: "Itálie",
		state: "revealed",
        visited: "2023-06-04",
		image: "../../images/karty/Pompeje.png"
	},
    {
		name: "Luxor",
		country: "Egypt",
		state: "revealed",
        visited: "2024-10-21",
		image: "../../images/karty/Luxor.png"
	},
    {
		name: "Plitvička jezera",
		country: "Chorvatsko",
		state: "revealed",
        visited: "2023-09-24",
		image: "../../images/karty/Plitvicka.png"
	},
    {
		name: "Řím",
		country: "Itálie",
		state: "revealed",
        visited: "2023-06-03",
		image: "../../images/karty/Rim.png"
	},
    {
		name: "Shaolin",
		country: "Čína",
		state: "revealed",
        visited: "2025-05-20",
		image: "../../images/karty/Shaolin.png"
	},
    {
		name: "Peking",
		country: "Čína",
		state: "revealed",
        visited: "2025-05-25",
		image: "../../images/karty/Peking.png"
	},
    {
		name: "Stonehange",
		country: "Anglie",
		state: "revealed",
        visited: "2023-05-03",
		image: "../../images/karty/Stonehange.png"
	},
    {
		name: "Phuket - Krabi",
		country: "Thajsko",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Krabi"
	},
    {
		name: "Šanghaj",
		country: "Čína",
		state: "revealed",
        visited: "2025-05-17",
		image: "../../images/karty/Sanghaj.png"
	},
    {
		name: "Portsmouth",
		country: "Anglie",
		state: "revealed",
        visited: "2023-05-05",
		image: "../../images/karty/Portsmouth.png"
	},
    {
		name: "Sarvár",
		country: "Maďarsko",
		state: "revealed",
        visited: "2022-06-26",
		image: "../../images/karty/Sarvar.png"
	},
    {
		name: "Paříž",
		country: "Francie",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Pariz.png"
	},
    {
		name: "Vysoké Tatry",
		country: "Slovensko",
		state: "revealed",
        visited: "2022-09-09",
		image: "../../images/karty/Tatry.png"
	},
    {
		name: "Tokio",
		country: "Japonsko",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Tokio.png"
	},
    {
		name: "Vatikán",
		country: "Vatikán",
		state: "revealed",
        visited: "2023-06-03",
		image: "../../images/karty/Vatikan.png"
	},
    {
		name: "Oxford",
		country: "Anglie",
		state: "revealed",
        visited: "2025-10-14",
		image: "../../images/karty/Oxford.png"
	},
    {
		name: "Wieliczka",
		country: "Polsko",
		state: "revealed",
        visited: "2022-03-26",
		image: "../../images/karty/Wieliczka.png"
	},
    {
		name: "Xi´an",
		country: "Čína",
		state: "revealed",
        visited: "2025-05-19",
		image: "../../images/karty/Xian.png"
	},
    {
		name: "Keukenhof",
		country: "Nizozemsko",
		state: "revealed",
        visited: "2024-03-31",
		image: "../../images/karty/Keukenhof.png"
	},
    {
		name: "Salisbury",
		country: "Anglie",
		state: "revealed",
        visited: "2023-05-04",
		image: "../../images/karty/Salisbury.png"
	},
    {
		name: "Vídeň",
		country: "Rakousko",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Viden.png"
	},
    {
		name: "Brighton",
		country: "Anglie",
		state: "revealed",
        visited: "2020-08-07",
		image: "../../images/karty/Brighton.png"
	},
    {
		name: "Edinburg",
		country: "Skotsko",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Edinburg.png"
	},
    {
		name: "Madrid",
		country: "Španělsko",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Madrid.png"
	},
    {
		name: "Dubaj",
		country: "SAE",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Dubaj.png"
	},
    {
		name: "Retz",
		country: "Rakousko",
		state: "revealed",
        visited: "2017-12-09",
		image: "../../images/karty/Retz.png"
	},
    {
		name: "Los Angeles",
		country: "USA",
		state: "hidden",
        visited: "",
		image: "../../images/karty/LosAngeles.png"
	},
    {
		name: "San Francisco",
		country: "USA",
		state: "hidden",
        visited: "",
		image: "../../images/karty/SanFrancisco.png"
	},
    {
		name: "New York",
		country: "USA",
		state: "hidden",
        visited: "",
		image: "../../images/karty/NewYork.png"
	},
    {
		name: "Yellowstone",
		country: "USA",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Yellowstone.png"
	},
    {
		name: "Grand Canion",
		country: "USA",
		state: "hidden",
        visited: "",
		image: "../../images/karty/GrandCanion.png"
	},
    {
		name: "Oslo",
		country: "Norsko",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Oslo.png"
	},
    {
		name: "Mont Saint-Michel",
		country: "Francie",
		state: "hidden",
        visited: "",
		image: "../../images/karty/SaintMichel.png"
	},
    {
		name: "Étretat",
		country: "Francie",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Etretat.png"
	},
    {
		name: "Černobyl",
		country: "Ukrajina",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Cernobyl.png"
	},
    {
		name: "Machu Picchu",
		country: "Peru",
		state: "hidden",
        visited: "",
		image: "../../images/karty/MachuPicchu.png"
	},
    {
		name: "Jánošíkové Diery",
		country: "Slovensko",
		state: "revealed",
        visited: "2022-09-07",
		image: "../../images/karty/JanosikoveDiery.png"
	},
    /*{
		name: "",
		country: "",
		state: "hidden",
        visited: "",
		image: "../../images/karty/.png"
	},*/
];



document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("cards-grid");
    if (!grid) return;

    const revealed = places
        .filter(p => p.state === "revealed")
        .sort((a, b) => new Date(b.visited) - new Date(a.visited));

    const hidden = places.filter(p => p.state === "hidden");

    [...revealed, ...hidden].forEach(place => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.state = place.state;

        card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
            <h2>${place.name.toUpperCase()}</h2>
            <span>${place.country}</span>
            </div>
            <div class="card-back">
            <img src="${place.image}" alt="${place.name}">
            <div class="label">${place.country}</div>
            </div>
        </div>
        `;

        grid.appendChild(card);
    });
});

