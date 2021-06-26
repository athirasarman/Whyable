import { Component,ChangeDetectorRef, OnInit, ViewChild, ElementRef, OnDestroy  } from '@angular/core';
import { BreakpointObserver, Breakpoints,MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Optional } from 'utility-types';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy{
  mobileQuery: MediaQueryList;
  showSidebar=true;
  showResizeButton=false;


  constructor(private breakpointObserver: BreakpointObserver,
      changeDetectorRef: ChangeDetectorRef,
     private elementRef: ElementRef,
      media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  private _mobileQueryListener: () => void;

   ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
 ngOnInit()
 {

   let isSmallScreen = this.breakpointObserver.isMatched('(max-width: 768px)');
   if(isSmallScreen)
   {
       this.showResizeButton=true;

   }
   else
   {
      this.showResizeButton=false;
   }
 }

 onResize(event:any) {  

   let isSmallScreen = this.breakpointObserver.isMatched('(max-width: 768px)');
   if(isSmallScreen)
   {
       this.showResizeButton=true;

   }
   else
   {
      this.showResizeButton=false;
   }
   

 }

}
