import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { CategoriesServiceService } from '../categories-service.service';
import { Categories } from '../categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  addressForm = this.fb.group({
    
  });

  categoriesList: Observable<Categories[]>=of([]);
  categoriesControl: FormControl=new FormControl();
 
  constructor(private fb: FormBuilder,
              private  categoriesService: CategoriesServiceService) {
    this.categoriesList=of(this.categoriesService.getCategoriesList());

  }

 
}
