package Ieats.web.interceptor;



import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

@SuppressWarnings("deprecation")
@Component
public class DishAccessInterceptor extends HandlerInterceptorAdapter{
	
	 @Override
	    public boolean preHandle(
	      HttpServletRequest req, 
	      HttpServletResponse response, 
	      Object handler) {
		 
		 System.out.println("in prehandle");
		 if(req.getMethod().equals("OPTIONS"))
			 return true;
		 
		 return true;
		 
	 }
		 
	
	 
	
}
