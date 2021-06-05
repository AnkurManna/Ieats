package Ieats.web.controllers;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import Ieats.service.accessoperation.CartAccessOperation;

@RestController
public class CartController {

	@Autowired
	CartAccessOperation op ;
	
	@GetMapping("/cart/findallCarts")
	public void getItems(HttpServletRequest req,HttpSession session){
		
		
		HashMap<String,Integer> preference = null;
		preference = (HashMap<String,Integer>) session.getAttribute("preference");
		
		if (preference == null) {
            preference = new HashMap<String,Integer>();
        } 
		//return op.getAll(preference,repository,session);
		
	}
}
