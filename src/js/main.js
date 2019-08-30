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
// Script cho tab
class Tab {
	selector;
	titleList;
	contentList;

	constructor(selector) {
		this.selector = document.querySelector(selector);
		if (this.selector) {
			this.titleList = this.selector.querySelectorAll("[toggle-for]")
			this.contentList = this.selector.querySelectorAll("[tab-id]")
			this.init();
		}
	}

	runTabWhenClicked() {
		Array.prototype.forEach.call(this.titleList, (element, index) => {
			element.addEventListener("click", () => {
				const tabTarget = element.attributes["toggle-for"].value;
				const targetDOM = this.selector.querySelector(`[tab-id='${tabTarget}']`);
				element.classList.add("active");
				Array.prototype.forEach.call(this.titleList, (eleClicked, eleClickedIndex) => {
					if (eleClickedIndex != index) {
						eleClicked.classList.remove("active")
					}
				});
				Array.prototype.forEach.call(this.contentList, (tabContentElement) => {
					if (tabContentElement.attributes["tab-id"].value != tabTarget) {
						tabContentElement.style.display = "none"
						tabContentElement.classList.remove("show")
					}
				});
				targetDOM.style.display = "block"
				setTimeout(() => {
					targetDOM.classList.add("show")
				}, 50);
			})
		})
	}

	activeFirstTab() {
		this.titleList[0].click();
	}

