let map, itemClicked, locations, markers = [];
const mapSelector = document.getElementById('map');
const dealerLocatorList = document.querySelector('.map-list #map-list');
const mapOption = {
	zoom: 12,
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
};
const myoverlay = new google.maps.OverlayView();
const infoWindow = new google.maps.InfoWindow();

const addMarkers = () => {
	const bounds = new google.maps.LatLngBounds();
	locations.forEach((location, index) => {
		let locationLatLng = new google.maps.LatLng(location.lat, location.lng);
		let marker = new google.maps.Marker({
			map: map,
			title: location.name,
			position: locationLatLng,
			icon: './img/circle.png',
		});
		bounds.extend(marker.position);
		markers.push(marker);
		showInfoMarkerOnMap(marker, index);
	});

	map.fitBounds(bounds);
};

const showInfoMarkerOnMap = (marker, index) => {
	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.setContent(`
			<h3>${locations[index].name}</h3>
			<p>${locations[index].address}</p>
			<p>${locations[index].phone}</p>
		`);
		itemClicked = index;
		infoWindow.open(map, marker);
		map.panTo(marker.getPosition());
		map.setZoom(12);
	})
};

const getLocationList = () => {
	if (dealerLocatorList) {
		dealerLocatorList.innerHTML = '';
		console.log(markers, locations);
		markers.forEach((marker, index) => {
			if (map.getBounds().contains(marker.getPosition())) {
				const newMarker = document.createElement('div');
				newMarker.classList.add('map-item', 'maker-info');

				newMarker.innerHTML = `
				<h4>${locations[index].name}</h4>
				<p><b>Địa chỉ:</b> ${locations[index].address}</p>
				<p><b>Điện thoại:</b> ${locations[index].phone}</p>
			`;
				newMarker.setAttribute('marker-id', `${index}`);
				newMarker.addEventListener('click', () => {
					itemClicked = index;
					const markerIndex = newMarker.getAttribute('marker-id');
					google.maps.event.trigger(markers[markerIndex], 'click');
				});
				dealerLocatorList.appendChild(newMarker);
			}
		});
	}
};

const initialize = () => {
	markers = [];
	locations = inputLocations;
	map = new google.maps.Map(mapSelector, mapOption);
	addMarkers();
	let listener = google.maps.event.addListener(map, 'idle', () => {
		if (map.getZoom() > 12) {
			map.setZoom(12);
		}
		google.maps.event.removeListener(listener);
	});
	// myoverlay.draw = function() {
	// 	myoverlay.getPanes().markerLayer.id = 'markerLayer';
	// };
	// myoverlay.setMap(map);
	if (infoWindow) {
		google.maps.event.addListener(map, 'click', function() {
			infoWindow.close();
		});
	}
	google.maps.event.addListener(map, 'bounds_changed', getLocationList);
};

if (mapSelector) {
	google.maps.event.addDomListener(window, 'load', initialize);
}