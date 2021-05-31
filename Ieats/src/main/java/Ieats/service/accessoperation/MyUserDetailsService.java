package Ieats.service.accessoperation;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import Ieats.domainmodel.models.MyUserDetails;
import Ieats.domainmodel.models.User;
import Ieats.service.repository.UserRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository repo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
	
		
			
			Optional<User> user = repo.findByMail(username);
			
			user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + username));

	        return user.map(MyUserDetails::new).get();
	}

}
