// get youtube ID from URL
const getYoutubeID = (selector) => {
	var url = document.getElementById(selector).getAttribute("data-url");
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	var match = url.match(regExp);

	if (match && match[7].length == 11) {
		return match[7];
	} else {
		return false;
	}
}
// end get youtube ID from URL

// Youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
	if(document.querySelectorAll("#video").length > 0)
	{
		// let id = getYoutubeID("video");
		player = new YT.Player('video', {
			height: '390',
			width: '640',
			videoId: '707bL_rFgyM',
			// videoId: id,
			playerVars: {
				// 'autoplay': 1,
				// controls: 0,
				// rel: 0,
				// fs: 0,
			},
			events: {
				'onReady': onPlayerReady,
				// 'onStateChange': onPlayerStateChange
			}
		});

	}
}

//Functions to stop-pause Video
function stopVideo() {
	player.stopVideo();
}

function pauseVideo() {
	player.pauseVideo();
}

function playVideo() {
	player.playVideo();
}

function onPlayerReady(event){
	console.log(event.target)
	playVideo();
}
// END youtube API