'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/taxReturns', {
        templateUrl: 'views/taxreturns.html',
        controller: 'TaxreturnsCtrl'
      })
      .when('/fileTransfer', {
        templateUrl: 'views/filetransfer.html',
        controller: 'FiletransferCtrl'
      })
      .when('/notifications', {
        templateUrl: 'views/notifications.html',
        controller: 'NotificationsCtrl'
      })
      .when('/forms', {
        templateUrl: 'views/forms.html',
        controller: 'FormsCtrl'
      })
      .when('/billing', {
        templateUrl: 'views/billing.html',
        controller: 'BillingCtrl'
      })
      .when('/cpaClients', {
        templateUrl: 'views/cpaclients.html',
        controller: 'CpaclientsCtrl'
      })
      .when('/cpaBilling', {
        templateUrl: 'views/cpabilling.html',
        controller: 'CpabillingCtrl'
      })
      .when('/cpaNotifications', {
        templateUrl: 'views/cpanotifications.html',
        controller: 'CpanotificationsCtrl'
      })
      .when('/adminCustomers', {
        templateUrl: 'views/admincustomers.html',
        controller: 'AdmincustomersCtrl'
      })
      .when('/adminNotifications', {
        templateUrl: 'views/adminnotifications.html',
        controller: 'AdminnotificationsCtrl'
      })
      .when('/adminBilling', {
        templateUrl: 'views/adminbilling.html',
        controller: 'AdminbillingCtrl'
      })
      .when('/contactUs', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactusCtrl'
      })
      .when('/cpaHome', {
        templateUrl: 'views/cpahome.html',
        controller: 'CpahomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
