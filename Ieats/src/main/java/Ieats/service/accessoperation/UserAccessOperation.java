package Ieats.service.accessoperation;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Ieats.domainmodel.models.User;
import Ieats.service.repository.UserRepository;

@Service
public class UserAccessOperation {
	
	@Autowired
	UserRepository repository;
	
	public Optional<User> findById(String id)
	{
		return repository.findById(id);
	}
	
	public Optional<User> findByMail(String mail)
	{
		return repository.findByMail(mail);
	}
	public void deleteById(String id)
	{
		repository.deleteById(id);
	}
	
	public void addUser(User user)
	{
		repository.save(user);
	}
	
	public void updateUser(User user)
	{
		repository.save(user);
	}
	
	public Optional<User> doLogin(String mail,String password)
	{
		return  repository.findByMail(mail);
	}

	
}
