package Ieats.domainmodel.models;

import java.io.Serializable;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cartelement implements Serializable{
	
	String description;
	String type;
}
