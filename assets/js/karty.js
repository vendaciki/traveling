console.log("MAIN.JS LOADED");


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
		name: "Blanes",
		country: "Španělsko",
		state: "revealed",
        visited: "2021-08-01",
		image: "../../images/karty/Blanes.png"
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
	{
		name: "Kréta",
		country: "Řecko",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Kreta.png"
	},
	{
		name: "Mount Rushmore",
		country: "USA",
		state: "hidden",
        visited: "",
		image: "../../images/karty/MountRushmore.png"
	},
	{
		name: "Národní parky",
		country: "Norsko",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Norsko.png"
	},
	{
		name: "Tádž Mahal",
		country: "Indie",
		state: "hidden",
        visited: "",
		image: "../../images/karty/TadzMahal.png"
	},
	{
		name: "Srí Lanka",
		country: "Srí Lanka",
		state: "hidden",
        visited: "",
		image: "../../images/karty/SriLanka.png"
	},
	{
		name: "Slovinsko",
		country: "Slovinsko",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Slovinsko.png"
	},
	{
		name: "Maledivy",
		country: "Maledivy",
		state: "hidden",
        visited: "",
		image: "../../images/karty/Maledivy.png"
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
            </div>
        </div>
        `;

        grid.appendChild(card);
    });
});

document.addEventListener("DOMContentLoaded", () => {

	const countryToISO = {
		"Afghánistán": "AF",
		"Albánie": "AL",
		"Aljaška": "US-AK",
		"Alžírsko": "DZ",
		"Ambae": "VU-AM",
		"Ambrym": "VU-AB",
		"Americké Panenské ostrovy": "VI",
		"Andorra": "AD",
		"Aneityum": "VU-AN",
		"Anglie": "GB",
		"Angola": "AO",
		"Anguilla": "AI",
		"Anticosti": "CA-QC-IC",
		"Antigua a Barbuda": "AG",
		"Aore": "VU-AO",
		"Argentina": "AR",
		"Arménie": "AM",
		"Aru Islands Regency": "ID-MA-AR",
		"Aruba": "AW",
		"Austrálie": "AU",
		"Ázerbájdžán": "AZ",
		"Baffinův ostrov": "CA-NU-BI",
		"Bahamy": "BS",
		"Bahrajn": "BH",
		"Bangladéš": "BD",
		"Banksův ostrov": "CA-NT-BI",
		"Barbados": "BB",
		"Basse-Terre": "GP-BT",
		"Bathurstův ostrov": "CA-NU-BA",
		"Belgie": "BE",
		"Belize": "BZ",
		"Benin": "BJ",
		"Bermudy": "BM",
		"Bělorusko": "BY",
		"Bhútán": "BT",
		"Bonaire": "BQ-BO",
		"Bordenův ostrov": "CA-NU-BO",
		"Borneo": "ID-KL",
		"Bosna a Hercegovina": "BA",
		"Botswana": "BW",
		"Bougainville": "PG-NSB",
		"Brazílie": "BR",
		"Britské Panenské ostrovy": "VG",
		"Brunej": "BN",
		"Bulharsko": "BG",
		"Burkina Faso": "BF",
		"Burundi": "BI",
		"Celebes": "ID-SL",
		"Coatsův ostrov": "CA-NU-CI",
		"Cornwallisův ostrov": "CA-NU-CW",
		"Curaçao": "CW",
		"Čad": "TD",
		"Černá Hora": "ME",
		"Česko": "CZ",
		"Čile": "CL",
		"Čína": "CN",
		"Dánsko": "DK",
		"Demokratická republika Kongo": "CD",
		"Devon": "CA-NU-DE",
		"Dominika": "DM",
		"Dominikánská republika": "DO",
		"Džibutsko": "DJ",
		"Edgeøya": "NO-SJ-ED",
		"Efate": "VU-EF",
		"Egypt": "EG",
		"Ekvádor": "EC",
		"El Hierro": "ES-CN-HI",
		"Ellesmerův ostrov": "CA-NU-EL",
		"Epi": "VU-EP",
		"Eritrea": "ER",
		"Erromango": "VU-ER",
		"Eswatini": "SZ",
		"Estonsko": "EE",
		"Etiopie": "ET",
		"Faerské ostrovy": "FO",
		"Falklandy": "FK",
		"Federativní státy Mikronésie": "FM",
		"Fidži": "FJ",
		"Filipíny": "PH",
		"Finsko": "FI",
		"Francie": "FR",
		"Francouzská Guyana": "GF",
		"Francouzská Polynésie": "PF",
		"Fuerteventura": "ES-CN-FU",
		"Gabon": "GA",
		"Gambie": "GM",
		"Gaua": "VU-GA",
		"Ghana": "GH",
		"Graham": "CA-BC-GI",
		"Grenada": "GD",
		"Grónsko": "GL",
		"Gruzie": "GE",
		"Guadeloupe": "GP",
		"Guam": "GU",
		"Guatemala": "GT",
		"Guinea": "GN",
		"Guinea-Bissau": "GW",
		"Guyana": "GY",
		"Haiti": "HT",
		"Havaj": "US-HI",
		"Hokkaidó": "JP-01",
		"Honduras": "HN",
		"Chile": "CL",
		"Chorvatsko": "HR",
		"Indie": "IN",
		"Indonésie": "ID",
		"Irák": "IQ",
		"Írán": "IR",
		"Irsko": "IE",
		"Island": "IS",
		"Itálie": "IT",
		"Izrael": "IL",
		"Jamajka": "JM",
		"Japonsko": "JP",
		"Jáva": "ID-JV",
		"Jemen": "YE",
		"Jihoafrická republika": "ZA",
		"Jižní Korea": "KR",
		"Jižní ostrov": "NZ-SI",
		"Jižní Súdán": "SS",
		"Jordánsko": "JO",
		"Kajmanské ostrovy": "KY",
		"Kambodža": "KH",
		"Kamerun": "CM",
		"Kanada": "CA",
		"Kapverdy": "CV",
		"Katar": "QA",
		"Kazachstán": "KZ",
		"Keňa": "KE",
		"Komory": "KM",
		"Kosovo": "XK",
		"Kostarika": "CR",
		"Korsika": "FR-20R",
		"Kolumbie": "CO",
		"Kréta": "GR-M",
		"Kuba": "CU",
		"Kuvajt": "KW",
		"Kypr": "CY",
		"Kyrgyzstán": "KG",
		"La Gomera": "ES-CN-GO",
		"La Palma": "ES-CN-LP",
		"Lanai": "US-HI-LA",
		"Lanzarote": "ES-CN-LZ",
		"Laos": "LA",
		"Lesotho": "LS",
		"Libanon": "LB",
		"Libérie": "LR",
		"Libye": "LY",
		"Litva": "LT",
		"Lopevi": "VU-LO",
		"Lotyšsko": "LV",
		"Lucembursko": "LU",
		"Luzon": "PH-LU",
		"Madagaskar": "MG",
		"Maďarsko": "HU",
		"Maewo": "VU-MW",
		"Malajsie": "MY",
		"Malakula": "VU-MA",
		"Malawi": "MW",
		"Maledivy": "MV",
		"Mali": "ML",
		"Malo": "VU-ML",
		"Malta": "MT",
		"Manselův ostrov": "CA-NU-MI",
		"Marie-Galante": "GP-MG",
		"Marshallovy ostrovy": "MH",
		"Martinik": "MQ",
		"Maui": "US-HI-MA",
		"Mauricius": "MU",
		"Mauritánie": "MR",
		"Mayotte": "YT",
		"Makedonie": "MK",
		"Melville Island": "CA-NT-ME",
		"Mexiko": "MX",
		"Mindanao": "PH-MI",
		"Mindoro": "PH-MD",
		"Moldavsko": "MD",
		"Molokai": "US-HI-MO",
		"Monako": "MC",
		"Mongolsko": "MN",
		"Montserrat": "MS",
		"Mosambik": "MZ",
		"Musandam": "OM-MU",
		"Myanmar": "MM",
		"Namibie": "NA",
		"Nauru": "NR",
		"Nepál": "NP",
		"Negros": "PH-NE",
		"Německo": "DE",
		"Niger": "NE",
		"Nigérie": "NG",
		"Nikaragua": "NI",
		"Nizozemsko": "NL",
		"Nord austlandet": "NO-SJ-NA",
		"Norsko": "NO",
		"Nová Británie": "PG-NB",
		"Nová Kaledonie": "NC",
		"Nové Irsko": "PG-NI",
		"Nový Zéland": "NZ",
		"Nunivak": "US-AK-NU",
		"Oahu": "US-HI-OA",
		"Oblast Qikiqtaaluk": "CA-NU-QT",
		"Omán": "OM",
		"Ostrov Amunda Ringnese": "CA-NU-AR",
		"Ostrov Axela Heiberga": "CA-NU-AH",
		"Ostrov Cornwall": "CA-NU-CO",
		"Ostrov Ellefa Ringnese": "CA-NU-ER",
		"Ostrov Gozo": "MT-GO",
		"Ostrov Kodiak": "US-AK-KO",
		"Ostrov Mackenzie Kinga": "CA-NU-MK",
		"Ostrov prince Charlese": "CA-NU-PC",
		"Ostrov prince Eduarda": "CA-PE",
		"Ostrov prince Patrika": "CA-NT-PP",
		"Ostrov prince z Walesu": "CA-NU-PW",
		"Ostrov sv. Vavřince": "US-AK-SL",
		"Ostrov Southampton": "CA-NU-SI",
		"Pákistán": "PK",
		"Palau": "PW",
		"Palawan": "PH-PL",
		"Palestina": "PS",
		"Panaj": "PH-PA",
		"Panama": "PA",
		"Papua": "ID-PA",
		"Papua-Nová Guinea": "PG",
		"Paraguay": "PY",
		"Pentecost": "VU-PE",
		"Peru": "PE",
		"Pobřeží slonoviny": "CI",
		"Polsko": "PL",
		"Portoriko": "PR",
		"Portugalsko": "PT",
		"Príncipe": "ST-PR",
		"Pulau Buru": "ID-MA-BU",
		"Pulau Seram": "ID-MA-SE",
		"Rakousko": "AT",
		"Republika Kongo": "CG",
		"Réunion": "RE",
		"Rumunsko": "RO",
		"Rusko": "RU",
		"Rovníková Guinea": "GQ",
		"Rwanda": "RW",
		"Řecko": "GR",
		"Saba": "BQ-SA",
		"SAE": "AE",
		"Salvador": "SV",
		"Samoa": "WS",
		"San Marino": "SM",
		"Sardínie": "IT-88",
		"Sarawak": "MY-13",
		"Saúdská Arábie": "SA",
		"Severní Irsko": "GB-NIR",
		"Severní Korea": "KP",
		"Severní Mariany": "MP",
		"Severní Moluky": "ID-MU",
		"Senegal": "SN",
		"Seychely": "SC",
		"Sicílie": "IT-SI",
		"Sierra Leone": "SL",
		"Singapur": "SG",
		"Sint Maarten": "SX",
		"Skotsko": "GB-SCT",
		"Slovensko": "SK",
		"Slovinsko": "SI",
		"Somálsko": "SO",
		"Somerset": "CA-NU-SO",
		"Souostroví Yasawa": "FJ-YA",
		"Spojené státy": "US",
		"Srbsko": "RS",
		"Srí Lanka": "LK",
		"Středoafrická republika": "CF",
		"Sudán": "SD",
		"Sumatra": "ID-SM",
		"Sumba": "ID-NTT-SU",
		"Surinam": "SR",
		"Svatá Lucie": "LC",
		"Svatý Bartoloměj": "BL",
		"Svatý Eustach": "BQ-SE",
		"Svatý Kryštof a Nevis": "KN",
		"Svatý Martin": "MF",
		"Svatý Tomáš a Princův ostrov": "ST",
		"Svatý Vincenc a Grenadiny": "VC",
		"Sýrie": "SY",
		"Šalamounovy ostrovy": "SB",
		"Šikoku": "JP-SK",
		"Španělsko": "ES",
		"Švédsko": "SE",
		"Švýcarsko": "CH",
		"Tádžikistán": "TJ",
		"Tanna": "VU-TA",
		"Tanzanie": "TZ",
		"Tasmánie": "AU-TAS",
		"Taveuni": "FJ-TV",
		"Tchaj-wan": "TW",
		"Thajsko": "TH",
		"Timor": "ID-NTT-TI",
		"Togo": "TG",
		"Tonga": "TO",
		"Tongoa": "VU-TG",
		"Torresovy ostrovy": "VU-TO",
		"Trinidad a Tobago": "TT",
		"Tunisko": "TN",
		"Turecko": "TR",
		"Turkmenistán": "TM",
		"Turks a Caicos": "TC",
		"Tuvalu": "TV",
		"Uganda": "UG",
		"Ukrajina": "UA",
		"Uruguay": "UY",
		"USA": "US",
		"Uzbekistán": "UZ",
		"Vanua Lava": "VU-VL",
		"Vanua Levu": "FJ-VL",
		"Vanuatu": "VU",
		"Vatikán": "VA",
		"Velká Británie": "GB",
		"Venezuela": "VE",
		"Vietnam": "VN",
		"Viktoriin ostrov": "CA-NU-VI",
		"Východní Falkland": "FK-EF",
		"Východní Nusa Tenggara": "ID-NTT",
		"Východní Timor": "TL",
		"Wales": "GB",
		"Zambie": "ZM",
		"Západní Falkland": "FK-WF",
		"Západní Nusa Tenggara": "ID-NB",
		"Západní Sahara": "EH",
		"Západní Špicberk": "NO-SJ-SP",
		"Zimbabwe": "ZW"
	};

	const visitedCountries = new Set(
		places
		.filter(p => p.state === "revealed")
		.map(p => countryToISO[p.country])
		.filter(Boolean)
	);

	document.querySelectorAll(".stat").forEach(path => {
		const code = path.dataset.country;
		if (visitedCountries.has(code)) {
		path.classList.add("navstiven");
		}
	});

});

document.addEventListener("DOMContentLoaded", () => {

	const svg = document.getElementById("world-map");
	const viewport = document.querySelector(".map-viewport");

	if (!svg || !viewport) return;

	let scale = 1;
	let x = 0;
	let y = 0;

	const minZoom = 1;
	const maxZoom = 20;
	const zoomStep = 0.2;

	let isDragging = false;
	let startX = 0;
	let startY = 0;

	function updateTransform() {
		svg.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
	}

	// drag mapy
	viewport.addEventListener("mousedown", (e) => {

		if (scale === 1) return;

		isDragging = true;

		startX = e.clientX - x;
		startY = e.clientY - y;

		viewport.style.cursor = "grabbing";
	});

	window.addEventListener("mouseup", () => {
		isDragging = false;
		viewport.style.cursor = "grab";
	});

	window.addEventListener("mousemove", (e) => {

		if (!isDragging) return;

		x = e.clientX - startX;
		y = e.clientY - startY;

		updateTransform();
	});

	// zoom kolečkem myši
	viewport.addEventListener("wheel", (e) => {

		e.preventDefault();

		const rect = viewport.getBoundingClientRect();

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const prevScale = scale;

		if (e.deltaY < 0) {
			scale = Math.min(maxZoom, scale + zoomStep);
		} else {
			scale = Math.max(minZoom, scale - zoomStep);
		}

		const scaleRatio = scale / prevScale;

		// přepočet posunu aby zoom byl na kurzor
		x = mouseX - (mouseX - x) * scaleRatio;
		y = mouseY - (mouseY - y) * scaleRatio;

		updateTransform();

	}, { passive: false });

});



