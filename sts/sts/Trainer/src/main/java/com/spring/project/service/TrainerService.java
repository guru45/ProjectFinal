package com.spring.project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.project.pojo.TrainerDetails;
import com.spring.project.pojo.Trainerskill;
import com.spring.project.repo.TrainerRepo;
import com.spring.project.repo.TrainerSkillRepo;

@Service
public class TrainerService {
@Autowired
TrainerRepo repo;
@Autowired
TrainerSkillRepo repo1;

public List<TrainerDetails> getTrainer(){
	List<TrainerDetails> trainer = new ArrayList<TrainerDetails>();
	 repo.findAll().forEach(trainer::add);
	 return trainer;
}

public void postTrainer(TrainerDetails trainer) {
	repo.save(trainer);
}
public TrainerDetails getUsersTrainerName(String email) {

    return repo.searchTrainerName(email);
}
public void postSkill(Trainerskill skill) {
	repo1.save(skill);
}

}
