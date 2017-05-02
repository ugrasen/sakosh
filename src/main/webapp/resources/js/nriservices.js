var nriservices = angular.module('nriservices',[]) ;

wecare.controller('nriServicesCtrl',['$scope', function($scope){     
    	$scope.myInterval = 5000;
    	$scope.noWrapSlides = false;
    	$scope.services = [
    	                       	                   
    	                   {

    	                	   image: 'resources/img/NRIService.jpg',
    	                	   name: 'Stand beside them',
    	                	   heading: 'Support them',
    	                	   text: ' <b>When you talk of services getting in India</b>, you have to think of quality and reliability.<p>That need has created the VB’s NRI Service which is the premier provider of concierge services in India. It works with a single principle in mind – to become your single point of contact for all possible services in India. ',

    	                	   image: 'resources/img/nriservices/NRIService.jpg',
    	                	   name: 'Bring this Happiness',
    	                	   heading: 'let them smile',
    	                	   text: ' <b>When you talk of services getting in India</b>, you have to think of quality and reliability.<p>That need has created the VB’s NRI Servicewhich is the premier provider of concierge services in India. It works with a single principle in mind – to become your single point of contact for all possible services in India. ',

    	                	   url: 'wecare',
    	                	   scroll:'enter from the right after 0.4s'
    	                   },
    	                   
    	                   {
    	                	   image: 'resources/img/nriservices/nriservices_Suman.jpg',
    	                	   name: 'Your Single point of Contact',
    	                	   heading: 'Always at your service',
    	                	   text: 'For all your need, Amitava will take care of your NRI services. <p>He has over 15 years of experience in dealing with the various clients accross the globe. He is a proactive person and loves to serve for the people</p>', 
    	                	   url: 'wecare',
    	                	   scroll:'enter from the left after 0.3s'	 
    	                   },
    	                   
    	                   
    	                   ];

    }]);