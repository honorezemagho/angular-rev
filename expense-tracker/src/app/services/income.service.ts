import { Injectable } from '@angular/core';
import {Income} from '../models/income';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  incomes : Income[] = [];

  public getAllIncomes(){
    return this.incomes;
  }

  public AddIncome(income : Income){
    this.incomes.push(income)
  }
  constructor() { }
}
