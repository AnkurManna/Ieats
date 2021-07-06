package Ieats.domainmodel.exceptions;

import java.time.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class IeatsExceptionHandler {

	@ExceptionHandler(value= {IeatsRequestException.class})
	public ResponseEntity<Object> handleIeatsException(IeatsRequestException e)
	{
		//1. payload containing exception details
		//2. response entity
		IeatsException ex = 	new IeatsException(e.getMessage(),
				e,HttpStatus.BAD_REQUEST,
				ZonedDateTime.now(ZoneId.of("Z")));
		
		return new ResponseEntity<>(ex,HttpStatus.BAD_REQUEST);
		
	}
}
