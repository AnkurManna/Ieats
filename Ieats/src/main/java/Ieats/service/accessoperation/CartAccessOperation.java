package Ieats.service.accessoperation;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Ieats.domainmodel.models.Cart;
import Ieats.service.repository.CartRepository;


@Service
public class CartAccessOperation {
	
	@Autowired
	CartRepository repository;
	
	Logger logger  = LoggerFactory.getLogger(CartAccessOperation.class);
	
	public CartAccessOperation()
	{
		
	}
	
	public  void save(Cart cart)
	{
		//System.out.println(item.getBrand());
		repository.save(cart);
	}
	
	public Optional<Cart> getById(Integer id)
	{
		return repository.findByCartid(id);
	}
	
	public List<Cart> getAll(Integer userId)
	{
		return repository.findByUserid(userId);
	}
	
	public void del(Integer Id)
	{
		repository.deleteByCartid(Id);
	}
	
}
