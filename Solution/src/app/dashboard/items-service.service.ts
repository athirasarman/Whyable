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
    this.itemsList=List;
    return this.itemsList;
  }

  searchItems(searchTerm:string):Items
  {
    let searchedItem=this.itemsList;
    if(searchTerm!="")
    {
      
    }
    
    return searchedItem;
  }
}
