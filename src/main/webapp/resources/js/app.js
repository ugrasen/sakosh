var visionBharati = angular.module('visionBharati',['ngRoute','ngCookies', 'ngTouch', 'ngAnimate', 'ngSanitize', 'pageslide-directive',
                                                    'GlobalServices', 'fox.scrollReveal','duScroll','angular-flexslider', 'wecare', 'techres','exploreindia', 'angular-loading-bar']);


visionBharati.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoadingListener');
}])

visionBharati.service('LoadingListener', ['$q', '$rootScope', '$log', 
function ($q, $rootScope, $log) {
    'use strict';
 
    var xhrCreations = 0;
    var xhrResolutions = 0;
 
    function isLoading() {
        return xhrResolutions < xhrCreations;
    }
 
    function updateStatus() {
        $rootScope.loading = isLoading();
    }
 
    return {
        request: function (config) {
            xhrCreations++;
            updateStatus();
            return config;
        },
        requestError: function (rejection) {
            xhrResolutions++;
            updateStatus();
            $log.error('Request error:', rejection);
            return $q.reject(rejection);
        },
        response: function (response) {
            xhrResolutions++;
            updateStatus();
            return response;
        },
        responseError: function (rejection) {
            xhrResolutions++;
            updateStatus();
            $log.error('Response error:', rejection);
            return $q.reject(rejection);
        }
    };
}]);

visionBharati.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when("/",{
		templateUrl : "home.html",
		css: "home.css",
		header: "header.html",
	})
//	.when("/", {
//		templateUrl : "signin.html",
//	})
//	//Login
//	.when("/signin", {
//		templateUrl : "signin.html",
//	}).when('/notloggedin', {
//		templateUrl : 'notloggedin.html',
//	})
	.when("/home",{
		templateUrl : "home.html",
		css: "home.css",
		header: "header.html",
	})
   .when("/wecare",{
		templateUrl : "domains/wecare.html",
		css: "wecare.css",
		header: "domains/wecare_header.html",
	})
	.when("/helptalent",{
		templateUrl : "domains/helptalent.html",
		css: "helptalent.css",
		header: "domains/helptalent_header.html",
	}) 
	.when("/nriservices",{
		templateUrl : "domains/nriservices.html",
		css: "nriservices.css",
		header: "domains/nriservices_header.html",
	})
	.when("/exploreindia",{
		templateUrl : "domains/exploreindia.html",
		css: "exploreindia.css",
		header: "domains/exploreindia_header.html",
	})
	.when("/technicalresearch",{
		templateUrl : "domains/techresearch.html",
		css: "techresearch.css",
		header: "domains/techresearch_header.html",
	})
	.otherwise({
		templateUrl : "error.html",
		css: "home.css",
		header: "",
	})

}]);


//temp start
/*register a listener  to watch route changes*/
//visionBharati.run(function($rootScope, $location, $cookieStore) {
//	$rootScope.$on("$routeChangeStart", function(event, next, current) {
//		if ($rootScope.loggedIn == null || $rootScope.loggedIn == false) {
//			if (next.templateUrl != "signin.html") {
//				$location.path("/notloggedin");
//			}
//		}
//	});
//});


visionBharati.controller(
		"UserController",
		function($scope, $rootScope, $location, $http, $cookieStore,
				userLoginService) {
			$scope.submit = function() {
				console.log("Man" + $scope.userName );
								if ($scope.userName == 'uservision') {
									$cookieStore.put(
											'loggedIn',
											true);
									$cookieStore
									.put(
											'userFirstName',
											$scope.userName);
									$cookieStore
									.put(
											'userLastName',
											$scope.userName);
									$cookieStore
									.put(
											'userName',
											$scope.userName);
									$cookieStore
									.put(
											'location',
											$scope.userName);
							
									userLoginService
									.setIsLogin(true);
									$scope.$parent.userName = $scope.userName;
									$scope.$parent.loginStatus = true;
									$rootScope.loggedIn = true;
									$location
									.path('/');
								} else {
									$cookieStore
									.remove('loggedIn');
									userLoginService
									.setIsLogin(false);
									$scope.$parent.loginStatus = false;
									$scope.errorLogin = true;
									$rootScope.loggedIn = false;
									$location.path('/');
								}
							
						
			};
		});


//temp end





visionBharati.run(['$rootScope', '$http', '$browser', '$timeout', "$route", 
                   function ($scope, $http, $browser, $timeout, $route) {

	$scope.$on("$routeChangeSuccess", function (scope, next, current) {

		$scope.part = $route.current.activetab;

	});
	
}]);

visionBharati.controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});

visionBharati.controller('navController',['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.navtabs = [];
    $rootScope.genNavList = function(tabarray){
    	//tabarray = [];
    	//for(var i=0; i<arguments.length; i++){
    	//	tabarray.push(arguments[i]);
    	//}
    	$rootScope.navtabs.push.apply($rootScope.navtabs,tabarray);
    };
}]);

visionBharati.controller('ContactController', function ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }
});

