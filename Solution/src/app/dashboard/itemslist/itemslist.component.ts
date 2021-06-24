import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';


import { ItemsServiceService } from '../items-service.service';
import { Items } from '../items';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.scss']
})
export class ItemslistComponent {
 

  itemList:Items={} as Items;

  constructor(private itemsService :ItemsServiceService) {
   this.itemList=this.itemsService.getItemsList();
   console.log(this.itemList.data.items);
  }

}
