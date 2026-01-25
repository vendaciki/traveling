(function($) {

	var	$window = $(window),
		$body = $('body'),
		$menu = $('#menu'),
		$sidebar = $('#sidebar'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Intro.
		var $intro = $('#intro');

		// Move to main on <=large, back to sidebar on >large.
			breakpoints.on('<=large', function() {
				$intro.prependTo($main);
			});

			breakpoints.on('>large', function() {
				$intro.prependTo($sidebar);
			});

})(jQuery);




/* LIGHTBOX */
function openLightbox(src) {
	if (window.innerWidth <= 768) {
		// Na mobilu lightbox neotevíráme
		return;
	}

	document.getElementById('lightbox-img').src = src;
	document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
	document.getElementById('lightbox').style.display = 'none';
}



/* PAGINATOR */
const posts = document.querySelectorAll('#main article.post');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');

const itemsPerPage = 5; /* počet článků na stránce */
let currentPage = 1;
const totalPages = Math.ceil(posts.length / itemsPerPage);

function renderPage(page) {
	posts.forEach(post => (post.style.display = 'none'));

	const start = (page - 1) * itemsPerPage;
	const end = start + itemsPerPage;
	for (let i = start; i < end && i < posts.length; i++) {
		posts[i].style.display = 'block';
	}

	prevBtn.classList.toggle('disabled', page === 1);
	nextBtn.classList.toggle('disabled', page === totalPages);

	if (pageInfo) {
		pageInfo.textContent = `Strana ${page} z ${totalPages}`;
	}

	currentPage = page;

	const headerHeight = $('#header').outerHeight() || 0;
	const bodyPadding = parseInt($('body').css('padding-top')) || 0;

	const first = $('#main article.post:visible').first();

	if (first.length) {
		const target = first.offset().top - headerHeight - bodyPadding - 10;

		$('html, body').stop().animate({ scrollTop: target }, 400);
		$('#wrapper').stop().animate({ scrollTop: target }, 400);
	}
}


prevBtn.addEventListener('click', e => {
	e.preventDefault();
	if (currentPage > 1) {
		renderPage(currentPage - 1);
	}
});

nextBtn.addEventListener('click', e => {
	e.preventDefault();
	if (currentPage < totalPages) {
		renderPage(currentPage + 1);
	}
});

// při načtení stránky zobraz první stránku
renderPage(1);





// POČÍTADLO MÍST
document.addEventListener("DOMContentLoaded", () => {
	const posts = document.querySelectorAll("article.post");

	const countries = new Set();
	const cities = new Set();

	const cityCount = {};
	const countryCount = {};
	const countryCities = {};

	posts.forEach(post => {
		const country = post.dataset.country;
		const cityList = post.dataset.city;

		// ZEMĚ
		if (country && country.trim() !== "") {
			country.split(",").forEach(c => {
				const cc = c.trim();
				if (cc !== "") {
					countries.add(cc);
					countryCount[cc] = (countryCount[cc] || 0) + 1;

					if (!countryCities[cc]) {
						countryCities[cc] = new Set();
					}
				}
			});
		}

		// MĚSTA
		if (cityList && cityList.trim() !== "") {
			cityList.split(",").forEach(city => {
				const c = city.trim();
				if (c !== "") {
					cities.add(c);
					cityCount[c] = (cityCount[c] || 0) + 1;

					// přiřadíme město ke všem státům článku
					if (country) {
						country.split(",").forEach(cc => {
							const clean = cc.trim();
							if (countryCities[clean]) {
								countryCities[clean].add(c);
							}
						});
					}
				}
			});
		}
	});

	// Základní čísla
	document.getElementById("stat-trips").textContent = posts.length;
	document.getElementById("stat-countries").textContent = countries.size;
	document.getElementById("stat-cities").textContent = cities.size;

	// TOP MĚSTA
	const sortedCities = Object.entries(cityCount).sort((a,b)=>b[1]-a[1]);
	const list = document.getElementById("top-cities-list");
	list.innerHTML = "";

	sortedCities.slice(0,3).forEach(([city,count],i)=>{
		const li=document.createElement("li");
		li.innerHTML=`<strong>${i+1}.</strong> ${city} <span>(${count}×)</span>`;
		list.appendChild(li);
	});

	// 🏆 NEJLEPŠÍ STÁT (počty článků + tie-break podle měst)
	let topCountry = "–";
	let topCount = 0;
	let topCityCount = 0;

	for (const c in countryCount) {
		const visits = countryCount[c];
		const cityAmount = countryCities[c]?.size || 0;

		if (
			visits > topCount ||
			(visits === topCount && cityAmount > topCityCount)
		) {
			topCount = visits;
			topCityCount = cityAmount;
			topCountry = c;
		}
	}

	if (topCount > 0) {
		document.getElementById("stat-top-country").textContent =
			`${topCountry} (${topCount}×)`;
	}
});
