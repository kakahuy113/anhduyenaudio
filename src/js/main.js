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
!(function (a) {
	function f(a, b) {
		if (!(a.originalEvent.touches.length > 1)) {
			a.preventDefault();
			var c = a.originalEvent.changedTouches[0],
				d = document.createEvent("MouseEvents");
			d.initMouseEvent(
				b,
				!0,
				!0,
				window,
				1,
				c.screenX,
				c.screenY,
				c.clientX,
				c.clientY,
				!1,
				!1,
				!1,
				!1,
				0,
				null
			),
				a.target.dispatchEvent(d);
		}
	}
	if (((a.support.touch = "ontouchend" in document), a.support.touch)) {
		var e,
			b = a.ui.mouse.prototype,
			c = b._mouseInit,
			d = b._mouseDestroy;
		(b._touchStart = function (a) {
			var b = this;
			!e &&
				b._mouseCapture(a.originalEvent.changedTouches[0]) &&
				((e = !0),
					(b._touchMoved = !1),
					f(a, "mouseover"),
					f(a, "mousemove"),
					f(a, "mousedown"));
		}),
			(b._touchMove = function (a) {
				e && ((this._touchMoved = !0), f(a, "mousemove"));
			}),
			(b._touchEnd = function (a) {
				e &&
					(f(a, "mouseup"),
						f(a, "mouseout"),
						this._touchMoved || f(a, "click"),
						(e = !1));
			}),
			(b._mouseInit = function () {
				var b = this;
				b.element.bind({
					touchstart: a.proxy(b, "_touchStart"),
					touchmove: a.proxy(b, "_touchMove"),
					touchend: a.proxy(b, "_touchEnd"),
				}),
					c.call(b);
			}),
			(b._mouseDestroy = function () {
				var b = this;
				b.element.unbind({
					touchstart: a.proxy(b, "_touchStart"),
					touchmove: a.proxy(b, "_touchMove"),
					touchend: a.proxy(b, "_touchEnd"),
				}),
					d.call(b);
			});
	}
})(jQuery);

// Function thêm class lazyload vào các thẻ <img> có thuộc tính [data-src]
const addClassLazyload = () => {
	let imgList = document.querySelectorAll("img[data-src]");
	Array.prototype.forEach.call(imgList, function (el) {
		if (el.className.length > 0) {
			el.className = el.className + " lazyload";
		} else {
			el.className = "lazyload";
		}
	});
};

// Script cho tab
class Tab {
	selector;
	titleList;
	contentList;

	constructor(selector) {
		this.selector = document.querySelector(selector);
		if (this.selector) {
			this.titleList = this.selector.querySelectorAll("[toggle-for]");
			this.contentList = this.selector.querySelectorAll("[tab-id]");
			this.init();
		}
	}

	runTabWhenClicked() {
		Array.prototype.forEach.call(this.titleList, (element, index) => {
			element.addEventListener("click", (e) => {
				e.preventDefault();
				const tabTarget = element.attributes["toggle-for"].value;
				const targetDOM = this.selector.querySelector(
					`[tab-id='${tabTarget}']`
				);
				element.classList.add("active");
				Array.prototype.forEach.call(
					this.titleList,
					(eleClicked, eleClickedIndex) => {
						if (eleClickedIndex != index) {
							eleClicked.classList.remove("active");
						}
					}
				);
				Array.prototype.forEach.call(this.contentList, (tabContentElement) => {
					if (tabContentElement.attributes["tab-id"].value != tabTarget) {
						tabContentElement.style.display = "none";
						tabContentElement.classList.remove("show");
					}
				});
				targetDOM.style.display = "block";
				setTimeout(() => {
					targetDOM.classList.add("show");
				}, 50);
			});
		});
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
	var swpier = new Swiper(".slider-HomeBanner", {
		effect: "fade",
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
				pagination: false,
			},
		},
		pagination: {
			el: ".slider-HomeBanner .swiper-pagination",
			clickable: true,
		},
	});
}

// SLIDER PRODUCT
function productSlider() {
	var swiper1 = new Swiper(
		".home-product-1 .product-slider .swiper-container", {
		slidesPerView: 5,
		slidesPerColumn: 2,
		// loop: true,
		speed: 1200,
		autoplay: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			1365: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
				// slidesPerColumn: 2,
				speed: 200,
			},
		},
		pagination: {
			el: ".home-product-1 .product-slider .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".home-product-1 .product-slider .swiper-button-next",
			prevEl: ".home-product-1 .product-slider .swiper-button-prev",
		},
	}
	);
	var swiper2 = new Swiper(
		".home-product-2 .product-slider .swiper-container", {
		slidesPerView: 5,
		slidesPerColumn: 2,
		// loop: true,
		speed: 1200,
		autoplay: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			1365: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
				// slidesPerColumn: 2,
				speed: 200,
			},
		},
		pagination: {
			el: ".home-product-2 .product-slider .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".home-product-2 .product-slider .swiper-button-next",
			prevEl: ".home-product-2 .product-slider .swiper-button-prev",
		},
	}
	);
	var swiper3 = new Swiper(
		".home-product-3 .product-slider .swiper-container", {
		slidesPerView: 5,
		slidesPerColumn: 2,
		// loop: true,
		speed: 1200,
		autoplay: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			1365: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
				speed: 200,
			},
		},
		pagination: {
			el: ".home-product-3 .product-slider .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".home-product-3 .product-slider .swiper-button-next",
			prevEl: ".home-product-3 .product-slider .swiper-button-prev",
		},
	}
	);

	var swiper1Nav = new Swiper(".home-product-1 .block-nav .swiper-container", {
		slidesPerView: "auto",
		spaceBetween: 10,
		navigation: {
			prevEl: ".home-product-1 .block-nav .swiper-prev",
			nextEl: ".home-product-1 .block-nav .swiper-next",
		},
		// breakpoints: {
		// 	1200: {
		// 		slidesPerView: 4
		// 	},
		// 	1024: {
		// 		slidesPerView: 3,
		// 	},
		// 	768: {
		// 		slidesPerView: 4,
		// 	},
		// 	576: {
		// 		slidesPerView: 3,
		// 	}
		// }
	});

	var swiper2Nav = new Swiper(".home-product-2 .block-nav .swiper-container", {
		slidesPerView: "auto",
		spaceBetween: 10,
		navigation: {
			prevEl: ".home-product-2 .block-nav .swiper-prev",
			nextEl: ".home-product-2 .block-nav .swiper-next",
		},
		// breakpoints: {
		// 	1200: {
		// 		slidesPerView: 4
		// 	},
		// 	1024: {
		// 		slidesPerView: 3,
		// 	},
		// 	768: {
		// 		slidesPerView: 4,
		// 	},
		// 	576: {
		// 		slidesPerView: 3,
		// 	}
		// }
	});

	var swiper3Nav = new Swiper(".home-product-3 .block-nav .swiper-container", {
		slidesPerView: "auto",
		spaceBetween: 10,
		navigation: {
			prevEl: ".home-product-3 .block-nav .swiper-prev",
			nextEl: ".home-product-3 .block-nav .swiper-next",
		},
		// breakpoints: {
		// 	1200: {
		// 		slidesPerView: 4
		// 	},
		// 	1024: {
		// 		slidesPerView: 3,
		// 	},
		// 	768: {
		// 		slidesPerView: 4,
		// 	},
		// 	576: {
		// 		slidesPerView: 3,
		// 	}
		// }
	});

	$(".block-nav a").on("click", function (e) {
		e.preventDefault();
		const _this = $(this);
		const url = _this.attr("href");
		_this.addClass("active");
		_this.parents(".swiper-slide").siblings().find("a").removeClass("active");

		$.ajax({
			url: url,
			beforeSend: function () {
				_this
					.parents(".home-product")
					.find(".product-slider")
					.addClass("loading");
			},
			success: function (res) {
				if (_this.parents(".home-product").hasClass("home-product-1")) {
					swiper1.removeAllSlides();
					swiper1.appendSlide(res);
				}
				if (_this.parents(".home-product").hasClass("home-product-2")) {
					swiper2.removeAllSlides();
					swiper2.appendSlide(res);
				}
				if (_this.parents(".home-product").hasClass("home-product-3")) {
					swiper3.removeAllSlides();
					swiper3.appendSlide(res);
				}
				_this
					.parents(".home-product")
					.find(".product-slider")
					.removeClass("loading");
			},
			error: function (err) {
				alert(err.Message);
			},
		});
	});
}

