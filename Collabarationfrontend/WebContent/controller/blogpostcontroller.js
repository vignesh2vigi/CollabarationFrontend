/**
 * 
 */
app.controller('BlogPostController',function($scope,BlogPostService,$location,$rootScope){
	
	$scope.addBlogPost=function(){
		console.log($rootScope.currentUser)
		BlogPostService.addBlogPost($scope.blog).then(function(response){
			alert('Blogpost')
			$location.path('/home')
		},function(response){
			$scope.error=response.data;
			if(response.status==401)
				$location.path('/login')
				else
					
					$location.path('/addblogpost')
			
		})
		
	}
	
	function blogsApproved(){
		BlogPostService.blogsApproved().then(function(response){
			$scope.listofBlogsApproved=response.data
		},function(response){
			if(response.status==401)
				$location.path('/login')	
			
		})
	}
	
	function blogsWaitingForApproval(){
		BlogPostService.blogsWaitingForApproval().then(function(response){
			$scope.listofBlogsWaitingForApproval=response.data
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	blogsApproved()
	blogsWaitingForApproval()
})