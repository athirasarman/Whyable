import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Categories } from './categories';
import  {CategoriesList} from './CategoriesList';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {

  categoriesList:Categories[]=[];
  constructor() {
     this.categoriesList =CategoriesList;
   }
  
  getCategoriesList():Categories[]{
   
    return this.categoriesList;
   
  }
}
