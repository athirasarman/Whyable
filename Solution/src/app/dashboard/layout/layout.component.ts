import { Component,ChangeDetectorRef, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { BreakpointObserver, Breakpoints,MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Optional } from 'utility-types';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  showSidebar=true;
  showResizeButton=false;


  constructor(private breakpointObserver: BreakpointObserver,
     private elementRef: ElementRef) {
    //@ViewChild('drawer') drawer: ElementRef;

  }
 ngOnInit()
 {

 // drawer=document.getElementById('drawer');
   let isSmallScreen = this.breakpointObserver.isMatched('(max-width: 768px)');
   if(isSmallScreen)
   {
       this.showResizeButton=true;
      // this.drawer.toggle();

   }
   else
   {
      this.showResizeButton=false;
   }
 }

 onResize(event:any) {  

   //let drawer=document.getElementById('drawer'); 
   let isSmallScreen = this.breakpointObserver.isMatched('(max-width: 768px)');
   if(isSmallScreen)
   {
       this.showResizeButton=true;
       //this.drawer.toggle();

   }
   else
   {
      this.showResizeButton=false;
   }
   

 }

}
