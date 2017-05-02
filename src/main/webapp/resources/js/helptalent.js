var helptalent = angular.module('helptalent',[]) ;

wecare.controller('helpTalentCtrl',['$scope', function($scope){     
    	$scope.myInterval = 5000;
    	$scope.noWrapSlides = false;
    	$scope.services = [
    	                   {
    	                	   image: 'resources/img/helptalent/helptalent_pic003.jpg',
    	                	   name: 'Sponsor a Child',
    	                	   heading: 'Always at your service',
    	                	   text: 'How do Children respond when they found out they have a reason to SMILE?', 
    	                	   url: 'wecare',
    	                	   scroll:'enter from the left after 0.3s'	 
    	                   },
    	                   
    	                   
    	                   {
    	                	   image: 'resources/img/helptalent/helptalent_pic001.jpg',
    	                	   name: 'Bring this Happiness',
    	                	   heading: 'let them smile',
    	                	   text: ' You can make an eternal difference in the life of a child who is waiting for a sponsor. Sponsor a child in poverty who has been waiting 6 months or longer!',
    	                	   url: 'wecare',
    	                	   scroll:'enter from the right after 0.4s'
    	                   },
    	                   
    	                   {
    	                	   image: 'resources/img/helptalent/helptalent_pic002.jpg',
    	                	   name: 'Let them have the shelter',
    	                	   heading: 'Shelter for all in this world would be the best gift one can give',
    	                	   text: ' You can make an eternal difference in the life of a child who is waiting for a sponsor. Sponsor a child in poverty who has been waiting 6 months or longer!',
    	                	   url: 'wecare',
    	                	   scroll:'enter from the right after 0.4s'
    	                   },
    	                   
    	                   
    	                   ];

    }]);