import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.scss']
})
export class ItemslistComponent {
  addressForm = this.fb.group({
  });
 
  constructor(private fb: FormBuilder) {}

}
