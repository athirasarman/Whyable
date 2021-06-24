import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';


import { ItemsServiceService } from '../items-service.service';
import { Items } from '../items';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.scss']
})
export class ItemslistComponent {
  addressForm = this.fb.group({
  });

  itemList:Observable<Items[]>=of([]);

  constructor(private fb: FormBuilder,
              private itemsService :ItemsServiceService) {

  }

}
