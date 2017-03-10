import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../list-item';

@Component({
  selector: 'slist-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: ListItem;
  itemId: number;
  constructor() { }

  ngOnInit() {
    
  }

}