// SLIDER PRODUCT
function productSliderHotSale() {
	const badgeHot =
		'<div class="badge-sale-hot"><span data-hot>HOT</span></div>';
	$('.product-slider-hot-sale[tab-id="hot"] .swiper-slide figure').each(
		function () {
			$(this).append(badgeHot);
		}
	);
	var swiper = new Swiper(".product-slider-hot-sale .swiper-container", {
		slidesPerView: 5,
		loop: true,
		speed: 1200,
		autoplay: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 3,
				slidesPerColumn: 2,
			},
			768: {
				slidesPerView: 2,
				slidesPerColumn: 2,
			},
		},
		pagination: {
			el: ".product-slider-hot-sale .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".product-slider-hot-sale .swiper-button-next",
			prevEl: ".product-slider-hot-sale .swiper-button-prev",
		},
	});
}

// SLIDER BRAND
function brandSlider() {
	var swiper = new Swiper(".brand-slider .swiper-container", {
		slidesPerView: 8,
		loop: true,
		speed: 1200,
		autoplay: true,
		pagination: {
			el: ".brand-slider .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".brand-slider .swiper-button-next",
			prevEl: ".brand-slider .swiper-button-prev",
		},
	});
}

// SLIDER LIST CLIENTS
function clientSlider() {
	var swiper = new Swiper(".home-page .clients-slider .swiper-container", {
		slidesPerView: 6,
		loop: true,
		speed: 1200,
		autoplay: true,
		breakpoints: {
			1200: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 4,
			},
			576: {
				slidesPerView: 3,
			},
		},
		pagination: {
			el: ".home-page .clients-slider .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".home-page .clients-slider .swiper-button-next",
			prevEl: ".home-page .clients-slider .swiper-button-prev",
		},
	});
}

// SUBMENU CATEGORY
function submenuCategory() {
	$(".category-list .item-category h5")
		.siblings(".list-item")
		.addClass("child");

	$(".category-list .item-category h3").on("click", function () {
		$(this).toggleClass("active");
		$(".category-list .item-category h3").not(this).removeClass("active");
		$(".category-list .item-category h3")
			.not(this)
			.siblings(".list-item")
			.slideUp();
		$(".category-list .item-category h3")
			.siblings(".list-item")
			.find(".child")
			.slideUp();
		$(".category-list .item-category h3")
			.siblings(".list-item")
			.find(".mdi-plus")
			.removeClass("active");
		$(this).siblings(".list-item").slideToggle();
	});

	$(".category-list .item-category h5").on("click", function () {
		$(".category-list .item-category h5")
			.not(this)
			.siblings(".list-item")
			.slideUp();
		$(this).siblings(".list-item").slideToggle();

		$(".category-list .item-category h5")
			.not(this)
			.siblings(".mdi-plus")
			.removeClass("active");
		$(this).siblings(".mdi-plus").toggleClass("active");
	});
}

