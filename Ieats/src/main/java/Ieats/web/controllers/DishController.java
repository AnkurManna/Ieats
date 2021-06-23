package Ieats.web.controllers;



import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.slf4j.*;

import Ieats.domainmodel.models.*;
import Ieats.service.accessoperation.DishAccessOperation;
import Ieats.service.repository.*;

@EnableCaching
@CrossOrigin(maxAge = 3600)
@RestController
public class DishController {

	@Autowired
	DishRepository repository;
	
	@Autowired
	DishAccessOperation op ;

	
	Logger logger  = LoggerFactory.getLogger(DishController.class);
	//ItemAccessOperation op = new ItemAccessOperation(repository);
	//ItemAccessOperation op = new ItemAccessOperation();
	//explicit new will stop spring to consider as a service
	@GetMapping("/")
	public  String welcome()
	{
		logger.trace("In hello world");
		//different levels of logging like trace,info
		//log level for package is defined in application.properties 
		return "Hello World";
	}
	@PostMapping("/dish/adddish")
	public String saveItem(@RequestBody Dish item)
	{
		op.save(item);
		//repository.save(item);
		/*System.out.print(book.getId());
		System.out.print(book.getAuthorName());*/
		return "item added";
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/dish/findallDishes")
	public String getItems(HttpServletRequest req,HttpSession session){
		
		
		HashMap<String,Integer> preference = null;
		preference = (HashMap<String,Integer>) session.getAttribute("preference");
		
		if (preference == null) {
            preference = new HashMap<String,Integer>();
        } 
		return op.getAll(preference,repository,session);
		
	}
	@PutMapping("/admin/dish/updateDish/{id}")
	public void update(@RequestBody Dish item)
	{
		logger.trace("inupdate");
		repository.save(item);
	}
	@GetMapping("/dish/findAllDish/{id}")
	public Optional<Dish> getItem(@PathVariable Integer id)
	{
		return repository.findByDishid(id);
	}
	
	@DeleteMapping("/admin/dish/deletedish/{id}")
	public String deleteBook(@PathVariable
			Integer id)
	{
		repository.deleteByDishid(id);
		return "item deleted";
	}
	
	@GetMapping("/dish/searchdish/{type}")
	public List<Dish> searchItem(@PathVariable String type,HttpSession session)
	{
		logger.trace("in sarch");
		List<Dish> res = repository.findByType(type);
		@SuppressWarnings("unchecked")
		HashMap<String,Integer> preference = (HashMap<String,Integer>) session.getAttribute("preference");

        if (preference == null) {
            preference = new HashMap<String,Integer>();
        } 
        if(preference.containsKey(type))
        {
        	preference.put(type, preference.get(type)+1);
        	
        }
        else
        {
        	preference.put(type, 1);
        }
        System.out.println("HashMap: "
                + preference);

        session.setAttribute("preference", preference);
		return res;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/dish/discounts")
	public String Getdiscount(HttpSession session) 
	{
		HashMap<String,Integer> preference = null;
		preference = (HashMap<String,Integer>) session.getAttribute("preference");
		
		if (preference == null) {
            preference = new HashMap<String,Integer>();
        } 
		
		return op.getCurrentDiscounts(preference);
	
	}
	

	
	void pin(int x)
	{
		System.out.print(x);
	}
	
}
