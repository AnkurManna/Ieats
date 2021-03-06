package Ieats.service.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import Ieats.domainmodel.models.Order;

@Repository
public interface OrderRepository  extends JpaRepository<Order,Integer> {
	
	public List<Order> findByUserid(Integer username);
	public Optional<Order> findById(Integer id);
	@Transactional
	public void deleteByOrderid(Integer id);
}