// SILDER PRODUCT DETAIL
function imgProductSlider() {
	var galleryThumbs = new Swiper(".slider-imgProduct .gallery-thumbs", {
		direction: "vertical",
		spaceBetween: 20,
		slidesPerView: 4,
		freeMode: true,
		loopedSlides: 5,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slideToClickedSlide: true,
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
			575: {
				direction: "vertical",
				spaceBetween: 15,
				slidesPerView: 3,
			},
			1024: {
				direction: "horizontal",
				spaceBetween: 30,
			},
			1440: {
				slidesPerView: 3,
			},
		},
		navigation: {
			nextEl: ".gallery-thumbs-wrapper .swiper-button-next",
			prevEl: ".gallery-thumbs-wrapper .swiper-button-prev",
		},
	});
	var galleryTop = new Swiper(".slider-imgProduct .gallery-top", {
		spaceBetween: 10,
		// loop: true,
		simulateTouch: false,
		loopedSlides: 5,
		navigation: {
			nextEl: ".gallery-thumbs-wrapper .swiper-button-next",
			prevEl: ".gallery-thumbs-wrapper .swiper-button-prev",
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
}

// ĐÁNH GIÁ SẢN PHẨM KHI BÌNH LUẬN
function clickRating() {
	$(".list-step .rate").each(function () {
		var _this = $(this);
		if (_this.find(".img-star").length > 0) {
			_this.find(".img-star .star").on("click", function (e) {
				let offsetLeft = _this.find(".img-star .star").offset().left;
				let width = _this.find(".img-star .star").width();
				let positionClicked = e.pageX - Math.round(offsetLeft, 0);
				let starRatedWidth = Math.floor((positionClicked / width) * 100);

				if (starRatedWidth >= 80) {
					_this.find(".img-star .star-rated").width("100%");
					$(".rate").attr("data-rate", 5);
				} else if (starRatedWidth >= 60) {
					_this.find(".img-star .star-rated").width("80%");
					$(".rate").attr("data-rate", 4);
				} else if (starRatedWidth >= 40) {
					_this.find(".img-star .star-rated").width("60%");
					$(".rate").attr("data-rate", 3);
				} else if (starRatedWidth >= 20) {
					_this.find(".img-star .star-rated").width("40%");
					$(".rate").attr("data-rate", 2);
				} else {
					_this.find(".img-star .star-rated").width("20%");
					$(".rate").attr("data-rate", 1);
				}
			});
		}
	});
}

function showRating() {
	$(".block-comment .rate[data-rate]").each(function () {
		var numberStart = $(this).attr("data-rate");

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
	});

	$(".info-summary .rate[data-rate]").each(function () {
		var numberStart = $(this).attr("data-rate");

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
	});

	$(".block-rating .rate[data-rate]").each(function () {
		var numberStart = $(this).attr("data-rate");

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
	});
}

// CHỌN MÀU SẢN PHẨM
function chooesColor() {
	$(".chooes-quantity-color .color").click(function (e) {
		e.preventDefault();

		$(".chooes-quantity-color .color").removeClass("active");
		$(this).addClass("active");
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
			1024: {
				slidesPerView: 3,
			},
			575: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: ".the-same-product-slider .swiper-button-next",
			prevEl: ".the-same-product-slider .swiper-button-prev",
		},
	});
}
// LẤY % SAO
function getDataBar() {
	let dataBarNodeList = document.querySelectorAll(
		".statistical-rating .middle .bar"
	);
	Array.prototype.forEach.call(dataBarNodeList, function (e, index) {
		const data = e.getAttribute("data-bar");
		e.style.width = data + "%";
	});
}

const cartQuantity = () => {
	$('.quantity-input .minus').each(function () {
		$(this).on("click", function () {
			let alertContent = $(this).attr('data-alert');
			let curVal = Number($(this).siblings("input").val())
			if (curVal <= 0) {
				curVal = 0;
				alert(alertContent);
			} else {
				curVal -= 1;
			}
			$(this).siblings("input").val(curVal)
		})
	})

	$('.quantity-input .plus').each(function () {
		$(this).on("click", function () {
			let alertContent = $(this).attr('data-alert');
			let curVal = Number($(this).siblings("input").val())
			if (curVal >= 5) {
				curVal = 5;
				alert(alertContent)
			} else {
				curVal += 1;
			}
			$(this).siblings("input").val(curVal)
		})
	})

	$('.quantity-input .quantity').each(function () {
		const alertContentMax = $('.quantity-input .plus').attr('data-alert');
		const alertContentMin = $('.quantity-input .minus').attr('data-alert');
		$(this).on("keyup", function () {
			if ($(this).val() >= 5) {
				// alert(alertContentMax)
				$(this).val(5);
			} else if ($(this).val() <= 0) {
				// alert(alertContentMin)
				$(this).val(0);
			}
		})
	})
}

const toggleFormAddNewAddress = () => {
	$(".add-new-address").on("click", function () {
		$(".add-new-address-form").slideToggle();
	});
};

function likeComment() {
	$(".button-like-comment").click(function (e) {
		e.preventDefault();

		$(this).find(".like-comment").toggleClass("active");

		if ($(this).find(".like-comment").hasClass("active")) {
			$(this).attr("data-like", true);
		} else {
			$(this).attr("data-like", false);
		}
	});
}

function countDownSale() {
	$(".box-countdown").hide();

	setTimeout(function () {
		$(".box-countdown").fadeIn(2000);
	}, 1000);

	// Set the date we're counting down to
	var temp = document.querySelector(".date-over p");

	if (temp) {
		var dateEND = new Date(temp.textContent).getTime();

		// Update the count down every 1 second
		var x = setInterval(function () {
			// Get today's date and time
			var now = new Date().getTime();

			// Find the distance between now and the count down date
			var distance = dateEND - now;
			

			// Time calculations for days, hours, minutes and seconds

			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours =
				days * 24 +
				Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Display the result in the element
			try {
				// document.getElementById("days").innerHTML = days;
				document.getElementById("hours").innerHTML = hours;
				document.getElementById("minutes").innerHTML = minutes;
				document.getElementById("seconds").innerHTML = seconds;
				// If the count down is finished, write some text
				if (distance < 0) {
					clearInterval(x);
					$(".box-countdown").remove();
					$(".box-expire").css("display" , "flex");
				}
			} catch (error) { }
		}, 1000);
	}
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
	var swpier = new Swiper(".introduce-slider", {
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		breakpoints: {
			1024: {
				pagination: false,
			},
		},
		centeredSlides: true,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		pagination: {
			el: ".introduce-slider .swiper-pagination",
			clickable: true,
		},
	});
}

function showFilter() {
	$(".list-product .block-title-filter").click(function (e) {
		e.preventDefault();
		var heightThisPage = $(window).height();

		$(this).toggleClass("active");
		$(".list-product .block-filter").toggleClass("active");
		$("#backdrop").toggleClass("active");

		if ($(this).hasClass("active")) {
			$("body").height(heightThisPage);
			$("body").css("overflow", "hidden");
		} else {
			$("body").removeAttr("style");
		}

		$("#backdrop").click(function (e) {
			e.preventDefault();
			$(this).removeClass("active");
			$("body").removeAttr("style");
			$(".list-product .block-title-filter").removeClass("active");
			$(".list-product .block-filter").removeClass();
		});
	});
}

const megaMenuHover = () => {
	let dataMegas = document.querySelectorAll("[data-mega]");
	let dataMegaContents = document.querySelectorAll("[data-mega-content]");
	let firstElement;
	if (window.innerWidth >= 1025) {
		Array.prototype.forEach.call(dataMegas, (dataMega, dataMegaIndex) => {
			dataMega.addEventListener("mouseover", () => {
				let target = dataMega.attributes["data-mega"].value;
				Array.prototype.forEach.call(
					dataMegaContents,
					(dataMegaContent, index) => {
						dataMegaContent.style.display = "none";
						dataMegas[index].classList.remove("active");
					}
				);
				dataMega.classList.add("active");
				document.querySelector(
					`[data-mega-content='${target}']`
				).style.display = "flex";
			});
			dataMega.addEventListener("mouseleave", () => {
				dataMegas[dataMegaIndex].classList.remove("active");
			});
		});
	} else {
		Array.prototype.forEach.call(dataMegas, (dataMega, dataMegaIndex) => {
			dataMega.addEventListener("click", (e) => {
				e.preventDefault();
				let target = dataMega.attributes["data-mega"].value;
				Array.prototype.forEach.call(
					dataMegaContents,
					(dataMegaContent, index) => {
						dataMegaContent.style.display = "none";
						dataMegas[index].classList.remove("active");
					}
				);
				dataMega.classList.add("active");
				document.querySelector(
					`[data-mega-content='${target}']`
				).style.display = "flex";
			});
		});

		dataMegas[0].click();
	}
};

const turnOffPopupWhenClicked = () => {
	$("[data-fancybox]").on("click", function () {
		$(".bottom-header").removeClass("active");
		$("header .opacity").removeClass("active");
		$(".login-popup").removeClass("open");
		$(".cart-panel").removeClass("open");
		let _this = $(this).attr("data-src");
		$(".fancybox-content").not(_this).parents(".fancybox-container").hide();
	});

	$("[data-fancybox]").fancybox({
		closeExisting: true,
		hash: false,
		touch: false,
		// afterClose: function() {
		// 	$.fancybox.close(true)
		// }
	});
};

const moveAccount = () => {
	const move = new MappingListener({
		selector: ".top-header-item.account-item",
		desktopWrapper: ".top-header-item.cart",
		desktopMethod: "insertBefore",
		mobileWrapper: ".mega-menu-wrapper .list",
		mobileMethod: "insertBefore",
		breakpoints: 1025,
	}).watch();
};

const mobileMenu = () => {
	const mobileMenuHandler = () => {
		document.querySelector(".mega-menu-wrapper").classList.toggle("active");
		let classListArray = Array.from(
			document.querySelector(".mega-menu-wrapper").classList
		);
		const windowHeight = window.innerHeight;
		if (classListArray.indexOf("active") !== -1) {
			document.getElementById("header-backdrop").classList.add("active");
			document.querySelector("body").style.overflow = "hidden";
			document.querySelector("body").style.height = windowHeight + "px";
			document.querySelector("body").style.position = "fixed";
		} else {
			document.getElementById("header-backdrop").classList.remove("active");
			document.querySelector(".account-box").classList.remove("active");
			document.querySelector("body").removeAttribute("style");
		}
	};

	document
		.querySelector(".mobile-toggle")
		.addEventListener("click", mobileMenuHandler);
	document
		.querySelector(".mega-menu-wrapper .btn-close")
		.addEventListener("click", mobileMenuHandler);
	document
		.getElementById("header-backdrop")
		.addEventListener("click", mobileMenuHandler);

	if (window.innerWidth < 1025) {
		document
			.querySelector(".mega-menu-wrapper .account-item")
			.addEventListener("click", () => {
				document
					.querySelector(".mega-menu-wrapper .account-item .account-box")
					.classList.toggle("active");
			});
	}
};

const addClassHeaderWhenScroll = () => {
	if ($(window).scrollTop() > 0) {
		$("header").addClass("active");
	} else {
		$("header").removeClass("active");
	}
};

function backToTop() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$("#back-to-top").addClass("show");
		} else {
			$("#back-to-top").removeClass("show");
		}
	});

	$("#back-to-top").on("click", function (e) {
		e.preventDefault();
		$("html,body").animate({
			scrollTop: 0,
		},
			1200
		);
	});
}

