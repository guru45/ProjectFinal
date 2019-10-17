package com.spring.project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.project.pojo.AdminCredentials;
import com.spring.project.repo.AdminRepo;


@Service
public class AdminService {
	@Autowired
	private AdminRepo repoadmin;
	
	public List<AdminCredentials> getDetails(){
		List<AdminCredentials> admin = new ArrayList<AdminCredentials>();
		 repoadmin.findAll().forEach(admin::add);
		 return admin;
	}
	
	public AdminCredentials adminName(String userName) {

	    return repoadmin.searchUserName(userName);
	}
}
