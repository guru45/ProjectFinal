package com.spring.project.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Table;


@Entity
@Table(name="trainerskill")
public class Trainerskill {

	
	@Column(name="skill")
	private String skill;

	public Trainerskill(String skill) {
		super();
		this.skill = skill;
	}

	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}

	public Trainerskill() {
		super();
	}
	
}