package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.*;

import com.example.demo.pojo.TraineeDetails;

import com.example.demo.repo.TraineeRepo;

import com.example.demo.service.TraineeService;



@EnableEurekaClient
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TraineeController {
	@Autowired
	 TraineeService service;
	
	
	@RequestMapping(method = RequestMethod.POST,value = "/trainee-signup")
	  public void postTrainee(@RequestBody TraineeDetails trainee) {
	    service.postTrainee(trainee);
	  }
	
	
	@RequestMapping("/trainee/{email}")
    public TraineeDetails getPersonUserName(@PathVariable String email ){
        return service.getUsersUserName(email);
    }
	
	@RequestMapping("/userId/{id}")
    public TraineeDetails getPersonUserName(@PathVariable long id ){
        return service.getName(id);
    }
	
	 @RequestMapping(method=RequestMethod.PUT,value="/update-action/{id}")
		public void updateCourse(@RequestBody TraineeDetails cd, @PathVariable long id) {
			service.updateAction(cd, id);
		}
	 
	 @GetMapping("/trainee")
	    public List<TraineeDetails> viewTrainers(){
	        return service.getTrainee();
	    }
	
}
