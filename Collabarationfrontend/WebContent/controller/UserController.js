/**
 * 
 */
app.controller('UserController',function($scope,UserService,$location)
		{
	$scope.registerUser=function(){
		console.log("USER DATA IS"+$scope.user)
		UserService.registerUser($scope.user).then(function(response){
			console.log(response.data)
			console.log(response.status)
			$locationpath('/home')
			
		},function(response){
			console.log(response.data)
			console.log(response.status)
			$scope.error.response.data
			if($scope.error.code==1)
				$scope.exception=response.data
				if($scope.error.code==2)
					$scope.duplicateUser=response.data
					if($scope.error.code==3)
						$scope.duplicateEmail=response.data
			$location.path('/register')
		}
		)	}
		})