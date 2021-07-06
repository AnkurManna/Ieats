package Ieats.service.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import Ieats.domainmodel.models.Cart;


@Repository
public interface CartRepository extends JpaRepository<Cart,Integer>{
	
	public Optional<Cart> findByCartid(Integer id);
	//public List<Item> findByGender(String gender);
	
	@Query(" from Cart c where c.userid=:userId")
	public List<Cart> findByUserid(Integer userId);
	/* while writing custom query dont use table name use Entity class name
	 * 
	 * while doing select * ..just write "From Entity_class ... " like above;
	 *  */
	@Transactional
	public void deleteByCartid(Integer id);
}
