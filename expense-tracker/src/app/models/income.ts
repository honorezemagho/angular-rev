import { Interface } from "readline";
export class Expense {

    constructor(
      public amount: number,
      public item: string,
      public details: string,
      public date?: string
    ) {  }
  
  }