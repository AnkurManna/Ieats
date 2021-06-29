package Ieats.domainmodel.exceptions;

import java.time.ZonedDateTime;

import org.springframework.http.HttpStatus;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class IeatsException {
	
	private  String message;
	private  Throwable throwable;
	private HttpStatus httpStatus;
	private ZonedDateTime timestamp;
}
