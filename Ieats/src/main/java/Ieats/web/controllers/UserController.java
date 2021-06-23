package Ieats.web.controllers;


import java.util.Optional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Ieats.domainmodel.models.*;
import Ieats.service.accessoperation.UserAccessOperation;
import Ieats.service.repository.*;


@CrossOrigin(maxAge = 3600)
@RestController
public class UserController {
	
	@Autowired
	UserRepository repository;
	
	@Autowired
	UserAccessOperation useroperation;
	@GetMapping("/userlogin")
	public String login(@RequestParam("mail") String mail,@RequestParam("password") String password,HttpServletResponse response,HttpSession session)
	{
		Optional<User> candidate = repository.findByMail(mail);
		if(candidate.isPresent())
		{
			User x = candidate.get();
			//Argon2PasswordEncoder encoder = new Argon2PasswordEncoder();
			//Pbkdf2PasswordEncoder encoder = new Pbkdf2PasswordEncoder();

			
			//if(encoder.matches(password, x.getPassword()))
			if(x.getPassword().equals(password))
			{
				Cookie ck = new Cookie("loggedIn",mail);
				//Cookie gen = new Cookie("gender",candidate.get().getGender());
				
				ck.setMaxAge(12000);
				System.out.print("injecting cookie");
				response.addCookie(ck);
				
				return "logged In";
			}
			else
			{
				return "Invalid password";
			}
		}
		else
		{
			return "invalid credentials";
		}
		
	}
	
	@GetMapping("/userdata/{mail}")
	public User getbymail(@PathVariable String mail)
	{
		Optional<User> user = repository.findByMail(mail);
		System.out.println(user.get());
		return user.get();
	}
	
	@PostMapping("/adduser")
	public String addUser(@RequestBody User user)
	{
		
		useroperation.addUser(user);
		/*System.out.print(book.getId());
		System.out.print(book.getAuthorName());*/
		return "user added";
	}
	
	@PostMapping("/updateuser")
	public String updateUser(@RequestBody User user)
	{
		
		useroperation.updateUser(user);
		/*System.out.print(book.getId());
		System.out.print(book.getAuthorName());*/
		return "user added";
	}
	
	
	@GetMapping("/userlogout")
	public String logout(HttpServletResponse response)
	{
		Cookie ck=new Cookie("loggedIn","");//deleting value of cookie  
		ck.setMaxAge(0);//changing the maximum age to 0 seconds  
		System.out.print("logout");
		response.addCookie(ck);
		return "jjj";
	}
	
	
	@GetMapping("/check")
	public void check(HttpServletRequest req)
	{
	    Cookie ck[]=req.getCookies();  
	    try
	    {
		    for(int i=0;i<ck.length;i++){  
			     System.out.println(ck[i].getName()+" "+ck[i].getValue());//printing name and value of cookie  
			    }  
	    }
	    catch(Exception e) {
	    	System.out.println("zero cookie");
	    }

	}
	
	@GetMapping("/session")
    public int count(HttpSession session) {

        Integer counter = (Integer) session.getAttribute("count");

        if (counter == null) {
            counter = 1;
        } else {
            counter++;
        }

        session.setAttribute("count", counter);
        /*
         * The _id is a UUID that will be Base64-encoded by the DefaultCookieSerializer and set as a value in the SESSION cookie. 
         * Also, note that the attr attribute contains the actual value of our counter.
         * https://www.baeldung.com/spring-session-mongodb
         * */

        return counter;
    }
	
}
