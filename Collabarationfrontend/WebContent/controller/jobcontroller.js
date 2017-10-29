/**
 * 
 */
app.controller('JobController',function($scope,JobService,$location){
	$scope.showJobDetails=false;
	$scope.addJob=function(){
		JobService.addJob($scope.job).then(function(response){
			
			console.log(response.data)
			console.log(response.status)
			getAllJobs()
			$location.path('/getalljobs')
		},function(response){
			console.log(response.data)
			console.log(response.status)
			$scope.errorMsg=response.data.message
			if(response.status==401){
				
				$location.path('/login')
			}
			else{
				$scope.error=response.data
				$location.path('/addjob')
				}
		})	
	}
		$scope.getJobDetails=function(jobId){
			JobService.getJobDetails(jobId).then(function(response){
				$scope.showJobDetails=true
				$scope.job=response.data
			},function(response){
				console.log(response.data)
				if(response.status==401){	
					$location.path('/login')
				}
			})	
		}
	
	function getAllJobs(){
		JobService.getAllJobs().then(function(response){
			
			$scope.jobs=response.data
			
		},function(response){
			if(response.status==401){
				$scope.error=response.data
				$location.path('/login')
			}	
		})
	}
	getAllJobs()
	
})