const replaceAll = (str, find, replace) => {
	return str.replace(new RegExp(find, "g"), replace);
};

function rangeSliderPrice() {
	const formatCurrency = new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
		minimumFractionDigits: 0,
	});

	let min_price = Number($("#slider-range").attr("data-min"));
	let max_price = Number($("#slider-range").attr("data-max"));
	if (min_price !== max_price) {
		let curMinPrice = Number($("#slider-range").attr("data-current-min"));
		let curMaxPrice = Number($("#slider-range").attr("data-current-max"));
		$("#slider-range").slider({
			range: true,
			min: min_price,
			max: max_price,
			values: [curMinPrice, curMaxPrice],
			slide: function (event, ui) {
				$("#amount").val(ui.values[0] + " - " + ui.values[1]);
				const minCurrency = formatCurrency
					.format(ui.values[0])
					.split(".")
					.join(",");
				const maxCurrency = formatCurrency
					.format(ui.values[1])
					.split(".")
					.join(",");
				$("#value-text").html(`${minCurrency} - ${maxCurrency}`);
			},
			stop: function (event, ui) {
				if (typeof Redirect == "function") {
					Redirect();
				}
			},
		});
		$("#amount").val(
			$("#slider-range").slider("values", 0) +
			" - " +
			$("#slider-range").slider("values", 1)
		);
		$("#value-text").html(
			`${formatCurrency
				.format(curMinPrice)
				.split(".")
				.join(",")} - ${formatCurrency
					.format(curMaxPrice)
					.split(".")
					.join(",")}`
		);
	} else {
		$(".block-filter .price").remove();
	}
}

const findManufactures = () => {
	const input = document.querySelector(".brand .search input");
	if (input) {
		input.addEventListener("keyup", (e) => {
			let currentValue = input.value.toLowerCase();
			let listCheckbox = document.querySelectorAll(
				".brand .check-box .form-group"
			);
			listCheckbox.forEach((el) => {
				let manufactureName = el
					.querySelector("label")
					.textContent.toLowerCase();
				if (!manufactureName.includes(currentValue)) {
					el.style.display = "none";
				}
				if (manufactureName.includes(currentValue)) {
					el.style.display = "block";
				}
			});
		});
	}
};

function chanceUrlNewsPage() {
	$(".link-news").each(function (index) {
		var newsUrlMobile = $(this).attr("data-newsMobile");
		if ($(window).width() < 1024) {
			$(this).attr("href", newsUrlMobile);
		}
	});
}

function getProductQuantity() {
	$(".category-list .child").each(function () {
		var _thisList = $(this);
		var productOfThis = 0;
		_thisList.find("[data-product]").each(function () {
			var _thisItem = $(this);
			productOfThis += Number(_thisItem.attr("data-product"));
		});
		_thisList.siblings("h5").attr("data-product", productOfThis);
	});

	$(".category-list [data-product]").each(function () {
		$(this)
			.find("span")
			.html(`(${$(this).attr("data-product")})`);
	});

	var _thisLink = $(".category-list [data-product].active");

	if (_thisLink.length > 0) {
		$(".quantity [data-sum-product]").html(_thisLink.attr("data-product"));
	}
}

function showMainReply() {
	$(".main-comment .button-comment").click(function (e) {
		e.preventDefault();
		$(this)
			.parents(".block-comment")
			.find(".main-comment.reply")
			.addClass("active");
	});
}

// AJAX COMMENT
function AjaxComment() {
	$("body").on("click", ".submit.comment", function (e) {
		e.preventDefault();
		const isLogin = $('#input-check-login input').attr('data-islogin');
		if (isLogin == "True") {
			var product_ID = $(this).siblings("input[name='content-comment']").attr("product-id");
			var newRating = $(".new-comment .rate").attr("data-rate");
			var newCommentContent = $(".new-comment .input-comment input[name='content-comment']").val();
			if (newRating == "") {
				alert("Xin hãy vote cho sản phẩm");
			} else {
				$.ajax({
					type: "post",
					url: "/binh-luan",
					data: {
						Id: product_ID,
						Content: newCommentContent,
						Vote: newRating,
					},
					success: function (res) {
						if (res.Code == 200) {
							location.reload();
						} else {
							alert(res.Message);
						}
					},
				});
			}
		} else {
			$.fancybox.open({
				src: '#login',
				opts: {
					afterShow: function (instance, current) { }
				}
			});
		}
	});
}

// AJAX REPLY
function AjaxReply() {
	$("body").on("click", ".submit.reply", function (e) {
		e.preventDefault();
		const isLogin = $('#input-check-login input').attr('data-islogin');
		if (isLogin == "True") {
			var comment_ID = $(this).parents(".box-reply").siblings(".main-comment[comment-id]").attr("comment-id");
			var replyContent = $(this).siblings("input[name='content-comment']").val();
			$.ajax({
				type: "post",
				url: "/phan-hoi",
				data: {
					Id: comment_ID,
					Content: replyContent,
				},
				success: function (res) {
					if (res.Code == 200) {
						location.reload();
					} else {
						alert(res.Message);
					}
				},
			});
		} else {
			$.fancybox.open({
				src: '#login',
				opts: {
					afterShow: function (instance, current) { }
				}
			});
		}
	});
}

