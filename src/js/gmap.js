var markers = [];
var mapOptions = {
	zoom: 12,
	center: new google.maps.LatLng(16.061979, 108.215886),
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	styles: [{
		"featureType": "all",
		"elementType": "labels.text.fill",
		"stylers": [{
			"saturation": 36
		}, {
			"color": "#000000"
		}, {
			"lightness": 40
		}]
	}, {
		"featureType": "all",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#000000"
		}, {
			"lightness": 16
		}]
	}, {
		"featureType": "all",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "administrative",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 20
		}]
	}, {
		"featureType": "administrative",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 17
		}, {
			"weight": 1.2
		}]
	}, {
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 20
		}]
	}, {
		"featureType": "landscape",
		"elementType": "labels.text",
		"stylers": [{
			"saturation": "-6"
		}, {
			"lightness": "12"
		}]
	}, {
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 21
		}]
	}, {
		"featureType": "road",
		"elementType": "labels.text.fill",
		"stylers": [{
			"saturation": "1"
		}, {
			"lightness": "-1"
		}, {
			"visibility": "on"
		}, {
			"color": "#ffffff"
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [{
			"saturation": "9"
		}, {
			"gamma": "0.93"
		}, {
			"visibility": "simplified"
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [{
			"lightness": 17
		}, {
			"visibility": "simplified"
		}, {
			"color": "#D82F25"
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 29
		}, {
			"weight": 0.2
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [{
			"color": "#575757"
		}, {
			"lightness": 1
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 16
		}]
	}, {
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 19
		}]
	}, {
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [{
			"color": "#2B2B2B"
		}, {
			"lightness": 0
		}]
	}, {
		"featureType": "water",
		"elementType": "labels.text",
		"stylers": [{
			"color": "#ffffff"
		}]
	}]
}
var locations = inputLocations;
var listMarkerInViewPortHtml = "";

function getLocationInViewPort(map, markers, locations) {
	var bounds = map.getBounds();
	var markerInViewPort = [];

	Array.prototype.forEach.call(markers, (marker, index) => {
		if (bounds.contains(marker.getPosition()) === true) {
			markerInViewPort.push(locations[index])
		}
	})

	return markerInViewPort;
}

function initialize() {
	if (document.getElementById("map")) {

		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		var infowindow = new google.maps.InfoWindow();
		var bounds = new google.maps.LatLngBounds();
		var listMarkerInViewPort
		var marker;

		var myoverlay = new google.maps.OverlayView();
		myoverlay.draw = function() {
			this.getPanes().markerLayer.id = 'markerLayer';
		};
		myoverlay.setMap(map);

		google.maps.event.addListener(map, 'click', function() {
			infowindow.close();
		});

		Array.prototype.forEach.call(locations, (locationElement, index) => {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(locationElement.lat, locationElement.lng),
				map: map,
				animation: google.maps.Animation.DROP,
				icon: locationElement.icon,
			});

			bounds.extend(marker.position);

			google.maps.event.addListener(marker, "click", ((marker, locationElement) => {
				return () => {
					map.setCenter(marker.getPosition());
					infowindow.setContent(
						`<div class="maker-info" style="width:100%">
						<h4>${locationElement.name}</h4>
						<p><b>Địa chỉ:</b> ${locationElement.address}</p>
						<p><b>Điện thoại:</b>  ${locationElement.phone}</p>
					</div>`
					);
					infowindow.open(map, marker);
				}
			})(marker, locationElement))

			listMarkerInViewPortHtml += `
				<div class="map-item" onclick="myClick(${index})">
					<h4>${locationElement.name}</h4>
					<p><b>Địa chỉ:</b> ${locationElement.address}</p>
					<p><b>Điện thoại:</b>  ${locationElement.phone}</p>
				</div>
			`;
			document.getElementById("map-list").innerHTML = listMarkerInViewPortHtml

			markers.push(marker);
		})

		if (document.getElementById("map-list")) {
			google.maps.event.addListener(map, "idle", function() {

				listMarkerInViewPortHtml = "";
				locations = getLocationInViewPort(map, markers, locations);

				console.log(locations);
				if (locations.length > 0) {
					Array.prototype.forEach.call(locations, (marker, index) => {
						console.log(marker);
						listMarkerInViewPortHtml += `
							<div class="map-item" onclick="myClick(${index})">
								<h4>${marker.name}</h4>
								<p><b>Địa chỉ:</b> ${marker.address}</p>
								<p><b>Điện thoại:</b>  ${marker.phone}</p>
							</div>
						`;
						document.getElementById("map-list").innerHTML = listMarkerInViewPortHtml
					})
				} else {
					listMarkerInViewPortHtml = "";
				}
			})
		}

		map.fitBounds(bounds);

		var listener = google.maps.event.addListener(map, "idle", function() {
			if (map.getZoom() > 12) {
				map.setZoom(12);
			}
			google.maps.event.removeListener(listener);
		});
	}
}

google.maps.event.addDomListener(window, 'load', initialize);

function myClick(id) {
	google.maps.event.trigger(markers[id], 'click');
	$("html,body").animate({
		scrollTop: $("#map").offset().top - 70
	}, 1200)
}