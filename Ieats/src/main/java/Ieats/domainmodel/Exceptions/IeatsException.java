package Ieats.domainmodel.exceptions;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class IeatsException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private ExceptionType exceptionType;
	private String message;
}