// AJAX LIKE
function AjaxLike() {
	$("body").on("click", ".button-like-comment", function (e) {
		e.preventDefault();
		const isLogin = $('#input-check-login input').attr('data-islogin');
		if (isLogin == "True") {
			var likeInfo = {};
			likeInfo.Id = $(this)
				.parents(".main-comment[comment-id]")
				.attr("comment-id");
			if (
				$(this).attr("data-like") == "" ||
				$(this).attr("data-like") == "false"
			) {
				likeComment = true;
			} else {
				likeComment = false;
			}
			$(this).attr("data-like", likeInfo.likeComment);
			$.ajax({
				type: "post",
				url: "/thich",
				data: likeInfo,
				success: function (res) {
					if (res.Code == 200) {
						$(this).find("span").html(res.Message);
					} else {
						alert(res.Message);
					}
				},
			});
		} else {
			$.fancybox.open({
				src: '#login',
				opts: {
					afterShow: function (instance, current) { }
				}
			});
		}
	});
}

function AjaxDeteleComment() {
	$("body").on("click", ".button-delete-comment", function (e) {
		e.preventDefault();
		const isLogin = $('#input-check-login input').attr('data-islogin');
		if (isLogin == "True") {
			var deleteInfo = {};
			deleteInfo.Id = $(this)
				.parents(".main-comment[comment-id]")
				.attr("comment-id");
			var _thisCommentDelete = $(this);
			$.ajax({
				type: "get",
				url: "/xoa-binhluan",
				data: deleteInfo,
				success: function (res) {
					if (res.Code == 200) {
						_thisCommentDelete.find("span").html(res.Message).addClass("deleted");
					} else {
						alert(res.Message);
					}
				},
			});
		} else {
			$.fancybox.open({
				src: '#login',
				opts: {
					afterShow: function (instance, current) { }
				}
			});
		}
	});
}

const getPropertyId = () => {
	let propertyId = $(
		".product-summary .color-item .list-color span.active"
	).attr("data-propertyId");
	$(".product-summary .add-cart").attr("data-propertyId", propertyId);
	$(".product-summary .color-item .list-color span").on("click", function () {
		$(this).siblings("span").removeClass("active");
		$(this).addClass("active");
		let currentPropertyId = $(this).attr("data-propertyId");
		$(".product-summary .add-cart").attr("data-propertyId", currentPropertyId);
	});
};

const aboutNavSelect = () => {
	const select = document.querySelector(".about-nav select");
	if (select) {
		select.addEventListener("change", (e) => {
			document
				.querySelector(
					`[toggle-
				for = $ {
					e.srcElement.value
				}
			]
			`
				)
				.click();
		});
	}
};

const calculatePriceWithShippingFee = () => {
	const shippingMethodHandler = (input) => {
		const currentShippingFee = Number(
			input.parentNode
				.querySelector("label [data-shipping-fee]")
				.getAttribute("data-shipping-fee")
		);
		const tempPrice = Number(
			document
				.querySelector("[data-temp-price]")
				.getAttribute("data-temp-price")
		);
		document
			.querySelector("[data-shipping]")
			.setAttribute("data-shipping", currentShippingFee);
		document.querySelector("[data-shipping]").innerHTML =
			currentShippingFee.toLocaleString() + " đ";
		document
			.querySelector("[total-price]")
			.setAttribute("total-price", tempPrice + currentShippingFee);
		document.querySelector("[total-price]").innerHTML =
			(tempPrice + currentShippingFee).toLocaleString() + " đ";
	};
	Array.from(document.querySelectorAll("[name=shippingselectedvalue]")).forEach(
		(input) => {
			if (input.checked) {
				shippingMethodHandler(input);
			}
			input.addEventListener("change", () => {
				shippingMethodHandler(input);
			});
		}
	);
};

const getUserName = () => {
	let userFullName = $(".top-header .account-item a[href] span").html();
	let userFullNameWidth = $(".top-header .account-item a[href] span").width();
	if (userFullName && userFullNameWidth > 75) {
		userFullName = userFullName.split(" ");
		let setUserName =
			userFullName[userFullName.length - 2] +
			" " +
			userFullName[userFullName.length - 1];
		$(".top-header .account-item a[href] span").html(setUserName);
	}
};

