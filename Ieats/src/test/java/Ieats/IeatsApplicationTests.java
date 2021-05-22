package Ieats;

import static org.mockito.Mockito.when;

import java.util.Optional;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import Ieats.domainmodel.models.User;
import Ieats.service.accessoperation.UserAccessOperation;
import Ieats.service.repository.UserRepository;
import static org.mockito.Mockito.times;
import static org.junit.Assert.assertEquals;
@SpringBootTest
class IeatsApplicationTests {

	@Autowired
	private UserAccessOperation operation;
	
	@MockBean
	private UserRepository repository;
	
	@Test
	public void getUsersByMailTest()
	{
		when(repository.findByMail("lll")).thenReturn(
				Optional.of(new User("name","password","gender","mail"))
				);
		assertEquals("name",operation.findByMail("lll").get().getName());
	}
	
	@Test
	public void getUsersByIdTest()
	{
		when(repository.findById("lll")).thenReturn(
				Optional.of(new User("name","password","gender","mail"))
				);
		assertEquals("name",operation.findById("lll").get().getName());
	}

	

}
