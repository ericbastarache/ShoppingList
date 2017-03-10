import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';
import { ListItem } from '../list-item';

@Component({
  selector: 'slist-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: ListItem[] = [];
  item = new ListItem('Eric', 2);
  constructor(private shopping: ShoppingListService) { }

  ngOnInit() {
  }

  addItem () {

  }

}
