package Ieats.domainmodel.exceptions;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class IeatsRequestException extends RuntimeException {
	
	public IeatsRequestException(String message) {
		super(message);
	}
	
	public IeatsRequestException(String message,Throwable cause)
	{
		super(message,cause);
	}
}
