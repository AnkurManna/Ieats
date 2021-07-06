package Ieats.web.controllers;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import Ieats.domainmodel.exceptions.ExceptionType;
import Ieats.domainmodel.exceptions.IeatsRequestException;
import Ieats.domainmodel.models.AuthenticationRequest;
import Ieats.domainmodel.models.AuthenticationResponse;
import Ieats.domainmodel.models.User;
import Ieats.domainmodel.utils.JwtUtils;
import Ieats.service.accessoperation.MyUserDetailsService;
import Ieats.service.accessoperation.UserAccessOperation;



@CrossOrigin(maxAge = 3600)
@RestController
public class AuthenticationController {

	@GetMapping("/hello")
	public  String welcome()
	{
		//logger.trace("In hello world");
		//different levels of logging like trace,info
		//log level for package is defined in application.properties 
		return "Hello World";
	}
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtils jwtTokenUtil;

	@Autowired
	private MyUserDetailsService userDetailsService;
	
	@Autowired
	private UserAccessOperation accOp;

	

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
			);
		}
		catch (BadCredentialsException e) {
			throw new IeatsRequestException(ExceptionType.INCORRECT_USERNAME_OR_PASSWORD.toString());
		}


		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String jwt = jwtTokenUtil.generateToken(userDetails);
		Optional<User> curUser = accOp.findByMail(authenticationRequest.getUsername());
		
		AuthenticationResponse res = new AuthenticationResponse(jwt,curUser.get());
		System.out.print(res.user);
		return ResponseEntity.ok(res);
	}
}

