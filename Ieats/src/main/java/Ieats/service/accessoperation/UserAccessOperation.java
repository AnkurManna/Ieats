package Ieats.service.accessoperation;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import Ieats.domainmodel.models.User;
import Ieats.service.repository.UserRepository;

@Service
public class UserAccessOperation /*implements UserDetailsService*/{
	
	@Autowired
	UserRepository repository;
	
	/*@Override
	public UserDetails loadUserByUsername(String mail)  {
		
		Optional<User> user = repository.findByMail(mail);
		
		return new org.springframework.security.core.userdetails.User(user.get().getMail(), user.get().getPassword(), null);
	}*/
	
	public Optional<User> findById(Integer id)
	{
		return repository.findByUserid(id);
	}
	
	public Optional<User> findByMail(String mail)
	{
		return repository.findByMail(mail);
	}
	public void deleteById(Integer id)
	{
		repository.deleteByUserid(id);
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
