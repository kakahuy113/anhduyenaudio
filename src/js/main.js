// Function thêm class lazyload vào các thẻ <img> có thuộc tính [data-src]
const addClassLazyload = () => {
	let imgList = document.querySelectorAll("img[data-src]")
	Array.prototype.forEach.call(imgList, function (el) {
		if (el.className.length > 0) {
			el.className = el.className + " lazyload"
		} else {
			el.className = "lazyload"
		}
	});
}
// SLIDER BANNER
function homeSliderBanner() {
	var swpier = new Swiper('.slider-HomeBanner', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		centeredSlides: true,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		pagination: {
			el: '.slider-HomeBanner .swiper-pagination',
			clickable: true,
		},
	});
}
// SLIDER PRODUCT
function productSlider() {
	var swiper = new Swiper(".product-slider .swiper-container", {
		slidesPerView: 5,
		loop: true,
		speed: 1200,
		autoplay: true,
		pagination: {
			el: '.product-slider .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.product-slider .swiper-button-next',
			prevEl: '.product-slider .swiper-button-prev',
		},
	})
}
// SLIDER BRAND
function brandSlider() {
	var swiper = new Swiper(".brand-slider .swiper-container", {
		slidesPerView: 8,
		loop: true,
		speed: 1200,
		autoplay: true,
		pagination: {
			el: '.brand-slider .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.brand-slider .swiper-button-next',
			prevEl: '.brand-slider .swiper-button-prev',
		},
	})
}









$(document).ready(function () {
	objectFitImages("img.ofc"); // Luôn luôn chậy polyfill cho thuôc tính object-fit: cover trên các phiên bản IE >= 9
	addClassLazyload(); // Luôn luôn addClass lazyload cho các hình ảnh có thuộc tính [data-src]
	homeSliderBanner();
	productSlider();
	brandSlider();
})

$(document).ajaxComplete(function () {
	addClassLazyload();
})