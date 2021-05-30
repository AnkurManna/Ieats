package Ieats;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Optional;
import java.util.stream.Stream;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import Ieats.domainmodel.models.User;
import Ieats.service.accessoperation.CartAccessOperation;
import Ieats.service.accessoperation.UserAccessOperation;
import Ieats.service.repository.UserRepository;
import Ieats.web.controllers.DishController;

import static org.mockito.Mockito.times;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertEquals;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@AutoConfigureMockMvc
class IeatsApplicationTests {

	Logger logger  = LoggerFactory.getLogger(IeatsApplicationTests.class);
	
	/*@Autowired
	private DishController controller;
	/* controller is getting created 
	@Test
	public void contextLoads() throws Exception {
		assertThat(controller).isNotNull();
	}*/
	

	@Autowired
	private MockMvc mockMvc;

	@Test
	public void shouldReturnDefaultMessage() throws Exception {
		this.mockMvc.perform(get("/")).andDo(print()).andExpect(status().isOk())
				.andExpect(content().string(containsString("Hello World")));
	}
	
	/*@Autowired
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
		when(repository.findByUserid(11)).thenReturn(
				Optional.of(new User("name","password","gender","mail"))
				);
		assertEquals("name",operation.findById(11).get().getName());
	}

	private MockMvc mockMvc;
	
	@Autowired
	private WebApplicationContext context;
	
	@Before
	private void setUp ()
	{
		logger.trace("in setup");
		this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
	}
	*/
	@Test
	public void Normaltest() throws Exception {
		
		if(mockMvc==null)
		{
			logger.trace("null mockMvc");
		}
		RequestBuilder request = MockMvcRequestBuilders.get("/");
		MvcResult result = mockMvc.perform(request).andReturn();
		assertEquals("Hello World",result.getResponse().getContentAsString());
		/*this.mockMvc.perform(MockMvcRequestBuilders.get("/").accept(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(content().string(equalTo("Hello World")));*/
	}
	
	@Test
	public void test() throws Exception {
		
		RequestBuilder request = MockMvcRequestBuilders.get("/dish/findallDishes");
		MvcResult result = mockMvc.perform(request).andReturn();
		//assertEquals(2,result.getResponse().getContentLength());
	}
}
