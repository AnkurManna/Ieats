package Ieats.service.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import Ieats.domainmodel.models.*;

public interface UserRepository extends JpaRepository<User,Integer> {
	
	public Optional<User> findByMail(String mail);
	public Optional<User> findByUserid(Integer id);
	public void deleteByUserid(Integer id);
}
