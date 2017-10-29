/**
 * 
 */
app.factory('BlogPostService',function($http){
	var blogPostService={}
	var BASE_URL="http://localhost:7082/Collabarationmiddleware"
		blogPostService.addBlogPost=function(blogPost)
		{
		return $http.post(BASE_URL+"/addblogpost",blogPost)
		}
	
	blogPostService.blogsWaitingForApproval=function()
	{
	return $http.get(BASE_URL+"/getblogs/"+0)
	}
	
	blogPostService.blogsApproved=function()
	{
	return $http.get(BASE_URL+"/getblogs/"+1)
	}
	
	blogPostService.getBlogPostById=function(id)
	{
	return $http.get(BASE_URL+"/getblogbyid/"+id)
	}
	
	blogPostService.updateBlogPost=function(blogPost)
	{
		console.log(blogPost) 
	return $http.put(BASE_URL+"/update",blogPost)
	}
	blogPostService.addComment=function(blogComment)
	{
		console.log(blogComment) 
	return $http.post(BASE_URL+"/addcomment",blogComment)
	}
	blogPostService.getBlogComments=function(blogPostId)
	{
		
	return $http.get(BASE_URL+"/getcomments/"+blogPostId)
	}
	return  blogPostService;
})