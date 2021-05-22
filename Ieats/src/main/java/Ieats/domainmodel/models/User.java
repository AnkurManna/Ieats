package Ieats.domainmodel.models;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.ToString;

@ToString

@Document(collection="Users")
public class User {
	@Id
	public String id;
	
	public String name,password,gender,mail;
	
	
	public User(String name, String password, String gender, String mail) {
		super();
		this.name = name;
		this.password = password;
		this.gender = gender;
		this.mail = mail;
	}
	public User()
	{
		
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
}
