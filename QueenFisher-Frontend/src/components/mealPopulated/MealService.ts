import React from 'react';
import { IMeal } from './mealType';

export class MealService {
  private static users: IMeal[] = [
    { id: 1, MealName: 'Rice', MealType: 'Main Course', Country: 'India' },
    { id: 2, MealName: 'Beans', MealType: 'Side Dish', Country: 'Nigeria' },
    { id: 3, MealName: 'Yam', MealType: 'Main Course', Country: 'Nigeria' },
  ];

  public static getAllUsers() {
    return this.users;
  }
}

export default MealService;
