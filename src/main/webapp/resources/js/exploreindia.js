var exploreindia = angular.module('exploreindia',[]) ;

exploreindia.controller('exploreIndiaCtrl',['$scope', function($scope){     
	$scope.myInterval = 3000;
    	$scope.noWrapSlides = false;
    	$scope.services = [
    	                   {
    	                	   image1: 'resources/img/exploreindia/exploreindia_culture-heritage.jpg',
    	                	   image3: 'resources/img/exploreindia/exploreindia_exploreIndia1.jpg',
    	                	   image2: 'resources/img/exploreindia/exploreindia_festivals-in-india.jpg',
    	                	   name: 'Richest culture in the Earth',
    	                	   heading: '',
    	                	   text: '', 
    	                	   url: 'wecare',
    	                	   scroll:'enter from the left after 0.3s'	 
    	                   },
    	                   
    	                   
    	                   {
    	                	   image1: 'resources/img/exploreindia/exploreindia_IndianCulture.jpg',
    	                	   image3: 'resources/img/exploreindia/exploreindia_IndiaBoat.jpg',
    	                	   image2: 'resources/img/exploreindia/exploreindia_festivals-in-india.jpg',
    	                	   name: 'Its a Country of Colors !!!',
    	                	   heading: '',
    	                	   text: ' ',
    	                	   url: 'wecare',
    	                	   scroll:'enter from the right after 0.4s'
    	                   },
    	                   
    	                  
    	                   
    	                   
    	                   ];
    	
    	$scope.slides = [
    						{image:'resources/img/exploreindia/exploreindia_exploreIndia1.jpg',text:'Cute Fish'},
    						{image:'resources/img/exploreindia/exploreindia_festivals-in-india.jpg',text:'Cute Fish2'},
    						{image:'resources/img/exploreindia/exploreindia_IndiaBoat.jpg',text:'Cute Fish3'},
    						{image:'resources/img/exploreindia/exploreindia_IndiaBoat.jpg',text:'Cute Fish4'}
    						
    					   ];
    	
    	
    	
    	var slides = $scope.slides;
    	
    	
    	
    	$scope.gallery = [
			{	
				image:'resources/img/exploreindia/exploreindia_culture-heritage.jpg', 
				title:'IMAGE 1', 
				desc:'Decription 1'
			},
			{
				image:'resources/img/exploreindia/exploreindia_IndianCulture.jpg',
				title:'IMAGE 2', 
				desc:'Description 2'
			},
			{
				image:'resources/img/exploreindia/exploreindia_IndiaBoat.jpg',
				title:'IMAGE 3', 
				desc:'Description 3'
			},
			{
				image:'resources/img/exploreindia/exploreindia_IndiaBoat.jpg',
				title:'IMAGE 4', 
				desc:'Description 4'
			}
			
		   ];
    	
    	
    	$scope.attractions = [
    		{	
				id: 1, 
				name: 'State and UnionTerritories',
				icon:'fa fa-history fa-5x', 
				active: 'active',
				desc:'India, a union of states, is a Sovereign, Secular, Democratic Republic with a Parliamentary system of Government.	The President is the constitutional head of Executive of the Union. In the states, the Governor, as the representative of the President, is the head of Executive. The system of government in states closely resembles that of the Union. There are 28 states and 7 Union territories in the country. Union Territories are administered by the President through an Administrator appointed by him/her. From the largest to the smallest, each State/UT of India has a unique demography, history and culture, dress, festivals, language etc.Explore their magnificent uniqueness...',
				
			},
			{
				id: 2, 
				name: 'Art & Culture',
				icon:'fa fa-history fa-5x',
				active: '',
				desc: "Culture plays an important role in the development of any nation. It represents a set of shared attitudes, values, goals and practices. Culture and creativity manifest themselves in almost all economic, social and other activities. A country as diverse as India is symbolized by the plurality of its culture. India has one of the world's largest collections of songs, music, dance, theatre, folk traditions, performing arts,	rites and rituals, paintings and writings that are known, as the 'Intangible Cultural Heritage' (ICH) of humanity.",
				
			}
    	];
    	
    	$scope.content = 1;
    	    	
    	$scope.showContent = function(thechosenone) {

    		$scope.content = thechosenone;
    		
    	};
    	
    	

    }]);


