import { Component,OnInit} from '@angular/core';
import { Observable, of } from 'rxjs';

import { MediaChange } from '@angular/flex-layout';

import { ItemsServiceService } from '../items-service.service';
import { Items } from '../items';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.scss']
})
export class ItemslistComponent implements OnInit {
 

  itemList:Items={} as Items;
  breakpoint: number=4;

  constructor(private itemsService :ItemsServiceService) {
   this.itemList=this.itemsService.getItemsList();
   console.log(this.itemList.data.items);
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 768) ? 1 : 4;
  }
  
  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 768) ? 1 : 4;
  }

  getSearchData():void{

  }
}
