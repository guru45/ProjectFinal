package com.spring.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.*;

import com.spring.project.pojo.AdminCredentials;

import com.spring.project.service.AdminService;

@EnableEurekaClient
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AdminController {

	@Autowired
	AdminService adminService;
	
	@RequestMapping("/admin/{userName}")
    public AdminCredentials adminName(@PathVariable String userName){
        return adminService.adminName(userName);
    }
	
	
	
}