const ajaxForgotPassword = () => {
	// Get information to get verify code
<<<<<<< HEAD
	$("body").on("click", "#forgot-password .form-button button", function (e) {
		let informationToGetPassword = $(
			"#forgot-password .form-group input"
		).val();
=======
	$("#forgot-password .form-button button").on("click", function(e) {
		e.preventDefault();
		const informationToGetPassword = new FormData();
		const name = $("#forgot-password .form-group input").attr("name");
		const value = $("#forgot-password .form-group input").val();
		informationToGetPassword.append(name, value)
>>>>>>> a015f8e345e462e2fb8b7d2a320d867098b3479a
		let urlGetVerifyCode = $("#forgot-password .form-button button").attr(
			"data-action"
		);
		let fancyboxSourceVerify = $("#forgot-password .form-button button").attr(
			"data-src"
		);
<<<<<<< HEAD
		e.preventDefault();
		$.ajax({
			url: urlGetVerifyCode,
			type: "post",
			data: {
				username: informationToGetPassword,
			},
			success: function (res) {
				if (res.Code === 200) {
					$.fancybox.open({
						src: fancyboxSourceVerify,
						type: "inline",
						opts: {
							closeExisting: true,
							hash: false,
							beforeShow: function () {
								$("#verify .popup-wrapper>p").html(res.Message);
							},
						},
					});
				} else {
					alert(res.Message);
				}
			},
			error: function (err) {
				alert(err.status);
			},
		});
	});
	// get verify code to reset password
	$("body").on("click", "#verify .form-button button", function (e) {
		let verifyCode = $("#verify .form-group input").val();
=======
		if($("#forgot-password form").valid() == true) {
			$.ajax({
				url: urlGetVerifyCode,
				type: "post",
				data: informationToGetPassword,
				processData: false,
				contentType: false,
				success: function(res) {
					$("#forgot-password .form-button button").prop('disabled', false);
					if (res.Code === 200) {
						$.fancybox.open({
							src: fancyboxSourceVerify,
							type: "inline",
							opts: {
								closeExisting: true,
								hash: false,
								beforeShow: function() {
									$("#verify .popup-wrapper>p").html(res.Message);
								},
							},
						});
					} else {
						document.querySelector('#noti-login .text_noti').innerHTML = res.Message;
							$.fancybox.open({
								src: '#noti-login',
								type: 'inline',
								opts: {
									afterShow: function (instance, current) {
										setTimeout(() => {
											$.fancybox.close();
											if (res.Code == 200) {
												window.location.reload();
											}
										}, 1500);
									}
								}
							});
					}
				},
				beforeSend: () => {
					$("#forgot-password .form-button button").prop('disabled', true);
				},
				complete: () => {
					$("#verify .form-button button").prop('disabled', false);

				},
				error: function(err) {
					$("#forgot-password .form-button button").prop('disabled', false);

					alert(err.status);
				},
			});
		}
	});
	// get verify code to reset password
	$("#verify .form-button button").on("click", function(e) {
		e.preventDefault();
		let verifyCode = new FormData();
		const name =  $("#verify .form-group input").attr("name");
		const value =  $("#verify .form-group input").val();
		verifyCode.append(name , value)
>>>>>>> a015f8e345e462e2fb8b7d2a320d867098b3479a
		let urlChangePassword = $("#verify .form-button button").attr(
			"data-action"
		);
		let fancyboxSourceResetPassword = $("#verify .form-button button").attr(
			"data-src"
		);
		if($("#verify form").valid() == true) {
			$.ajax({
				url: urlChangePassword,
				type: "post",
				data: verifyCode,
				processData: false,
				contentType: false,
				success: function(res) {
					$("#verify .form-button button").prop('disabled', false);
					if (res.Code === 200) {
						$.fancybox.open({
							src: fancyboxSourceResetPassword,
							type: "inline",
							opts: {
								closeExisting: true,
								hash: false,
								beforeShow: function() {
									$("#reset-password .popup-wrapper>p").html(res.Message);
								},
							},
						});
					} else {
						document.querySelector('#noti-login .text_noti').innerHTML = res.Message;
							$.fancybox.open({
								src: '#noti-login',
								type: 'inline',
								opts: {
									afterShow: function (instance, current) {
										setTimeout(() => {
											$.fancybox.close();
											if (res.Code == 200) {
												window.location.reload();
											}
										}, 1500);
									}
								}
							});
					}
				},
				beforeSend: () => {
					$("#verify .form-button button").prop('disabled', true);
				},
				complete: () => {
					$("#verify .form-button button").prop('disabled', false);
				},
				error: function(err) {
					$("#verify .form-button button").prop('disabled', false);
					alert(err.status);
				},
			});
		}
	});
	// change pasword
	// Get information to get verify code
	$("#reset-password .form-button button").on("click", function(e) {
		e.preventDefault();
<<<<<<< HEAD
		$.ajax({
			url: urlChangePassword,
			type: "post",
			data: {
				code: verifyCode,
			},
			success: function (res) {
				if (res.Code === 200) {
=======
		const passwordChange = new FormData();
		$("#reset-password .form-group input").each(function () {
			const name = $(this).attr("name");
			const value = $(this).val();
			passwordChange.append(name, value);
		});
		let urlGetVerifyCode = $("#reset-password .form-button button").attr(
			"data-action"
		);
	
		if($("#reset-password form").valid() == true) {
			$.ajax({
				url: urlGetVerifyCode,
				type: "post",
				data: passwordChange,
				processData: false,
				contentType: false,
				success: function(res) {
					$("#verify .form-button button").prop('disabled', false);
					document.querySelector('#noti-login .text_noti').innerHTML = res.Message;
>>>>>>> a015f8e345e462e2fb8b7d2a320d867098b3479a
					$.fancybox.open({
						src: '#noti-login',
						type: 'inline',
						opts: {
<<<<<<< HEAD
							closeExisting: true,
							hash: false,
							beforeShow: function () {
								$("#reset-password .popup-wrapper>p").html(res.Message);
							},
						},
					});
				} else {
					alert(res.Message);
				}
			},
			error: function (err) {
				alert(err.status);
			},
		});
=======
							afterShow: function (instance, current) {
								setTimeout(() => {
									$.fancybox.close();
									if (res.Code == 200) {
										window.location.reload();
									}
								}, 1500);
							}
						}
					});
				},
				beforeSend: () => {
					$("#reset-password .form-button button").prop('disabled', true);
				},
				complete: () => {
					$("#verify .form-button button").prop('disabled', false);
				},
				error: function(err) {
					$("#reset-password .form-button button").prop('disabled', false);
					alert(err.status);
				},
			});
		}
>>>>>>> a015f8e345e462e2fb8b7d2a320d867098b3479a
	});
};

const verifyAddressInCheckoutStep = () => {
	Array.from(
		document.querySelectorAll(".address-item .js-btn-verify-address")
	).forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			const addressItem = btn.closest(".address-item");
			const name = addressItem
				.querySelector("[data-name]")
				.getAttribute("data-name");
			const address = addressItem
				.querySelector("[data-address]")
				.getAttribute("data-address");
			const phone = addressItem
				.querySelector("[data-phone]")
				.getAttribute("data-phone");
			const city = addressItem
				.querySelector("[data-city]")
				.getAttribute("data-city");
			const district = addressItem
				.querySelector("[data-district]")
				.getAttribute("data-district");
			const addressForm = document.querySelector(".add-new-address-form");
			addressForm.querySelector("#fullname").value = name;
			addressForm.querySelector("#phone").value = phone;
			addressForm.querySelector("#address").value = address;
			addressForm.querySelector(
				"#ShippingCitySelectedValue"
			).innerHTML = ` < option value = $ {
				city
			} > $ {
				addressItem.querySelector('[data-city]').innerHTML
			} < /option>`;
			addressForm.querySelector(
				"#ShippingDistrictSelectedValue"
			).innerHTML = `<option value=${district}>${
				addressItem.querySelector("[data-district]").innerHTML
				}</option>`;
			addressForm.querySelector("form").submit();
		});
	});
};

const editAddressInCheckoutStep = () => {
	Array.from(
		document.querySelectorAll(".address-item .js-btn-edit-address")
	).forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			const addressItem = btn.closest(".address-item");
			const name = addressItem
				.querySelector("[data-name]")
				.getAttribute("data-name");
			const address = addressItem
				.querySelector("[data-address]")
				.getAttribute("data-address");
			const phone = addressItem
				.querySelector("[data-phone]")
				.getAttribute("data-phone");
			const city = addressItem
				.querySelector("[data-city]")
				.getAttribute("data-city");
			const district = addressItem
				.querySelector("[data-district]")
				.getAttribute("data-district");
			const addressForm = document.querySelector(".add-new-address-form");
			addressForm.querySelector("#fullname").value = name;
			addressForm.querySelector("#phone").value = phone;
			addressForm.querySelector("#address").value = address;
			addressForm.querySelector("#ShippingCitySelectedValue").value = city;
			addressForm.querySelector(
				"#ShippingDistrictSelectedValue"
			).value = district;
			$(".add-new-address-form").slideDown();
		});
	});
};

const toggleAddNewsAddressItem = () => {
	$(".add-news-address").on("click", function () {
		$(".add-new-address-form").slideToggle();
	});
};

