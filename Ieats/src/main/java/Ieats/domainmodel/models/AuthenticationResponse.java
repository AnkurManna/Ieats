package Ieats.domainmodel.models;

public class AuthenticationResponse {

	private  String jwt;
	public User user;
	public AuthenticationResponse(String jwt,User user) {
		super();
		this.jwt = jwt;
		this.user = user;
	}

	public String getJwt() {
		return jwt;
	}
	
}
