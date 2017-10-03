/**
 * 
 */
app.factory('UserService',function($http){
	var userService={}
	var BASE_URL="http://localhost:8082/Collabarationmiddleware"
	
	userService.registerUser=function(user){
		return	$http.post(BASE_URL + "/register",user)
	}
	
	userService.login=function(user){
		return	$http.post(BASE_URL + "/login",user)
		}
	return UserService;
})