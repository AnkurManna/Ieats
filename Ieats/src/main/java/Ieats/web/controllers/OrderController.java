package Ieats.web.controllers;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Ieats.domainmodel.exceptions.IeatsRequestException;
import Ieats.domainmodel.models.Cartelement;
import Ieats.domainmodel.models.Dish;
import Ieats.domainmodel.models.Order;
import Ieats.domainmodel.models.User;
import Ieats.domainmodel.utils.JwtUtils;
import Ieats.service.accessoperation.DishAccessOperation;
import Ieats.service.accessoperation.OrderAccessOperation;
import Ieats.service.accessoperation.UserAccessOperation;
@CrossOrigin(maxAge = 3600)
@RestController
public class OrderController {
	
	@Autowired
	DishAccessOperation op;
	
	@Autowired
	OrderAccessOperation orderAcc;
	
	@Autowired
	UserAccessOperation userAcc;
	
	@Autowired
	private JwtUtils jwtUtil;
	
	@PostMapping("/makeOrder")
	public String placeOrder(@RequestBody List<Cartelement> list,HttpServletRequest request)
	{
		final String authorizationHeader = request.getHeader("Authorization");
		String username = null ;
		String jwt = null;
		
		if(authorizationHeader != null && authorizationHeader.startsWith("Bearer "))
		{
			jwt = authorizationHeader.substring(7);
			username = jwtUtil.extractUsername(jwt);
			
			System.out.print(username);
		}
		System.out.println(list);
		HashMap<String,Integer> freq = new HashMap<>();
		 for (int i = 0; i < list.size(); i++) 
		 {
			  
	         String curDesc= list.get(i).getDescription();
			 if(freq.containsKey(curDesc))
				 freq.put(list.get(i).getDescription(), freq.get(curDesc)+1);
			 else
				 freq.put(list.get(i).getDescription(),1);
	            
	        }
		 
		 for (HashMap.Entry<String,Integer> entry : freq.entrySet())
		 {
			 Order cur = new Order();
			 Optional<Dish>curDish = op.findByDescription(entry.getKey());
			 if(curDish.isEmpty())
				 throw new IeatsRequestException("No Dish Present");
			 
			 cur.setBill(curDish.get().getCost()*entry.getValue());
			 cur.setAmount(entry.getValue());
			 cur.setDishname(entry.getKey());
			 cur.setTime(java.time.LocalDateTime.now());
			 cur.setUsername(username);
			 orderAcc.save(cur);
		 }
	            
		return "Order Placed";
	}
	
	@GetMapping("/orders/{id}")
	public List<Order> getAll(@PathVariable Integer id)
	{
		Optional<User>curUser = userAcc.findById(id);
		return orderAcc.findByUsername(curUser.get().getName());
	}
	
	/*
	 * private String username;
	private String dishname;
	private Date  time;
	private Integer amount;
	private Integer Bill;*/
	
	/*
	 * 	String description;
		String type;
	 * */
}
