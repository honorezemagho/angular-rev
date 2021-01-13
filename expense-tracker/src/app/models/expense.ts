export class Expense {

    constructor(
      public amount: number,
      public source: string,
      public details: string,
      public date?: string
    ) {  }
  
  }