import { Component,AfterViewInit,Renderer2,ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  addressForm = this.fb.group({
    
  });
  constructor(private fb: FormBuilder,
    private renderer: Renderer2) {}

   ngAfterViewInit() {
    
  }

}
