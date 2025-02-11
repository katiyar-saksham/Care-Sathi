var swiper = new Swiper(".mySwiper", {
	slidesPerView: 2,
	centeredSlides: true,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});