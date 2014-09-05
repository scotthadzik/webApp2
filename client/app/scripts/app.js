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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/Tax', {
        templateUrl: 'views/tax.html',
        controller: 'TaxCtrl'
      })
      .when('/TaxReturns', {
        templateUrl: 'views/taxreturns.html',
        controller: 'TaxreturnsCtrl'
      })
      .when('/fileTransfer', {
        templateUrl: 'views/filetransfer.html',
        controller: 'FiletransferCtrl'
      })
      .when('/Notifications', {
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
      .when('/clients', {
        templateUrl: 'views/clients.html',
        controller: 'ClientsCtrl'
      })
      .when('/CPABilling', {
        templateUrl: 'views/cpabilling.html',
        controller: 'CpabillingCtrl'
      })
      .when('/CPANotifications', {
        templateUrl: 'views/cpanotifications.html',
        controller: 'CpanotificationsCtrl'
      })
      .when('/CPAClients', {
        templateUrl: 'views/cpaclients.html',
        controller: 'CpaclientsCtrl'
      })
      .when('/AdminCustomers', {
        templateUrl: 'views/admincustomers.html',
        controller: 'AdmincustomersCtrl'
      })
      .when('/AdminNotifications', {
        templateUrl: 'views/adminnotifications.html',
        controller: 'AdminnotificationsCtrl'
      })
      .when('/AdminBilling', {
        templateUrl: 'views/adminbilling.html',
        controller: 'AdminbillingCtrl'
      })
      .when('/Contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
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