visionBharati.controller('homeCtrl',['$scope', function($scope){     
	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	$scope.services = [
	                   {
	                	   image: 'resources/img/wecare/wecare_header.jpg',
	                	   name: 'We Care',
	                	   heading: 'We can be there where you cannot but you wish for',
	                	   text: 'VB\'s We Care Service is introducing services to assist you in supporting the  health and well-being of mom and  dad. We understand that nothing is  better than being in the comfort of  home, surrounded by family and  friends. We can be there, when you  can\'t, to help your aging parents live  their best lives at home.',
	                	   url: 'wecare',
	                	   scroll:'enter from the left after 0.3s',
	                	   home_image: 'resources/img/home/home_iphone.png'
	                   },
//	                   {
//	                	   image: 'resources/img/nriservices/nriservices_header.jpg',
//	                	   name: 'NRI Services',
//	                	   heading: 'always for you',
//	                	   text: 'VBCS\'s NRI services were started with the noble objective of strengthening  the emotional bonds between India  and Non-Resident Indians. Our team  members always try to help and full- fill the request of the NRI\'s in various  forms.',
//	                	   url: 'nriservices',
//	                	   scroll:'enter from the top after 0.2s'
//	                   },
//	                   {
//	                	   image: 'resources/img/helptalent/helptalent_header.jpg',
//	                	   name: 'Help Talent',
//	                	   heading: 'get what you deserve',
//	                	   text: 'VB\'s Help Talent works towards improving the lives of children and  families living in more than 5200  communities across India. Our unique  Child Sponsorship program has  helped many of these children rise  above their socio-economic  challenges.',
//	                	   url: 'helptalent',
//	                	   scroll:'enter from the right after 0.4s'
//	                   },
//	                   {
//	                	   image: 'resources/img/techresearch/technicalresearch_header.jpg',
//	                	   name: 'Technical Research',
//	                	   heading: 'deep search',
//	                	   text: 'VB\'s Technical Research Services is a privately owned offshore software  outsourcing company from India  offering software development  services to clients in the U.S., Canada,  Europe and Australia since 2005.',
//	                	   url: 'technicalresearch',
//	                	   scroll:'enter from the left after 0.5s'
//	                   },
	                   {
	                	   image: 'resources/img/exploreindia/exploreindia_header.jpg',
	                	   name: 'Explore India',
	                	   heading: 'a real beauty journey',
	                	   text: 'VBCS\'s Explore India program highlights the Indian heritage and culture to the world. VBCS\'s explore India team will become the interface of India to the external world and help people from the other part of the world to explore the beauty of India.',
	                	   url: 'exploreindia',
	                	   scroll:'enter from the right after 0.6s',
	                	   home_image:'resources/img/home/home_peacock.png'
	                   }
	                   ];

}]);

/*Slide Menu controller*/
visionBharati.controller('pageslideCtrl', [ '$scope', function($scope) {
	$scope.checked = false; // This will be binded using the ps-open attribute
	$scope.toggle = function() {
		$scope.checked = !$scope.checked
	}
} ]);

/*Header navtab controller*/
visionBharati.controller('headerCtrl', [ '$rootScope', '$route',
		function($rootScope, $route) {

			$rootScope.navtabs = [ {
				name : 'Home',
				url : '/home'
			} ];
			$rootScope.generateList = function() {
				tabarray = [];
				for (var i = 0; i < arguments.length; i++) {
					tabarray.push(arguments[i]);
				}
				$rootScope.navtabs.push.apply($rootScope.navtabs, tabarray);
			};			
			$rootScope.route = $route; //active tab
		} ]);


/*navbar controller*/
visionBharati.controller('navCtrl', function($scope, $location) {   
    $scope.isActive = function(route) {
        return route === $location.path();
    };
});

/* change navbar color */
visionBharati.directive('scroll', function($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 250) {
                scope.boolChangeClass = true;
                console.log('Scrolled below header.');
            } else {
                scope.boolChangeClass = false;
                console.log('Header is in view.');
            }
           scope.$apply();
       });
    };
});

visionBharati.directive('navAtTop', function ($window) {
	  var $win = angular.element($window); // wrap window object as jQuery object

	  return {
	    restrict: 'A',
	    link: function (scope, element, attrs) {
	      var topClass = attrs.navAtTop, // get CSS class from directive's attribute value
	          offsetTop = element.offset().top; // get element's offset top relative to document

	      $win.on('scroll', function (e) {
	        if ($win.scrollTop() > offsetTop) {
	          element.addClass(topClass);
	        } else {
	          element.removeClass(topClass);
	        }
	      });
	    }
	  };
	});

visionBharati.directive("stickyNav", function stickyNav($window){  
	  function stickyNavLink(scope, element, attrs){
	    var w = angular.element($window),
	        //size = element[0].clientHeight,
	         size = element.offset().top, //not in use
	        topClass = attrs.stickyNav,
	        top = 2;
	        //top = size;
	    function toggleStickyNav(){
	      if(!element.hasClass(topClass) && $window.pageYOffset > top){
	        element.addClass(topClass);
	      } else if(element.hasClass(topClass) && $window.pageYOffset <= top){
	        element.removeClass(topClass);
	      }
	    }

	    scope.$watch(function(){
	      return element[0].getBoundingClientRect().top + $window.pageYOffset;
	    }, function(newValue, oldValue){
	      if(newValue !== oldValue && !element.hasClass(topClass)){
	        top = newValue;
	      }
	    });

	    w.bind('resize', function stickyNavResize(){
	      element.removeClass(topClass);
	      top = element[0].getBoundingClientRect().top + $window.pageYOffset;
	      toggleStickyNav();
	    });
	    w.bind('scroll', toggleStickyNav);
	  }

	  return {
	    scope: {},
	    restrict: 'A',
	    link: stickyNavLink
	  };
	});