angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.foundYourTabac', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/foundYourTabac.html',
        controller: 'foundYourTabacCtrl'
      }
    }
  })

  .state('tabsController.favoris', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/favoris.html',
        controller: 'favorisCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('mapsExample', {
    url: '/page5',
    templateUrl: 'templates/mapsExample.html',
    controller: 'mapsExampleCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')


});