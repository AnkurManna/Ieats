package Ieats.web.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Ieats.domainmodel.models.Cart;
import Ieats.domainmodel.models.Cartelement;
import Ieats.domainmodel.models.Dish;
import Ieats.service.accessoperation.CartAccessOperation;
import Ieats.service.accessoperation.DishAccessOperation;
@CrossOrigin(maxAge = 3600)
@RestController
public class CartController {

	@Autowired
	CartAccessOperation op ;
	Logger logger  = LoggerFactory.getLogger(DishAccessOperation.class);
	
	@SuppressWarnings("unchecked")
	@GetMapping("/cart/Carts/{id}")
	public List<Cart> getItems(@PathVariable Integer id,HttpServletRequest req,HttpSession session){
		
		List<Cart>cart = op.getAll(id);
		HashMap<String,Integer> preference = null;
		preference = (HashMap<String,Integer>) session.getAttribute("preference");
		
		if (preference == null) {
            preference = new HashMap<String,Integer>();
        } 
		//return op.getAll(preference,repository,session);
		
		return cart;
		
	}
	
	@PostMapping("/cart/addincart/{id}")
	public Optional<Cart> addInCart(@RequestBody Dish dish,@PathVariable Integer id)
	{
		Cart currentCart = new Cart();
		currentCart.setUserid(id);
		currentCart.setCartelement(new Cartelement(dish.getDescription(),dish.getType()));
		op.save(currentCart);
		//allcart.get(0).getCartelement().add(dish);
		return Optional.of(currentCart);
	}
}
