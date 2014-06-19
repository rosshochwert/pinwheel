var introScreenApp = angular.module('introScreenApp', ['IntroScreenModel', 'ngTouch', 'ionic', 'transit']);

// Index: http://localhost/views/introScreen/index.html

introScreenApp.controller('IntroCtrl', function($scope, $location, IntroScreenRestangular) {
  $scope.move = false;

  $scope.pushHome = function() {

    homeView = new steroids.views.WebView({
      location: "/views/main/index.html",
      id: "homeView"
    });

    steroids.layers.replace({
      view: homeView,
    }, {
      onSuccess: function() {
          steroids.statusBar.show();
          steroids.view.navigationBar.show();
      },
      onFailure: function(error) {
        alert("Could not replace the layer stack: " + error.errorDescription);
      }
    });
  };

  $scope.pushLogin = function() {

    loginView = new steroids.views.WebView({
      location: "/views/introScreen/login.html",
      id: "loginView"
    });

    steroids.layers.replace(loginView);

  };

  // Called to navigate to the main app
  var startApp = function() {
    $location.path('/main');

    // Set a flag that we finished the tutorial
    window.localStorage['didTutorial'] = true;
  };

  // Check if the user already did the tutorial and skip it if so
  if (window.localStorage['didTutorial'] === "true") {
    startApp();
    return;
  }

});

// Helper function for opening new webviews
// $scope.open = function(id) {
//   webView = new steroids.views.WebView("/views/introScreen/show.html?id="+id);
//   steroids.layers.push(webView);
// };

// // Fetch all objects from the local JSON (see app/models/introScreen.js)
// IntroScreenRestangular.all('introScreen').getList().then( function(introScreens) {
//   $scope.introScreens = introScreens;
// });

// // Native navigation
// steroids.view.navigationBar.show("IntroScreen index");
// steroids.view.setBackgroundColor("#FFFFFF");

//});


// Show: http://localhost/views/introScreen/show.html?id=<id>
introScreenApp.controller('LoginCtrl', function($scope) {
  $scope.pushHome = function() {

    homeView = new steroids.views.WebView({
      location: "/views/main/index.html",
      id: "homeView"
    });

    steroids.layers.replace(homeView);

  };
});

introScreenApp.controller('ShowCtrl', function($scope, $filter, IntroScreenRestangular) {

  // Fetch all objects from the local JSON (see app/models/introScreen.js)
  IntroScreenRestangular.all('introScreen').getList().then(function(introScreens) {
    // Then select the one based on the view's id query parameter
    $scope.introScreen = $filter('filter')(introScreens, {
      id: steroids.view.params['id']
    })[0];
  });

  // Native navigation
  steroids.view.navigationBar.show("IntroScreen: " + steroids.view.params.id);
  steroids.view.setBackgroundColor("#FFFFFF");

});