import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {

  constructor() { }

  getItems () {
    return new Promise(resolve => {
      let items;

      console.log(items);
      resolve(items);
    });
  }

  completeItem () {

  }

  deleteItem () {

  }

}
