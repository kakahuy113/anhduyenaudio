(function() {
	function id(v) {
		return document.getElementById(v)
	}
	function loadbar() {
		var ovrl = id("loading"),
			prog = id("progress"),
			stat = id("progstat"),
			img = document.images,
			c = 0,
			tot = img.length;
		if (0 == tot) return doneLoading();

		function imgLoaded() {
			var perc = 100 / tot * (c += 1) << 0;
			if (prog.style.width = perc, stat.innerHTML = perc, c === tot) return doneLoading()
		}

		function doneLoading() {
			ovrl.style.opacity = 0, setTimeout(function() {
				ovrl.style.display = "none"
			}, 15e2)
		}
		for (var i = 0; i < tot; i++) {
			var tImg = new Image;
			tImg.onload = imgLoaded, tImg.onerror = imgLoaded, tImg.src = img[i].src
		}
	}
	document.addEventListener("DOMContentLoaded", loadbar, !1)
})();