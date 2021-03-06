'use strict';

var app = angular.module('app', [
   'ngRoute',
   'angular-storage',
   'controllersNavigation',
   'controllersAdmin',
   'controllersSite',
   'myServices'
]);

// =========== ADMIN PRODUCTS ===========

app.config([
   '$routeProvider',
   '$httpProvider',
   function($routeProvider, $httpProvider) {
      $routeProvider.when('/admin/products', {
         controller: 'products',
         templateUrl: 'partials/admin/products.html'
      });

      $routeProvider.when('/admin/product/edit/:id', {
         controller: 'productEdit',
         templateUrl: 'partials/admin/product-edit.html'
      });

      $routeProvider.when('/admin/product/create', {
         controller: 'productCreate',
         templateUrl: 'partials/admin/product-create.html'
      });

      // =========== ADMIN USERS ==============

      $routeProvider.when('/admin/users', {
         controller: 'users',
         templateUrl: 'partials/admin/users.html'
      });

      $routeProvider.when('/admin/user/edit/:id', {
         controller: 'userEdit',
         templateUrl: 'partials/admin/user-edit.html'
      });

      $routeProvider.when('/admin/user/create', {
         controller: 'userCreate',
         templateUrl: 'partials/admin/user-create.html'
      });

      // =========== ADMIN ORDERS ==============

      $routeProvider.when('/admin/orders', {
         controller: 'orders',
         templateUrl: 'partials/admin/orders.html'
      });

      // =========== SITE PRODUCTS ===========

      $routeProvider.when('/products', {
         controller: 'siteProducts',
         templateUrl: 'partials/site/products.html'
      });

      $routeProvider.when('/product/:id', {
         controller: 'siteProduct',
         templateUrl: 'partials/site/product.html'
      });

      // =========== SITE ORDERS ==============

      $routeProvider.when('/orders', {
         controller: 'siteOrders',
         templateUrl: 'partials/site/orders.html'
      });

      // =========== CART ===========

      $routeProvider.when('/cart', {
         controller: 'cartCtrl',
         templateUrl: 'partials/site/cart.html'
      });

      // =========== LOGIN & REGISTER ==============

      $routeProvider.when('/login', {
         controller: 'login',
         templateUrl: 'partials/site/login.html'
      });

      $routeProvider.when('/register', {
         controller: 'register',
         templateUrl: 'partials/site/register.html'
      });

      // ============ DEFAULT =============

      $routeProvider.otherwise({
         redirectTo: '/products'
      });
   }
]);
