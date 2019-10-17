package com.spring.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spring.project.pojo.TrainerDetails;
import com.spring.project.pojo.Trainerskill;
import com.spring.project.service.TrainerService;

@EnableEurekaClient
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TrainerController {
	@Autowired
	TrainerService trainerService;
	
	@GetMapping("/trainers")
	  public List<TrainerDetails> getTrainer() {
	    return trainerService.getTrainer();
	    
	  }

	@RequestMapping(method = RequestMethod.POST,value = "/trainer-signup")
	  public void postTrainer(@RequestBody TrainerDetails trainer) {
	    trainerService.postTrainer(trainer);
	    
	  }
	@RequestMapping("/trainername/{email}")
    public TrainerDetails getPersonUserName(@PathVariable String email){
        return trainerService.getUsersTrainerName(email);
    }
	@RequestMapping(method = RequestMethod.POST,value = "/skill")
	  public void postskill(@RequestBody Trainerskill skill) {
	    trainerService.postSkill(skill);
	    
	  }
	
}
