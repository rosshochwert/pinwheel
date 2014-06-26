var homeApp = angular.module('homeApp', ['HomeModel', 'ionic', 'google-maps']);

homeApp.controller("IndexCtrl", function($scope) {

	//google.maps.event.addDomListener(window, 'load', initialize);

	function initialize() {
		var mapOptions = {
			center: new google.maps.LatLng(-34.397, 150.644),
			zoom: 8
		};
		var map = new google.maps.Map(document.getElementById("map-canvas"),
			mapOptions);
	}

	$scope.map = {
		center: {
			latitude: 45,
			longitude: -73
		},
		options: {
			disableDefaultUI: true,
		},
		markers: [{
			id: 1,
			latitude: 45,
			longitude: -74,
			showWindow: false,
			title: 'Marker 2'
		}, {
			id: 2,
			latitude: 15,
			longitude: 30,
			showWindow: false,
			title: 'Marker 2'
		}, {
			id: 3,
			icon: 'assets/images/plane.png',
			latitude: 37,
			longitude: -122,
			showWindow: false,
			title: 'Plane'
		}],
		markers2: [{
			id: 1,
			icon: 'assets/images/blue_marker.png',
			latitude: 46,
			longitude: -77,
			showWindow: false,
			title: '[46,-77]'
		}, {
			id: 2,
			icon: 'assets/images/blue_marker.png',
			latitude: 33,
			longitude: -77,
			showWindow: false,
			title: '[33,-77]'
		}, {
			id: 3,
			icon: 'assets/images/blue_marker.png',
			latitude: 35,
			longitude: -125,
			showWindow: false,
			title: '[35,-125]'
		}],
		draggable: "true",
		dragging: false,
		zoom: 8
	};

	steroids.view.navigationBar.show("");

	var drawerView = new steroids.views.WebView({
		location: "/views/home/drawer.html",
		id: "drawerView"
	});

	var individualEventView = new steroids.views.WebView({
		location: "/views/event/individualEvent.html",
		id: "individualEventView"
	});

	var createEventView = new steroids.views.WebView({
		location: "/views/event/create.html",
		id: "createEventView"
	});

	var imageButton = new steroids.buttons.NavigationBarButton();
	imageButton.imagePath = "/icons/settings@2x.png";
	imageButton.onTap = function() {
		openDrawer();
	};

	var createButton = new steroids.buttons.NavigationBarButton();
	createButton.imagePath = "/icons/plus@2x.png";
	createButton.onTap = function() {
		createEvent();
	};

	var createEvent = function() {
		steroids.modal.show({
			view: createEventView,
			keepLoading: false,
			navigationBar: true,
			disableAnimation: false
		}, {
			onSuccess: function() {

			},
			onFailure: function(error) {
				alert("Could not present the modal: " + error.errorDescription + " Sorry try again later. ");
			}

		});
	};

	$scope.pushEvent = function() {
		steroids.layers.push(individualEventView);
	};


	var openDrawer = function() {
		steroids.drawers.show({
			view: drawerView
		});
	};

	steroids.view.navigationBar.update({
		title: "Home",
		buttons: {
			left: [imageButton],
			right: [createButton]
		}
	}, {
		onSuccess: function() {

		},
		onFailure: function() {
			alert("Failed to update the navigation bar. This sucks");
		}
	});


});

homeApp.controller("DrawerCtrl", function($scope) {

});