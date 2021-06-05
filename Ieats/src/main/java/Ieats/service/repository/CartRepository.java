package Ieats.service.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import Ieats.domainmodel.models.Cart;


@Repository
public interface CartRepository extends JpaRepository<Cart,Integer>{
	
	public Optional<Cart> findByCartid(Integer id);
	//public List<Item> findByGender(String gender);
	public List<Cart> findByUserid(Integer userId);
	public void deleteByCartid(Integer id);
}
