package Ieats.service.repository;

import java.util.List;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Ieats.domainmodel.models.*;
/* @Repository provides a database specific encapsulated interface to ease the interaction with persistence layer */
@Repository
public interface DishRepository extends MongoRepository<Dish,String> {

	//List<Item> findAll(Query query, Class<Item> class1);
	
	public List<Dish> findByType(String type);
	public List<Dish> findByDiscountGreaterThan(int discount);
	//public List<Item> findByGender(String gender);
	public Optional<Dish> findById(String id);	
	public void deleteById(String id);
}

//https://docs.spring.io/spring-data/mongodb/docs/1.2.0.RELEASE/reference/html/mongo.repositories.html
//imp link