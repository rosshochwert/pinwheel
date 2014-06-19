var eventsApp = angular.module('eventsApp', ['ngTouch', 'ionic']);

eventsApp.controller("CreateCtrl", function($scope) {

	var imageButton = new steroids.buttons.NavigationBarButton();
	imageButton.imagePath = "/icons/settings@2x.png";
	imageButton.onTap = function() {
		closeModal();
	};

	var createButton = new steroids.buttons.NavigationBarButton();
	createButton.textContent = "Create";
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