import { Injectable } from '@angular/core';
import { Items } from './items';
import { Observable, of } from 'rxjs';
import { List } from './itemsList';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  
  itemsList:Items={} as Items;
  constructor() {
  }

  getItemsList():Items
  {
    console.log(List.data.items);
    this.itemsList=List;
    return this.itemsList;
  }
}
