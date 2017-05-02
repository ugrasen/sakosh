var wecare = angular.module('wecare',[]) ;

wecare.controller('weCareCtrl',['$scope', function($scope){     
    	$scope.myInterval = 5000;
    	$scope.noWrapSlides = false;
    	$scope.services = [
    	                   {
    	                	   image: 'resources/img/wecare/wecare_24x7_companionship.jpg',
    	                	   name: '24 X 7 Companionship',
    	                	   heading: 'Always at your service',
    	                	   text: 'Our facility manager will ensure that care givers are available around the clock to manage emergencies. Single point of contact for any requirement.',
    	                	   url: 'wecare',
    	                	   scroll:'enter from the left after 0.3s',
    	                	   modal: '#24X7Companionship'
    	                   },
    	                   {
    	                	   image: 'resources/img/wecare/wecare_HealthCare2.jpg',
    	                	   name: 'Health Care',
    	                	   heading: 'always for you',
    	                	   text: 'This includes routine checkups, house calls, in house nursing and specialized care(Aya Service) where needed.',
    	                	   url: 'wecare',
    	                	   scroll:'enter from the top after 0.2s',
    	                	   modal: '#HealthCare'
    	                   },
    	                   {
    	                	   image: 'resources/img/wecare/wecare_Hands-with-house.jpg',
    	                	   name: 'House Hold Services',
    	                	   heading: 'We will keep it as your dream home',
    	                	   text: ' We look after the payment of utility bills, banking, Grocery, Pharmacy, Mobility/Transportation Services etc. ',
    	                	   url: 'wecare',
    	                	   scroll:'enter from the right after 0.4s',
    	                	   modal: '#HouseHoldServices'
    	                   },
    	                   {
    	                	   image: 'resources/img/wecare/wecare_Thali.jpg',
    	                	   name: 'Food & Catering Services',
    	                	   heading: 'Home made delicious and quality food',
    	                	   text: 'make food will be served to the parents keeping all the hygiene and old age health factors in control.',
    	                	   url: 'wecare',
    	                	   scroll:'enter from the left after 0.5s',
    	                	   modal: '#FoodNCateringServices'
    	                   },
    	                   {
    	                	   image: 'resources/img/wecare/SocialGathering_WeCare.jpg',
    	                	   name: 'Social activities ',
    	                	   heading: 'Involving Social entertainment',
    	                	   text: 'providing opportunity for Parents to engage in social, recreational, or cultural activities that enrich the quality of life',
    	                	   url: 'wecare',
    	                	   scroll:'enter from the right after 0.6s',
    	                	   modal: '#Socialactivities'
    	                   }
    	                   ];
    	
    	$scope.cares = [
    		{	
				id: 1, 
				name: 'What Do We Care',
				active: 'active',
				desc: "There has been a drastic increase in Indians settling abroad since the last twenty years. Most of them have successfully established themselves in their business and jobs. However having their roots in India, only one thing worries them are their parents. NRI's from India who come to United States, Canada, Australia, Germany, Denmark or else where always feel a sense of responsibility towards their parents. There is always a feeling of guilt that we have left our parents alone, all by themselves in India. Most NRI's feel pretty hard to accept the fact that they may not be able to help their parents in their old age as previously expected.",
				
			},
			{
				id: 2, 
				name: 'Why Do We Care',
				active: '',
				desc: "VB's We Care Service is introducing services to assist you in supporting the health and well-being of the parents. We understand that nothing is better than being in the comfort of home, surrounded by family and friends. We can be there, when you can\'t, to help your aging parents live their best lives at home. This team has already started extending its horizons and deepening its roots globally with the help of NRI's that have accepted the need and the idea. This team consists of businessmen, programmers, doctors and House wives who would be assisting your parents like their own parents.",
				
			}
    	];
    	
    	$scope.content = 1;
    	    	
    	$scope.showContent = function(thechosenone) {

    		$scope.content = thechosenone;
    		
    	};

    }]);