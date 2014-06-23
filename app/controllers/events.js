var eventsApp = angular.module('eventsApp', ['ngTouch', 'ionic']);

eventsApp.controller("CreateCtrl", function($scope) {

	var imageButton = new steroids.buttons.NavigationBarButton();
	imageButton.imagePath = "/icons/cancel@2x.png";
	imageButton.onTap = function() {
		closeModal();
	};

	var createButton = new steroids.buttons.NavigationBarButton();
	createButton.title = "Create";
	createButton.onTap = function() {
		closeModal();
	};

	steroids.view.navigationBar.update({
		title: "Create Event",
		buttons: {
			left: [imageButton],
			right: [createButton]
		}
	}, {
		onSuccess: function() {

		},
		onFailure: function() {
			alert("Failed to update the navigation bar.");
		}
	});

	var closeModal = function() {
		steroids.modal.hide();
	};

});

eventsApp.controller("IndividualCtrl", function($scope) {
	steroids.view.navigationBar.update("XYZ Event");
});