package com.spring.project.pojo;


import javax.persistence.*;

@Entity
@Table(name="admin_credentials")
public class AdminCredentials {
@Id

private long id;

@Column(name="username")
private String username;
@Column(name="password")
private String password;

public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public AdminCredentials( String username, String password) {
	super();

	this.username = username;
	this.password = password;
}
public AdminCredentials() {
	super();
}


}
