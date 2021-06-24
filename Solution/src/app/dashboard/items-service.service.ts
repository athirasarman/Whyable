import { Injectable } from '@angular/core';
import { Items } from './items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  
  items:Observable<Items[]>=of([]);
  constructor() { }

  getItemsList():Observable<Items[]>
  {
    return this.items;
  }
}
