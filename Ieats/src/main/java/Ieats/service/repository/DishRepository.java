package Ieats.service.repository;

import java.util.List;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Ieats.domainmodel.models.*;
/* @Repository provides a database specific encapsulated interface to ease the interaction with persistence layer */
@Repository

public interface DishRepository extends JpaRepository<Dish,Integer> {

	//List<Item> findAll(Query query, Class<Item> class1);
	
	public List<Dish> findByType(String type);
	public List<Dish> findByDiscountGreaterThan(int discount);
	//public List<Item> findByGender(String gender);
	public Optional<Dish> findByDishid(Integer id);	
	public void deleteByDishid(Integer id);
	public Optional<Dish> findByDescription(String desc);
}

//https://docs.spring.io/spring-data/mongodb/docs/1.2.0.RELEASE/reference/html/mongo.repositories.html
//imp link