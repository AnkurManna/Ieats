package Ieats.domainmodel.algorithms;

import java.util.Comparator;
import java.util.HashMap;

import Ieats.domainmodel.models.*;
public class OrderByPreference implements Comparator<Dish>{
	
	HashMap<String,Integer> mp;
	public OrderByPreference(HashMap<String,Integer> mp)
	{
		this.mp = mp;
		
	}
	public int compare(Dish a,Dish b)
	{
		return this.mp.get(b.getDescription()) - this.mp.get(a.getDescription());
	}
}
