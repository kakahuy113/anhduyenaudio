// Function thêm class lazyload vào các thẻ <img> có thuộc tính [data-src]
const addClassLazyload = () => {
	let imgList = document.querySelectorAll("img[data-src]")
	Array.prototype.forEach.call(imgList, function(el) {
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
		observer: true,
		observeParents: true,
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
// SLIDER LIST CLIENTS
function clientSlider() {
	var swiper = new Swiper(".clients-slider .swiper-container", {
		slidesPerView: 5,
		loop: true,
		speed: 1200,
		autoplay: true,
		pagination: {
			el: '.clients-slider .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.clients-slider .swiper-button-next',
			prevEl: '.clients-slider .swiper-button-prev',
		},
	})
}
// TAB SALE AND HOT PRODUCT
function tabsSaleHot() {
	$(".product-sale-hot #tabs h2").click(function(e) {
		e.preventDefault();
		var tabName = $(this).attr('data-tab');
		// ACTIVE TITLE
		$('.product-sale-hot #tabs h2').removeClass('active');
		$(this).addClass('active');
		// ACTIVE TABS
		$('.product-sale-hot .tab-content').removeClass('active');
		$("#" + tabName).addClass('active');
	});
}
// SUBMENU CATEGORY
function submenuCategory() {
	$(".category-list .item-category h3").on('click', function() {
		$(".category-list .item-category h3").not(this).siblings('.list-item').slideUp('active');

		$(this).siblings(".list-item").slideToggle('active');
	});
}
// SUBMENU CATEGORY DETAIL
function submenuCategoryDetail() {
	$(".category-list .item-category .list-item .item").on('click', function() {

		$(".category-list .item-category .list-item .item").not(this).find('.mdi-plus').removeClass('active');
		$(".category-list .item-category .list-item .item").not(this).find('.child').slideUp('active');

		$(this).find(".mdi-plus").toggleClass('active');
		$(this).find(".child").slideToggle('active');
	});
}

function imgProductSlider() {
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		direction: 'vertical',
		spaceBetween: 10,
		slidesPerView: 4,
		loop: true,
		freeMode: true,
		loopedSlides: 5,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		loop: true,
		simulateTouch: false,
		loopedSlides: 5, //looped slides should be the same
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
}
const toggleAddNewsAddressItem = () => {
	$(".add-news-address").on("click", function() {
		$(".add-new-address-form").slideToggle();
	})
}

const getInformationToEdit = () => {
	$(".address-edit").on("click", function() {
		var name = $(this).parents(".address-item").find("[data-name]").attr("data-name")
		var address = $(this).parents(".address-item").find("[data-address]").attr("data-address")
		var phone = $(this).parents(".address-item").find("[data-phone]").attr("data-phone")

		$(".add-new-address-form").find("#fullname").val(name)
		$(".add-new-address-form").find("#phone").val(phone)
		$(".add-new-address-form").find("#address").val(address)
		$(".add-new-address-form").slideDown()
	})
}

const cartQuantity = () => {
	$('.quantity-input .minus').each(function() {
		$(this).on("click", function() {
			let curVal = Number($(this).siblings("input").val())
			if (curVal <= 0) {
				curVal = 0;
			} else {
				curVal -= 1;
			}
			$(this).siblings("input").val(curVal)
		})
	})
	$('.quantity-input .plus').each(function() {
		$(this).on("click", function() {
			let curVal = Number($(this).siblings("input").val())
			if (curVal >= 99) {
				curVal = 99;
			} else {
				curVal += 1;
			}
			$(this).siblings("input").val(curVal)
		})
	})
}

const toggleFormAddNewAddress = () => {
	$('.add-new-address').on('click', function() {
		$('.add-new-address-form').slideToggle();
	})
}


$(document).ready(function() {
	objectFitImages("img.ofc"); // Luôn luôn chậy polyfill cho thuôc tính object-fit: cover trên các phiên bản IE >= 9
	addClassLazyload(); // Luôn luôn addClass lazyload cho các hình ảnh có thuộc tính [data-src]
	homeSliderBanner();
	productSlider();
	brandSlider();
	clientSlider();
	tabsSaleHot();
	submenuCategory();
	submenuCategoryDetail();
	imgProductSlider();
	toggleAddNewsAddressItem();
	getInformationToEdit();
	cartQuantity();
	toggleFormAddNewAddress();
})


$(document).ajaxComplete(function() {
	addClassLazyload();
	cartQuantity();
})