const ajaxDeleteBill = () => {
	$("#cancel-bill button").on("click", function (e) {
		e.preventDefault();
		const deleteBill = new FormData();
		deleteBill.append("billid", $("#bill-id").val());
		const urlRequest = $(this).attr("data-href");
		$.ajax({
			url: urlRequest,
			data: deleteBill,
			method: "post",
			processData: false,
			contentType: false,
			success: function (res) {
				if (res.Code === 200) {
					setTimeout(() => {
						window.location.reload();
					}, 3000);
				} else {
					alert(res.Message);
				}
			},
		});
	});
};

const setHeightItemImgBox = () => {
	$(".item-list-pro").each(function () {
		$(this).find(".box-img").height($(this).find(".box-img").width());
	});
};

const shareSocial = () => {
	function amperoctoplus(s) {
		s = s.replace(/&/g, "%26");
		s = s.replace(/#/g, "%23");
		s = s.replace(/\+/g, "%2B");
		s = s.replace(/@/g, "%40");
		s = s.replace(/:/g, "%3A");
		return s;
	}

	let currentHREF = amperoctoplus(encodeURI(window.location.href));
	if (document.querySelector(".social-facebook a")) {
		document
			.querySelector(".social-facebook a")
			.setAttribute(
				"href",
				`https://www.facebook.com/sharer/sharer.php?u=${currentHREF}`
			);
	}
	if (document.querySelector(".social-twitter a")) {
		document
			.querySelector(".social-twitter a")
			.setAttribute(
				"href",
				`https://twitter.com/intent/tweet?text=${currentHREF}`
			);
	}
	if (document.querySelector(".social-pinterest a")) {
		document
			.querySelector(".social-pinterest a")
			.setAttribute(
				"href",
				`https://pinterest.com/pin/create/button/?url=${currentHREF}&media=&description=`
			);
	}
	if (document.querySelector(".social-linkedin a")) {
		document
			.querySelector(".social-linkedin a")
			.setAttribute(
				"href",
				`https://www.linkedin.com/shareArticle?mini=true&url=${currentHREF}&title=&summary=&source=`
			);
	}
};

const setPhoneNumberFixed = () => {
	const numberPhoneFooter = Array.from(
		document.querySelectorAll(".info-company ul li")
	);
	const phoneNumber = numberPhoneFooter[3]
		.querySelector("a")
		.getAttribute("href");
	document.querySelector("#phone-call a").setAttribute("href", phoneNumber);
};

const sliderAboutGiaiPhapChiTiet = () => {
	return new Swiper(".about-5--2-slider .swiper-container", {
		slidesPerView: 3,
		speed: 900,
		spaceBetween: 30,
		navigation: {
			nextEl: ".about-5--2-slider .swiper-button-next",
			prevEl: ".about-5--2-slider .swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
	});
};

const about2slider = () => {
	return new Swiper(".about-1--4 .clients-slider .swiper-container", {
		slidesPerView: 4,
		loop: true,
		speed: 1200,
		autoplay: true,
		breakpoints: {
			768: {
				slidesPerView: 4,
			},
			576: {
				slidesPerView: 3,
			},
		},
		pagination: {
			el: ".about-1--4 .clients-slider .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".about-1--4 .clients-slider .swiper-button-next",
			prevEl: ".about-1--4 .clients-slider .swiper-button-prev",
		},
	});
};

const aboutNavAjax = () => {
	const currentPathnameAfterReload = window.location.pathname;
	$(".about-nav nav a").each(function () {
		const navPathname = $(this).attr("href");

		if (currentPathnameAfterReload.indexOf(navPathname) >= 0) {
			$(this).addClass("active");
			$(".about-nav nav a").not(this).removeClass("active");
		}

		if ($(".about-5--2").length > 0) {
			$(".about-nav nav a").each(function () {
				if ($(this).attr("href").indexOf("/giai-phap") >= 0) {
					$(this).addClass("active");
					$(".about-nav nav a").not(this).removeClass("active");
				}
			});
		}
		$(this).on("click", (e) => {
			e.preventDefault();
			const url = $(this).attr("href");
			$(this).addClass("active");
			$(".about-nav nav a").not(this).removeClass("active");
			$.ajax({
				url: url,
				type: "get",
				success: function (res) {
					if (url.indexOf("du-an") >= 0) {
						$(".about-ajax").html(
							`<div class="container"><div class="row row-custom about-project"><div class="col-lg-11 col-xl-10">${$(
								res
							)
								.find(".project-list .container")
								.html()}</div></div></div>`
						);
						$(".about-project .description").removeClass("d-none");
						$(".about-project .row").eq(0).addClass("row-custom");
						$(".about-project .col-lg-4").each(function () {
							$(this).addClass("col-6 col-md-4 about-4--item--col");
							$(this).removeClass("col-lg-4");
						});
						const fullUrl = `${window.location.origin}${url}`;
						window.history.pushState({}, "", fullUrl);
					} else {
						$(".about-ajax").html($(res).find(".about-ajax").html());
						const fullUrl = `${window.location.origin}${url}`;
						if ($(".about-ajax").find(".about-1--4 .clients-slider")) {
							about2slider();
						}
						window.history.pushState({}, "", fullUrl);
					}
				},
			});
		});
	});
};

const aboutProjectPaginationAjax = () => {
	$("body").on("click", ".about-ajax .pagination li a", function (e) {
		e.preventDefault();
		const url = $(this).attr("href");
		$.ajax({
			url: url,
			type: "get",
			success: function (res) {
				if (url.indexOf("du-an") >= 0) {
					$(".about-ajax").html(
						`<div class="container"><div class="row about-project"><div class="col-lg-11 col-xl-10">${$(
							res
						)
							.find(".project-list .container")
							.html()}</div></div></div>`
					);
					$(".about-project .description").removeClass("d-none");
					$(".about-project .row").eq(0).addClass("row-custom");
					$(".about-project .col-lg-4").each(function () {
						$(this).addClass("col-6 col-md-4 about-4--item--col");
						$(this).removeClass("col-lg-4");
					});
					const fullUrl = `${window.location.origin}${url}`;
					window.history.pushState({}, "", fullUrl);
				} else {
					$(".about-ajax").html($(res).find(".about-ajax").html());
					const fullUrl = `${window.location.origin}${url}`;
					if ($(".about-ajax").find(".about-1--4 .clients-slider")) {
						about2slider();
					}
					window.history.pushState({}, "", fullUrl);
				}
			},
		});
	});
};

const breadcrumbDelete = () => {
	if ($(".about-5--2").length > 0) {
		$(".about-ajax .breadcrumb-wrapper .container").html(
			`<div class="row row-breadcrumb"><div class="col-lg-11 col-xl-10">${$(
				".about-ajax .breadcrumb-wrapper .container"
			).html()}</div></div>`
		);
		$(".about-ajax .breadcrumb-wrapper li").eq(0).remove();
		$(".about-ajax .breadcrumb-wrapper li").eq(0).remove();
	}
};

// Credit từ David Walsh: https://davidwalsh.name/javascript-debounce-function

// debounce sẽ return fn và fn sẽ không chạy cho đến khi debounce không được thực thi
// trong khoản thời gian delay. Nếu immediate là true, thì fn sẽ được thực thi ngay lặp tức
// rồi mới được debounced cho những lần tiếp theo.
function debounce(fn, delay, immediate) {
	let timeout;

	// Đây là function sẽ được thực thi khi debouncedKeyUp được thực thi ở ví dụ trên
	return function executedFn() {
		// Mình save lại this vào biến context
		let context = this; // "this" context của executedFn

		// Save lại arguments vào args. Trong JS, arguments giữ giá trị của tất cả tham số được truyền vào cho một function.
		// Cho dù bạn không khai báo tham số cho một hàm, thì khi truyền tham số vào cho hàm đó, các bạn vẫn có thể truy xuất
		// đến các tham số bằng biến arguments này. Theo ví dụ trên, thì arguments ở đây sẽ chứa "event" 
		let args = arguments; // "arguments" của fn

		// Function later này sẽ được gọi sau khi delay được chạy xong. 
		// Nghĩa là mình return executedFn, khi executedFn được thực thi thì sau khoản delay, later sẽ được thực thi.
		let later = function () {
			// Gán null cho timeout => cho thấy delay đã chạy xong
			timeout = null;

			// Gọi hàm fn với apply
			if (!immediate) fn.apply(context, args);
		};

		// Xác định xem nên gọi fn dựa vào tham số immediate
		let callNow = immediate && !timeout;

		// Dòng clearTimeout sẽ reset timeout đang hiện hữu (**existed**). Đây là điều cần thiết, 
		// vì mình cần hủy timeout và tạo 1 timeout mới nếu như debounce được thực thi khi 
		// delay chưa chạy xong.
		clearTimeout(timeout);

		// Khởi tạo (lại) timeout mới và gán vào biến timeout để có thể clear/check.
		timeout = setTimeout(later, delay);

		// Nếu như immediate là true, thì mình sẽ gọi fn lần đầu tiên ở đây.
		if (callNow) fn.apply(context, args);
	}
}

const ajaxSearch = () => {
	let Url;
	let Image;
	let Alt;
	let Title;
	let Price;
	// GIÁ GIẢM
	let IsPromotion;
	let PromotionPrice;
	let PromotionPrice__ToChangePrice;
	// GIÁ ĐANG CẬP NHẬT
	let IsPriceUpdating;
	let PriceUpdatingDesc = 'Giá đang cập nhật';
	// GIÁ LIÊN HỆ
	let IsPriceContact;
	let PriceContactDesc = 'Giá bán: liên hệ';
	// funtion get data Ajax on KeyUp
	const input__search = document.querySelector('.top-header .search input');
	const url = document.querySelector('.top-header .search .fs-sresult').getAttribute('data-url');
	const list__itemResult = document.querySelector('.fs-sresult .fs-sremain ul');
	const formatCurrency = new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
		minimumFractionDigits: 0,
	});
	const keyUpHandler = e => {
		// do something with event
		list__itemResult.innerHTML = '';
		$.ajax({
			type: "GET",
			data: {
				text: input__search.value
			},
			url: url,
			success: function (res) {
				if (res.Code == 200) {
					for (let i = 0; i < res.Result.length; i++) {
						Url = res.Result[i].Url;
						Price = formatCurrency.format(res.Result[i].Price);
						Image = res.Result[i].Image;
						Alt = res.Result[i].Alt;
						Title = res.Result[i].Title;
						IsPromotion = res.Result[i].IsPromotion;
						PromotionPrice = formatCurrency.format(res.Result[i].PromotionPrice);
						IsPriceUpdating = res.Result[i].IsPriceUpdating;
						IsPriceContact = res.Result[i].IsPriceContact;
						// MỘT SỐ TRƯỜNG HỢP VỀ GIÁ
						if (IsPriceUpdating == true) {
							Price = PriceUpdatingDesc;
						} else if (IsPriceContact == true) {
							Price = PriceContactDesc;
						}
						const template__result =
							`<li class="item-result">
								<a href="${Url}">
									<div class="img ov-h">
										<img class="ofcv" src="${Image}" alt="${Alt}">
									</div>
									<div class="info-item">
										<h3>${Title}</h3>
										<p class="anhduyen-search-prodprice">${Price}</p>
									</div>
								</a>
							</li>`;
						const template__result_IsPromotion =
							`<li class="item-result">
								<a href="${Url}">
									<div class="img ov-h">
										<img class="ofcv" src="${Image}" alt="${Alt}">
									</div>
									<div class="info-item">
										<h3>${Title}</h3>
										<p class="anhduyen-search-prodprice">${PromotionPrice}</p>
										<p class="anhduyen-search-prodprice price-sub">
											<del>${Price}</del>
										</p>
									</div>
								</a>
							</li>`;

						if (IsPromotion == true) {
							$(list__itemResult).append(template__result_IsPromotion);
						} else {
							// XUẤT RA MÀN HÌNH KẾT QUẢ 
							$(list__itemResult).append(template__result);
						}
					}
				} else {
					console.log('Đã có lỗi xảy ra => Res.Code = 400');
				}
			}
		});
	};
	const debouncedKeyUp = debounce(keyUpHandler, 1000);
	input__search.addEventListener('keyup', debouncedKeyUp)
}

