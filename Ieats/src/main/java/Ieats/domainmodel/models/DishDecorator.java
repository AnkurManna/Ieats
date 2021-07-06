package Ieats.domainmodel.models;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public  class DishDecorator {
	public DishDecorator(String description, int cost, double discount) {
		
		// TODO Auto-generated constructor stub
	}

	private int price;
	private double discount;
	
	public double cost()
	{
		return price;
	}
}
