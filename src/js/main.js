/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
! function(a) {
	function f(a, b) {
		if (!(a.originalEvent.touches.length > 1)) {
			a.preventDefault();
			var c = a.originalEvent.changedTouches[0],
				d = document.createEvent("MouseEvents");
			d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
		}
	}
	if (a.support.touch = "ontouchend" in document, a.support.touch) {
		var e, b = a.ui.mouse.prototype,
			c = b._mouseInit,
			d = b._mouseDestroy;
		b._touchStart = function(a) {
			var b = this;
			!e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"))
		}, b._touchMove = function(a) {
			e && (this._touchMoved = !0, f(a, "mousemove"))
		}, b._touchEnd = function(a) {
			e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1)
		}, b._mouseInit = function() {
			var b = this;
			b.element.bind({
				touchstart: a.proxy(b, "_touchStart"),
				touchmove: a.proxy(b, "_touchMove"),
				touchend: a.proxy(b, "_touchEnd")
			}), c.call(b)
		}, b._mouseDestroy = function() {
			var b = this;
			b.element.unbind({
				touchstart: a.proxy(b, "_touchStart"),
				touchmove: a.proxy(b, "_touchMove"),
				touchend: a.proxy(b, "_touchEnd")
			}), d.call(b)
		}
	}
}(jQuery);

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
			element.addEventListener("click", e => {
				e.preventDefault();
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
		breakpoints: {
			1024: {
				pagination: false
			}
		},
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
				slidesPerColumn: 2,
				speed: 200,
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

// SLIDER PRODUCT
function productSliderHotSale() {
	var swiper = new Swiper(".product-slider-hot-sale .swiper-container", {
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
				speed: 200,
			}
		},
		pagination: {
			el: '.product-slider-hot-sale .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.product-slider-hot-sale .swiper-button-next',
			prevEl: '.product-slider-hot-sale .swiper-button-prev',
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
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
		},
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
		$(this).toggleClass('active');
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
		spaceBetween: 20,
		slidesPerView: 4,
		freeMode: true,
		loopedSlides: 5,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slideToClickedSlide: true,
		breakpoints: {
			1024: {
				direction: 'horizontal',
				spaceBetween: 30,
			},
		},
		navigation: {
			nextEl: '.gallery-thumbs-wrapper .swiper-button-next',
			prevEl: '.gallery-thumbs-wrapper .swiper-button-prev',
		},
	});
	var galleryTop = new Swiper('.slider-imgProduct .gallery-top', {
		spaceBetween: 10,
		// loop: true,
		simulateTouch: false,
		loopedSlides: 5,
		navigation: {
			nextEl: '.gallery-thumbs-wrapper .swiper-button-next',
			prevEl: '.gallery-thumbs-wrapper .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
}

// ĐÁNH GIÁ SẢN PHẨM KHI BÌNH LUẬN
function clickRating() {
	$('.list-step .rate').each(function() {
		var _this = $(this);
		if (_this.find(".img-star").length > 0) {
			_this.find(".img-star .star").on("click", function(e) {

				let offsetLeft = _this.find(".img-star .star").offset().left
				let width = _this.find(".img-star .star").width()
				let positionClicked = e.pageX - Math.round(offsetLeft, 0)
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

function showRating() {
	$('.block-comment .rate[data-rate]').each(function() {

		var numberStart = $(this).attr('data-rate');

		if (numberStart == 5) {
			$(this).find(".img-star .star-rated").width("100%");
		} else if (numberStart == 4) {
			$(this).find(".img-star .star-rated").width("80%");
		} else if (numberStart == 3) {
			$(this).find(".img-star .star-rated").width("60%");
		} else if (numberStart == 2) {
			$(this).find(".img-star .star-rated").width("40%");
		} else if (numberStart == 1) {
			$(this).find(".img-star .star-rated").width("20%");
		}
	})

	$('.info-summary .rate[data-rate]').each(function() {

		var numberStart = $(this).attr('data-rate');

		if (numberStart == 5) {
			$(this).find(".img-star .star-rated").width("100%");
		} else if (numberStart == 4) {
			$(this).find(".img-star .star-rated").width("80%");
		} else if (numberStart == 3) {
			$(this).find(".img-star .star-rated").width("60%");
		} else if (numberStart == 2) {
			$(this).find(".img-star .star-rated").width("40%");
		} else if (numberStart == 1) {
			$(this).find(".img-star .star-rated").width("20%");
		}
	})

	$('.block-rating .rate[data-rate]').each(function() {

		var numberStart = $(this).attr('data-rate');

		if (numberStart == 5) {
			$(this).find(".img-star .star-rated").width("100%");
		} else if (numberStart == 4) {
			$(this).find(".img-star .star-rated").width("80%");
		} else if (numberStart == 3) {
			$(this).find(".img-star .star-rated").width("60%");
		} else if (numberStart == 2) {
			$(this).find(".img-star .star-rated").width("40%");
		} else if (numberStart == 1) {
			$(this).find(".img-star .star-rated").width("20%");
		}
	})
}

const toggleAddNewsAddressItem = () => {
	$(".add-news-address").on("click", function() {
		$(".add-new-address-form").slideToggle();
	})
}

const getInformationToEdit = () => {
	$(".address-item .js-btn-edit-address").on("click", function() {
		var name = $(this).parents(".address-item").find("[data-name]").attr("data-name")
		var address = $(this).parents(".address-item").find("[data-address]").attr("data-address")
		var phone = $(this).parents(".address-item").find("[data-phone]").attr("data-phone")
		var city = $(this).parents(".address-item").find("[data-city]").attr("data-city")
		var district = $(this).parents(".address-item").find("[data-district]").attr("data-district")
		$(".add-new-address-form").find("#fullname").val(name)
		$(".add-new-address-form").find("#phone").val(phone)
		$(".add-new-address-form").find("#address").val(address)
		$(".add-new-address-form").find("#ShippingCitySelectedValue").val(city)
		$(".add-new-address-form").find("#ShippingDistrictSelectedValue").val(district)
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
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			575: {
				slidesPerView: 1,
			}
		},
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

// const cartQuantity = () => {
// 	$('.quantity-input .minus').each(function () {
// 		$(this).on("click", function () {
// 			let curVal = Number($(this).siblings("input").val())
// 			if (curVal <= 0) {
// 				curVal = 0;
// 			} else {
// 				curVal -= 1;
// 			}
// 			$(this).siblings("input").val(curVal)
// 		})
// 	})
// 	$('.quantity-input .plus').each(function () {
// 		$(this).on("click", function () {
// 			let curVal = Number($(this).siblings("input").val())
// 			if (curVal >= 99) {
// 				curVal = 99;
// 			} else {
// 				curVal += 1;
// 			}
// 			$(this).siblings("input").val(curVal)
// 		})
// 	})
// }

const toggleFormAddNewAddress = () => {
	$('.add-new-address').on('click', function() {
		$('.add-new-address-form').slideToggle();
	})
}

function likeComment() {
	$('.button-like-comment').click(function(e) {
		e.preventDefault();

		$(this).find('.like-comment').toggleClass('active');

		if ($(this).find('.like-comment').hasClass('active')) {
			$(this).attr('data-like', true)
		} else {
			$(this).attr('data-like', false)
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

// const clickThenScrollToSection = () => {
// 	let aboutNavItemNodeList = document.querySelectorAll(".about-nav .item")
// 	if (aboutNavItemNodeList) {
// 		Array.prototype.forEach.call(aboutNavItemNodeList, element => {
// 			element.addEventListener("click", e => {
// 				e.preventDefault();
// 				let targetBlock = document.getElementById(element.attributes["data-href"].value);
// 				// let scrollPosition = targetBlock.offsetTop - document.querySelector("header").offsetHeight
// 				let scrollPosition = targetBlock.offsetTop
// 				window.scrollTo({
// 					top: scrollPosition,
// 					behavior: "smooth",
// 				})
// 			})
// 		})
// 	}
// }
// SLIDER BANNER

function introduceSliderBanner() {
	var swpier = new Swiper('.introduce-slider', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		breakpoints: {
			1024: {
				pagination: false,
			}
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

function showFilter() {
	$('.list-product .block-title-filter').click(function(e) {
		e.preventDefault();
		var heightThisPage = $(window).height();

		$(this).toggleClass('active');
		$('.list-product .block-filter').slideToggle('active');
		$('#backdrop').toggleClass('active');

		if ($(this).hasClass('active')) {
			$('body').height(heightThisPage);
			$('body').css(
				'overflow', 'hidden'
			);
		} else {
			$('body').removeAttr('style');
		}

		$('#backdrop').click(function(e) {
			e.preventDefault();
			$(this).removeClass('active');
			$('body').removeAttr('style');
			$('.list-product .block-title-filter').removeClass('active');
			$('.list-product .block-filter').slideUp();
		});
	});
}

const megaMenuHover = () => {
	let dataMegas = document.querySelectorAll("[data-mega]")
	let dataMegaContents = document.querySelectorAll("[data-mega-content]")
	let firstElement;
	if (window.innerWidth >= 1025) {
		Array.prototype.forEach.call(dataMegas, (dataMega, dataMegaIndex) => {
			dataMega.addEventListener("mouseover", () => {
				let target = dataMega.attributes["data-mega"].value
				Array.prototype.forEach.call(dataMegaContents, (dataMegaContent, index) => {
					dataMegaContent.style.display = "none";
					dataMegas[index].classList.remove("active")
				})
				dataMega.classList.add("active")
				document.querySelector(`[data-mega-content='${target}']`).style.display = "flex";
			})
			dataMega.addEventListener("mouseleave", () => {
				dataMegas[dataMegaIndex].classList.remove("active")
			})
		})
	} else {
		Array.prototype.forEach.call(dataMegas, (dataMega, dataMegaIndex) => {
			dataMega.addEventListener("click", (e) => {
				e.preventDefault();
				let target = dataMega.attributes["data-mega"].value
				Array.prototype.forEach.call(dataMegaContents, (dataMegaContent, index) => {
					dataMegaContent.style.display = "none";
					dataMegas[index].classList.remove("active")
				})
				dataMega.classList.add("active")
				document.querySelector(`[data-mega-content='${target}']`).style.display = "flex";
			})
		})

		dataMegas[0].click();
	}
}

const turnOffPopupWhenClicked = () => {
	$("[data-fancybox]").on("click", function() {
		$(".bottom-header").removeClass("active")
		$("header .opacity").removeClass("active");
		$(".login-popup").removeClass("open");
		$(".cart-panel").removeClass("open");
		let _this = $(this).attr("data-src")
		$(".fancybox-content").not(_this).parents(".fancybox-container").hide()
	})

	$("[data-fancybox]").fancybox({
		closeExisting: true,
		hash: false,
		// afterClose: function() {
		// 	$.fancybox.close(true)
		// }
	})
}

const moveAccount = () => {
	const move = new MappingListener({
		selector: ".top-header-item.account-item",
		desktopWrapper: ".top-header-item.cart",
		desktopMethod: "insertBefore",
		mobileWrapper: ".mega-menu-wrapper .list",
		mobileMethod: "insertBefore",
		breakpoints: 1025,
	}).watch()
}

const mobileMenu = () => {
	const mobileMenuHandler = () => {
		document.querySelector(".mega-menu-wrapper").classList.toggle("active");
		let classListArray = Array.from(document.querySelector(".mega-menu-wrapper").classList);
		const windowHeight = window.innerHeight;
		if (classListArray.indexOf("active") !== -1) {
			document.getElementById("header-backdrop").classList.add("active");
			document.querySelector("body").style.overflow = "hidden";
			document.querySelector("body").style.height = windowHeight + 'px';
			document.querySelector("body").style.position = "fixed";
		} else {
			document.getElementById("header-backdrop").classList.remove("active");
			document.querySelector(".account-box").classList.remove("active");
			document.querySelector("body").removeAttribute('style');
		}
	}

	document.querySelector(".mobile-toggle").addEventListener("click", mobileMenuHandler)
	document.querySelector(".mega-menu-wrapper .btn-close").addEventListener("click", mobileMenuHandler)
	document.getElementById("header-backdrop").addEventListener("click", mobileMenuHandler)

	if (window.innerWidth < 1025) {
		document.querySelector(".mega-menu-wrapper .account-item").addEventListener("click", () => {
			document.querySelector(".mega-menu-wrapper .account-item .account-box").classList.toggle("active")
		})
	}
}

const addClassHeaderWhenScroll = () => {
	if ($(window).scrollTop() > 0) {
		$("header").addClass("active")
	} else {
		$("header").removeClass("active")
	}
}

function backToTop() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('#back-to-top').addClass('show');
		} else {
			$('#back-to-top').removeClass('show');
		}
	});

	$("#back-to-top").on("click", function(e) {
		e.preventDefault();
		$("html,body").animate({
			scrollTop: 0
		}, 1200)
	})
}

function rangeSliderPrice() {
	let min_price = Number($("#slider-range").attr('data-min'));
	let max_price = Number($("#slider-range").attr('data-max'));
	let curMinPrice = Number($("#slider-range").attr('data-current-min'))
	let curMaxPrice = Number($("#slider-range").attr('data-current-max'))
	$("#slider-range").slider({
		range: true,
		min: min_price,
		max: max_price,
		values: [curMinPrice, curMaxPrice],
		slide: function(event, ui) {
			$("#amount").val(ui.values[0] + " - " + ui.values[1]);
			$("#value-text").html(ui.values[0] + " đ - " + ui.values[1] + " đ");
		},
		stop: function(event, ui) {
			Redirect();
		},
		create: function(event, ui) {

		}
	});
	$("#amount").val($("#slider-range").slider("values", 0) + " - " + $("#slider-range").slider("values", 1));
	$("#value-text").html($("#slider-range").slider("values", 0) + "đ - " + $("#slider-range").slider("values", 1) + "đ");
}

const findManufactures = () => {
	const input = document.querySelector('.brand .search input')
	if (input) {
		input.addEventListener('keyup', (e) => {
			let currentValue = input.value.toLowerCase();
			let listCheckbox = document.querySelectorAll('.brand .check-box .form-group')
			listCheckbox.forEach(el => {
				let manufactureName = el.querySelector('label').textContent.toLowerCase()
				if (!manufactureName.includes(currentValue)) {
					el.style.display = 'none';
				}
				if (manufactureName.includes(currentValue)) {
					el.style.display = 'block';
				}
			})
		})
	}
}


function chanceUrlNewsPage() {
	$('.link-news').each(function(index) {
		var newsUrlMobile = $(this).attr('data-newsMobile');
		if ($(window).width() < 1024) {
			$(this).attr('href', newsUrlMobile);
		}
	})
}

function getProductQuantity() {
	$(".category-list .child").each(function() {
		var _thisList = $(this)
		var productOfThis = 0;
		_thisList.find("[data-product]").each(function() {
			var _thisItem = $(this)
			productOfThis += Number(_thisItem.attr("data-product"))
		})
		_thisList.siblings("h5").attr("data-product", productOfThis);
	})

	$('.category-list [data-product]').each(function() {
		$(this).find('span').html(`(${$(this).attr('data-product')})`)
	})

	var _thisLink = $('.category-list [data-product].active')

	if (_thisLink.length > 0) {
		$('.quantity [data-sum-product]').html(_thisLink.attr('data-product'));
	}
}

function showMainReply() {
	$('.main-comment .button-comment').click(function(e) {
		e.preventDefault();
		$(this).parents('.block-comment').find('.main-comment.reply').addClass('active');
	});
}

// AJAX COMMENT
function AjaxComment() {
	$('body').on('click', '.submit.comment', function(e) {
		e.preventDefault();
		var product_ID = $(this).siblings("input[name='content-comment']").attr('product-id');
		var newRating = $('.new-comment .rate').attr('data-rate');
		var newCommentContent = $(".new-comment .input-comment input[name='content-comment']").val();

		if (newRating == "") {
			alert('Xin hãy vote cho sản phẩm');
		} else {
			$.ajax({
				type: "post",
				url: "/binh-luan",
				data: {
					Id: product_ID,
					Content: newCommentContent,
					Vote: newRating
				},
				success: function(res) {
					if (res.Code == 200) {
						window.reload();
					} else {
						alert(res.Message)
					}
				}
			});
		}
	});
}
// AJAX REPLY
function AjaxReply() {
	$('body').on('click', '.submit.reply', function(e) {
		e.preventDefault();
		var comment_ID = $(this).parents(".box-reply").siblings('.main-comment[comment-id]').attr('comment-id');
		var replyContent = $(this).siblings("input[name='content-comment']").val();

		$.ajax({
			type: "post",
			url: "/phan-hoi",
			data: {
				Id: comment_ID,
				Content: replyContent,
			},
			success: function(res) {
				if (res.Code == 200) {
					window.reload();
				} else {
					alert(res.Message)
				}
			}
		});
	});
}
// AJAX LIKE
function AjaxLike() {
	$('body').on('click', '.button-like-comment', function(e) {
		e.preventDefault();
		var likeInfo = {}
		likeInfo.Id = $(this).parents('.main-comment[comment-id]').attr('comment-id');
		if ($(this).attr("data-like") == "" || $(this).attr("data-like") == "false") {
			likeComment = true;
		} else {
			likeComment = false;
		}
		$(this).attr("data-like", likeInfo.likeComment)
		$.ajax({
			type: "post",
			url: "/thich",
			data: likeInfo,
			success: function(res) {
				if (res.Code == 200) {
					$(this).find('span').html(res.Message);
				} else {
					alert(res.Message)
				}
			}
		});
	});

}

function AjaxDeteleComment() {
	$('body').on('click', '.button-delete-comment', function(e) {
		e.preventDefault();
		var deleteInfo = {};
		deleteInfo.Id = $(this).parents('.main-comment[comment-id]').attr('comment-id');
		$.ajax({
			url: "/xoa-binhluan",
			data: deleteInfo,
			dataType: "dataType",
			success: function(res) {
				if (res.Code == 200) {
					$(this).find('span').html('Đã xóa').addClass('deleted');
				} else {
					alert(res.Message)
				}
			}
		});
	});
}

const getPropertyId = () => {
	let propertyId = $('.product-summary .color-item .list-color span.active').attr("data-propertyId");
	$('.product-summary .add-cart').attr("data-propertyId", propertyId);
	$('.product-summary .color-item .list-color span').on("click", function() {
		$(this).siblings("span").removeClass("active")
		$(this).addClass("active")
		let currentPropertyId = $(this).attr("data-propertyId");
		$('.product-summary .add-cart').attr("data-propertyId", currentPropertyId);
	})
}

const aboutNavSelect = () => {
	const select = document.querySelector(".about-nav select");
	if (select) {
		select.addEventListener("change", (e) => {
			document.querySelector(`[toggle-for=${e.srcElement.value}]`).click()
		})
	}
}

const calculatePriceWithShippingFee = () => {
	$('[name="shipping_method"').on("change", function() {
		const currentShippingFee = Number($(this).siblings('label').find('[data-shipping-fee]').attr('data-shipping-fee'))
		$('[data-shipping]').attr('data-shipping', currentShippingFee)
		$('[data-shipping]').html(currentShippingFee.toLocaleString() + ' đ')
		const tempPrice = Number($('[data-temp-price]').attr('data-temp-price'))
		console.log(tempPrice)
		$('[total-price]').attr('total-price', tempPrice - currentShippingFee)
		$('[total-price]').html((tempPrice - currentShippingFee).toLocaleString() + ' đ')
	})
}

$(document).ready(function() {
	objectFitImages("img.ofc"); // Luôn luôn chậy polyfill cho thuôc tính object-fit: cover trên các phiên bản IE >= 9
	addClassLazyload(); // Luôn luôn addClass lazyload cho các hình ảnh có thuộc tính [data-src]
	addClassHeaderWhenScroll();
	moveAccount();
	mobileMenu();
	aboutNavSelect();
	calculatePriceWithShippingFee();
	findManufactures();
	homeSliderBanner();
	productSlider();
	brandSlider();
	clientSlider();
	submenuCategory();
	submenuCategoryDetail();
	imgProductSlider();
	toggleAddNewsAddressItem();
	getInformationToEdit();
	clickRating();
	showRating();
	chooesColor();
	sliderTheSameProduct();
	toggleFormAddNewAddress();
	// Ajax
	AjaxComment();
	AjaxReply();
	AjaxLike();
	AjaxDeteleComment();
	// clickThenScrollToSection();
	getDataBar();
	likeComment();
	backToTop();
	rangeSliderPrice();
	chanceUrlNewsPage();
	showMainReply();
	if ($(window).width() < 1024) {
		showFilter();
	}
	productSliderHotSale();
	const recruitmentTab = new Tab(".job-position .tab-container");
	const cauhoithuonggap = new Tab(".FaQ .tab-container");
	const ProductDetailTab = new Tab(".tabs-info-product .tab-container");
	const aboutTab = new Tab(".about-tab .tab-container");
	if ($(window).width() > 1024) {
		const SaleHotTab = new Tab(".product-sale-hot .tab-container");
	}
	countDownSale();
	introduceSliderBanner();
	megaMenuHover();
	turnOffPopupWhenClicked();
	getPropertyId();
	getProductQuantity();
})


$(document).ajaxComplete(function() {
	addClassLazyload();
	// cartQuantity();
})

window.addEventListener("scroll", () => {
	addClassHeaderWhenScroll();
})