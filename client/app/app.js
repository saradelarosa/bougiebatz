angular.module('legacyOwls', [
    'legacyOwls.auth',
    'legacyOwls.home',
    'legacyOwls.savedStory',
    'legacyOwls.factory',
    'ngRoute'
])

.config(function ($routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl: 'app/home/home.html',
          controller: 'home',
      })
      // .when('/latest', {
      //     templateUrl: 'app/latest/latest.html',
      //     controller: 'latest',
      //     access: {restricted: true}
      // })
      .when('/login', {
          templateUrl: 'app/auth/login.html',
          controller: 'loginController'
      })
      .when('/logout', {
          controller: 'logoutController',
          access: {restricted: true}
      })
      .when('/register', {
          templateUrl: 'app/auth/register.html',
          controller: 'registerController'
      })
      .otherwise({
          redirectTo: '/'
      });

})

.run(function ($rootScope, $location, $route, AuthService) {
    $rootScope.$on('$routeChangeStart',
        function (event, next, current) {
            AuthService.getUserStatus()
                .then(function () {
                    if (next.access.restricted && !AuthService.isLoggedIn()) {
                        $location.path('/login');
                        $route.reload();
                    }
                });
        });
});