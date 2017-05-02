var techres = angular.module('techres',[]) ;

wecare.controller('techResCtrl',['$scope', function($scope){     
    	$scope.myInterval = 5000;
    	$scope.noWrapSlides = false;
    	$scope.services = [
    	                   {
    	                	   image: 'resources/img/techresearch/techresearch_webhosting.jpg',
    	                	   name: 'Domain Registration/Transfer/Renewal & Web Hosting',
    	                	   heading: 'Always at your service',
    	                	   text: 'We provide a variety of hosting options, including custom hosting on our own dedicated cloud servers as well as third party servers based on clients requirement and budget. <br><a>Read more... <i class="fa fa-arrow-circle-right"></i></a>',
    	                	   url: 'wecare',
    	                	   scroll:'enter from the left after 0.3s'	
    	                	  
    	                		   
    	                   },
    	                   
    	                   {
    	                	   image: 'resources/img/techresearch/techresearch_WebSiteDev.jpg',
    	                	   name: 'Website Design & Development',
    	                	   heading: 'always for you',
    	                	   text: 'VBs Tech Research team provides complete web designing solutions including: template designing, banner designing, CSS3 development, jquery development, HTML5 development. <br><a>Read more... <i class="fa fa-arrow-circle-right"></i></a>',
    	                	   url: 'wecare',
    	                	   scroll:'enter from the top after 0.2s'
    	                   },
    	                   {
    	                	   image: 'resources/img/techresearch/techresearch_ContentWriting.jpg',
    	                	   name: 'Content Writings',
    	                	   heading: 'We will keep it as your dream Business',
    	                	   text: ' In VB, we have expertise in content writing in various areas like SEO Content writing, Technical Writing, Website Copywriting. <br><a>Read more... <i class="fa fa-arrow-circle-right"></i></a>',
    	                	   url: 'wecare',
    	                	   scroll:'enter from the right after 0.4s'
    	                   },
    	                   {
    	                	   image: 'resources/img/techresearch/techresearch_software-testing.jpg',
    	                	   name: 'Software Testing',
    	                	   heading: 'Websites Are No Place for Bugs',
    	                	   text: 'Our Quality Assurance process ensures that your website meets the highest possible standards on all levels. <br><a>Read more... <i class="fa fa-arrow-circle-right"></i></a>',
    	                	   url: 'wecare',
    	                	   scroll:'enter from the left after 0.5s'
    	                   },
    	                   {
    	                	   image: 'resources/img/techresearch/techresearch_custom-software-development.jpg',
    	                	   name: 'Application Development ',
    	                	   heading: 'Shaping up your requirement',
    	                	   text: 'We specialize in the development of custom Web Applications for any size or complexity. <br><a>Read more... <i class="fa fa-arrow-circle-right"></i></a>',
    	                	   url: 'wecare',
    	                	   scroll:'enter from the right after 0.6s'
    	                   }
    	                   ];

    }]);