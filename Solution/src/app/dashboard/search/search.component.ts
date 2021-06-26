import { Component,AfterViewInit,Renderer2,ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ItemslistComponent } from '../itemslist/itemslist.component';
import { ItemsServiceService } from '../items-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  addressForm = this.fb.group({
    
  });
  itemsService=new ItemsServiceService();
  itemslistComponent=new ItemslistComponent(this.itemsService);
  constructor(private fb: FormBuilder,
    private renderer: Renderer2) {}

  search():void{

     this.itemslistComponent.getSearchData();
  }
}
