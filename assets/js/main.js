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

const itemsPerPage = 5; /* počet článků na stránce */
let currentPage = 1;
const totalPages = Math.ceil(posts.length / itemsPerPage);

function renderPage(page) {
	// schovej všechny články
	posts.forEach(post => (post.style.display = 'none'));

	// zobraz jen články pro aktuální stránku
	const start = (page - 1) * itemsPerPage;
	const end = start + itemsPerPage;
	for (let i = start; i < end && i < posts.length; i++) {
		posts[i].style.display = 'block';
	}

	// tlačítka aktivní/neaktivní
	prevBtn.classList.toggle('disabled', page === 1);
	nextBtn.classList.toggle('disabled', page === totalPages);

	currentPage = page;
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
