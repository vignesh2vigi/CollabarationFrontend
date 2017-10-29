/**
 * 
 */
app.factory('JobService',function($http){
	var jobService={}
	var BASE_URL="http://localhost:7082/Collabarationmiddleware"
		jobService.addJob=function(job)
		{
		return $http.post(BASE_URL+"/addjob",job)
		}
	jobService.getAllJobs=function()
	{
	return $http.get(BASE_URL+"/getalljobs")
	}
	jobService.getJobDetails=function(jobId)
	{
	return $http.get(BASE_URL+"/getjob/"+jobId)
	}
	return jobService;
})