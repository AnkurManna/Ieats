package Ieats.service.accessoperation;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Ieats.domainmodel.models.Order;
import Ieats.service.repository.OrderRepository;

@Service
public class OrderAccessOperation {
	

	@Autowired
	OrderRepository repository;
	
	Logger logger  = LoggerFactory.getLogger(OrderAccessOperation.class);
	
	public List<Order> findByUserid(Integer userId)
	{
		return repository.findByUserid(userId);
	}
	public Optional<Order> findById(Integer id)
	{
		return repository.findById(id);
	}
	public void deleteById(Integer id)
	{
		repository.deleteByOrderid(id);
	}
	
	public String save(Order order)
	{
		repository.save(order);
		return "order_added";
	}
}
