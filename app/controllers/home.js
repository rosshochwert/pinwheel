var homeApp = angular.module('homeApp', ['HomeModel', 'ngTouch', 'ionic', 'google-maps']);

homeApp.controller("IndexCtrl", function($scope) {

	steroids.view.navigationBar.show("");
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

	$scope.map = {
		center: {
			latitude: 45,
			longitude: -73
		},
		options: {
          disableDefaultUI: true,
          panControl: false,
          navigationControl: false,
          scrollwheel: false,
          scaleControl: false
        },
		zoom: 8
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