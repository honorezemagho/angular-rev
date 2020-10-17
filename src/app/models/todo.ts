export class Todo {
  id: number;
  title: string = '';
  name: string = '';
  dateline: string = '';
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