	init() {
		this.runTabWhenClicked();
		this.activeFirstTab();
	}
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
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			480: {
				slidesPerView: 2,
			}
		},
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
// SILDER PRODUCT DETAIL
function imgProductSlider() {
	var galleryThumbs = new Swiper('.slider-imgProduct .gallery-thumbs', {
		direction: 'vertical',
		spaceBetween: 10,
		slidesPerView: 4,
		// loop: true,
		freeMode: true,
		loopedSlides: 5,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.gallery-thumbs-wrapper .swiper-button-next',
			prevEl: '.gallery-thumbs-wrapper .swiper-button-prev',
		},
	});
	var galleryTop = new Swiper('.slider-imgProduct .gallery-top', {
		spaceBetween: 10,
		// loop: true,
		simulateTouch: false,
		loopedSlides: 5, //looped slides should be the same
		navigation: {
			nextEl: '.gallery-thumbs-wrapper .swiper-button-next',
			prevEl: '.gallery-thumbs-wrapper .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
}
// START RANKING
function dataStartRanking() {
	$('.rate').each(function() {
		var _this = $(this);
		if (_this.find(".img-star").length > 0) {
			_this.find(".img-star .star").on("click", function(e) {
				let offsetLeft = _this.find(".img-star .star").offset().left
				let width = _this.find(".img-star .star").width()
				let positionClicked = e.screenX - Math.round(offsetLeft, 0)
				let starRatedWidth = Math.floor(positionClicked / width * 100)

				if (starRatedWidth >= 80) {
					_this.find(".img-star .star-rated").width("100%");
					$('.rate').attr('data-rate', 5)
				} else if (starRatedWidth >= 60) {
					_this.find(".img-star .star-rated").width("80%");
					$('.rate').attr('data-rate', 4)
				} else if (starRatedWidth >= 40) {
					_this.find(".img-star .star-rated").width("60%");
					$('.rate').attr('data-rate', 3)
				} else if (starRatedWidth >= 20) {
					_this.find(".img-star .star-rated").width("40%");
					$('.rate').attr('data-rate', 2)
				} else {
					_this.find(".img-star .star-rated").width("20%");
					$('.rate').attr('data-rate', 1)
				}
			})
		}
	})
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
// CHỌN MÀU SẢN PHẨM
function chooesColor() {
	$('.chooes-quantity-color .color').click(function(e) {
		e.preventDefault();

		$(".chooes-quantity-color .color").removeClass('active')
		$(this).addClass('active');
	});
}

function sliderTheSameProduct() {
	var swiper = new Swiper(".the-same-product-slider .swiper-container", {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		speed: 1200,
		// autoplay: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.the-same-product-slider .swiper-button-next',
			prevEl: '.the-same-product-slider .swiper-button-prev',
		},
	})
}
// LẤY % SAO
function getDataBar() {

	let dataBarNodeList = document.querySelectorAll('.statistical-rating .middle .bar');


	Array.prototype.forEach.call(dataBarNodeList, function(e, index) {
		const data = e.getAttribute('data-bar');
		e.style.width = data + "%";
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

function likeComment() {
	$('.button-like-comment').click(function(e) {
		e.preventDefault();
		// console.log($(this).find('.like-comment').toggleClass('active'));
		$(this).find('.like-comment').toggleClass('active');
		if ($('.button-like-comment').find('.like-comment').hasClass('active')) {
			$('.button-like-comment').attr('data-like', true)
		} else {
			$('.button-like-comment').attr('data-like', false)
		}
	});
}

function countDownSale() {
	// Set the date we're counting down to
	var countDownDate = new Date("Sep 30, 2019 23:59:59").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {
		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds

		// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Display the result in the element with id="demo"
		try {
			// document.getElementById("days").innerHTML = days;
			document.getElementById("hours").innerHTML = hours;
			document.getElementById("minutes").innerHTML = minutes;
			document.getElementById("seconds").innerHTML = seconds;
			// If the count down is finished, write some text 
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("demo").innerHTML = "EXPIRED";
			}
		} catch (error) {

		}
	}, 1000);

}
const clickThenScrollToSection = () => {
	let aboutNavItemNodeList = document.querySelectorAll(".about-nav .item")
	if (aboutNavItemNodeList) {
		Array.prototype.forEach.call(aboutNavItemNodeList, element => {
			element.addEventListener("click", e => {
				e.preventDefault();
				let targetBlock = document.getElementById(element.attributes["data-href"].value);
				// let scrollPosition = targetBlock.offsetTop - document.querySelector("header").offsetHeight
				let scrollPosition = targetBlock.offsetTop
				window.scrollTo({
					top: scrollPosition,
					behavior: "smooth",
				})
			})
		})
	}
}
// SLIDER BANNER
function introduceSliderBanner() {
	var swpier = new Swiper('.introduce-slider', {
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
			el: '.introduce-slider .swiper-pagination',
			clickable: true,
		},
	});
}


const megaMenuHover = () => {
	let dataMegas = document.querySelectorAll("[data-mega]")
	let dataMegaContents = document.querySelectorAll("[data-mega-content]")
	if (window.innerWidth >= 1025) {
		Array.prototype.forEach.call(dataMegas, (dataMega, dataMegaIndex) => {
			dataMega.addEventListener("mouseover", () => {
				let target = dataMega.attributes["data-mega"].value
				Array.prototype.forEach.call(dataMegaContents, dataMegaContent => {
					dataMegaContent.style.display = "none";
				})
				Array.prototype.forEach.call(dataMegas, (e, index) => {
					dataMegas[index].classList.remove("active")
				})
				dataMega.classList.add("active")
				document.querySelector(`[data-mega-content='${target}']`).style.display = "flex";
			})
		})
	} else {
		Array.prototype.forEach.call(dataMegas, (dataMega, dataMegaIndex) => {
			dataMega.addEventListener("click", (e) => {
				e.preventDefault();
				let target = dataMega.attributes["data-mega"].value
				Array.prototype.forEach.call(dataMegaContents, dataMegaContent => {
					dataMegaContent.style.display = "none";
				})
				Array.prototype.forEach.call(dataMegas, (e, index) => {
					dataMegas[index].classList.remove("active")
				})
				dataMega.classList.add("active")
				document.querySelector(`[data-mega-content='${target}']`).style.display = "flex";
			})
		})
	}
}

$(document).ready(function() {
	objectFitImages("img.ofc"); // Luôn luôn chậy polyfill cho thuôc tính object-fit: cover trên các phiên bản IE >= 9
	addClassLazyload(); // Luôn luôn addClass lazyload cho các hình ảnh có thuộc tính [data-src]
	homeSliderBanner();
	productSlider();
	brandSlider();
	clientSlider();
	submenuCategory();
	submenuCategoryDetail();
	imgProductSlider();
	toggleAddNewsAddressItem();
	getInformationToEdit();
	dataStartRanking();
	chooesColor();
	sliderTheSameProduct();
	cartQuantity();
	toggleFormAddNewAddress();
	clickThenScrollToSection();
	getDataBar();
	likeComment();
	const recruitmentTab = new Tab(".job-position .tab-container");
	const FaQTab = new Tab(".FaQ .tab-container");
	const ProductDetailTab = new Tab(".tabs-info-product .tab-container");
	if ($(window).width() > 1024) {
		const SaleHotTab = new Tab(".product-sale-hot .tab-container");
	}
	countDownSale();
	introduceSliderBanner();
	megaMenuHover();
})


$(document).ajaxComplete(function() {
	addClassLazyload();
	cartQuantity();
})