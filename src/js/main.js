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
function homeSliderBanner() {
	var swpier = new Swiper('.slider-HomeBanner', {
		effect: 'coverflow',
		centeredSlides: true,
		speed: 1000,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		loop: true,
		// autoplay: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}

$(document).ready(function () {
	objectFitImages("img.ofc"); // Luôn luôn chậy polyfill cho thuôc tính object-fit: cover trên các phiên bản IE >= 9
	addClassLazyload(); // Luôn luôn addClass lazyload cho các hình ảnh có thuộc tính [data-src]
	homeSliderBanner();
})

$(document).ajaxComplete(function () {
	addClassLazyload();
})