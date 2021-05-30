package Ieats;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import Ieats.web.controllers.DishController;
@ExtendWith(SpringExtension.class)
@WebMvcTest(DishController.class)
@RunWith(SpringRunner.class)
public class dishControllerTest {

	@Autowired 
	private MockMvc mvc;
	
	@Test
	public void Normaltest() throws Exception {
		//assertThat(controller).isNotNull();
		RequestBuilder request = MockMvcRequestBuilders.get("/");
		MvcResult result = mvc.perform(request).andReturn();
		assertEquals("Hello World",result.getResponse().getContentAsString());
	}
	
	@Test
	public void test() throws Exception {
		
		RequestBuilder request = MockMvcRequestBuilders.get("/dish/findallDishes");
		MvcResult result = mvc.perform(request).andReturn();
		assertEquals(2,result.getResponse().getContentLength());
	}
	

}
