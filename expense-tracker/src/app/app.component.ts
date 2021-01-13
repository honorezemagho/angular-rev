import { Component } from '@angular/core';
import { Expense} from './models/expense';
import { Income} from './models/income';
import {ExpenseService} from './services/expense.service';
import {IncomeService} from './services/income.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Expense Tracker';
  budget =  1000;
}
