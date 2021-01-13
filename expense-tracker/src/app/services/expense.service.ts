import { Injectable } from '@angular/core';
import {Expense} from '../models/expense';
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  expenses: Expense[] = [];

  getAllExpenses(){
    return this.expenses
  }

  addExpense(expense: Expense){
    this.expenses.push(expense)
  }

  constructor() { }
}
