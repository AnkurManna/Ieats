package Ieats.service.accessoperation;




import java.util.Collections;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


import Ieats.domainmodel.algorithms.OrderByPreference;
import Ieats.domainmodel.models.*;

import Ieats.service.repository.*;



@Service
public class DishAccessOperation {
	
	
	
	@Autowired
	DishRepository repository;
	
	Logger logger  = LoggerFactory.getLogger(DishAccessOperation.class);
	
	public DishAccessOperation()
	{
		
	}
	
	public  void save(Dish dish)
	{
		//System.out.println(item.getBrand());
		
		repository.save(dish);
	}
	List<Dish> Util(HashMap<String,Integer> preference,List<Dish>all)
	{
		logger.info("in util message");
		System.out.print("here in log");
		for(int i=0;i<all.size();i++)
		{
			if(!preference.containsKey(all.get(i).getDescription()))
			{
				preference.put(all.get(i).getDescription(), 0);
			}
			
		}
		Collections.sort(all, new OrderByPreference(preference));
		return all;
	}
	public  String getAll(HashMap<String,Integer> preference,DishRepository repo,HttpSession session)
	{
		List<Dish> all =(List<Dish>) repo.findAll();
		
		all = Util(preference,all);
	
		

    // using addAll( ) method to concatenate the lists
 

		
			
		ObjectMapper obj = new ObjectMapper();
		
		String str = null;
		try {
			str = obj.writeValueAsString(all);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return str;
	}
	
	
	//repository.findByCurrentdiscountGreaterThan(0);
	
	public  String getCurrentDiscounts(HashMap<String,Integer> preference)
	{
		List<Dish> all = repository.findByDiscountGreaterThan(0);
		for(int i=0;i<all.size();i++)
		{
			if(!preference.containsKey(all.get(i).getType()))
			{
				preference.put(all.get(i).getType(), 0);
			}
			
		}
		ObjectMapper obj = new ObjectMapper();
		Collections.sort(all, new OrderByPreference(preference));
		String str = null;
		try {
			str = obj.writeValueAsString(all);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return str;
	}
	
	
}
