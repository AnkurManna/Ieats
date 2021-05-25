package Ieats.domainmodel.models;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.*;
@Getter
@Setter
@NoArgsConstructor
@Document(collection="Dishes")	
public  class Dish  {
	@Id
	public String id;
	protected String description;
	protected String type;
	public ArrayList<String> keywords;
	private double rating ;
	private int popularity;
	protected int cost;
	protected int discount;
	public Dish(String description,int cost,int discount)
	{
		this.description = description;
		this.cost = cost;
		this.discount = discount;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	//public abstract double cost();
			
}

