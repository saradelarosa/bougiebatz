var legacyOwls = angular.module('legacyOwls', [
    'legacyOwls.home',
    'legacyOwls.auth',
    'legacyOwls.savedStory',
    'legacyOwls.latest',
    'legacyOwls.factory',
    'legacyOwls.trending',
    'legacyOwls.comment',
    'ngRoute'
])

legacyOwls.config(function ($routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl: 'app/home/home.html',
          access: {restricted: true}
      })
      .when('/login', {
          templateUrl: 'app/auth/login.html',
          controller: 'loginController',
          access: {restricted: false}
      })
      .when('/logout', {
          controller: 'logoutController',
          access: {restricted: true}
      })
      .when('/register', {
          templateUrl: 'app/auth/register.html',
          controller: 'registerController',
          access: {restricted: false}
      })
       .when('/latest', {
           templateUrl: 'app/latest/latest.html',
           controller: 'latest',
           access: {restricted: true}
       })
       .when('/trending', {
           templateUrl: 'app/trending/trending.html',
           controller: 'trendingController',
           access: {restricted: true}
       })
       .when('/savedStory', {
           templateUrl: 'app/savedStory/savedStory.html',
           controller: 'savedStoryController',
           access: {restricted: true}
       }).when('/comment', {
          templateUrl: 'app/comment/comment.html',
          controller: 'commentBox',
          access: {restricted: true}
      })
      .otherwise({
          redirectTo: '/'
      });

});

legacyOwls.run(function ($rootScope, $location, $route, AuthService) {
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
