package Ieats.domainmodel.models;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



import lombok.*;
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="dishes")
public  class Dish  {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer dishid;
	
	protected String description;
	protected String type;
	public ArrayList<String> keywords;
	private double rating ;
	private int popularity;
	protected int cost;
	protected int discount;
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	//public abstract double cost();
			
}