breadcrumbDelete();

$(document).ready(function () {
	setHeightItemImgBox();
	objectFitImages("img.ofc"); // Luôn luôn chậy polyfill cho thuôc tính object-fit: cover trên các phiên bản IE >= 9
	addClassLazyload(); // Luôn luôn addClass lazyload cho các hình ảnh có thuộc tính [data-src]
	addClassHeaderWhenScroll();
	moveAccount();
	mobileMenu();
	// aboutNavSelect();
	calculatePriceWithShippingFee();
	findManufactures();
	homeSliderBanner();
	productSlider();
	brandSlider();
	clientSlider();
	submenuCategory();
	imgProductSlider();
	about2slider();
	clickRating();
	showRating();
	chooesColor();
	sliderTheSameProduct();
	toggleFormAddNewAddress();
	getUserName();
	// Ajax
	ajaxSearch();
	AjaxComment();
	AjaxReply();
	AjaxLike();
	AjaxDeteleComment();
	ajaxForgotPassword();
	aboutNavAjax();
	aboutProjectPaginationAjax();
	//
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
	countDownSale();
	introduceSliderBanner();
	megaMenuHover();
	turnOffPopupWhenClicked();
	getPropertyId();
	getProductQuantity();
	verifyAddressInCheckoutStep();
	editAddressInCheckoutStep();
	toggleAddNewsAddressItem();
	ajaxDeleteBill();
	shareSocial();
	setPhoneNumberFixed();
	sliderAboutGiaiPhapChiTiet();
	cartQuantity();
});

$(document).ajaxComplete(function () {
	addClassLazyload();
});

window.addEventListener("scroll", () => {
	addClassHeaderWhenScroll();
});

window.addEventListener("resize", () => {
	setHeightItemImgBox();
});