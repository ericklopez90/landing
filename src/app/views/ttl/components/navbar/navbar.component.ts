import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
first = true;
// isSmallScreen = this.breakpointObserve.isMatched('(max-width: 599px)');
// 
// constructor(private breakpointObserve:BreakpointObserver){}
// 
// ngOnInit(): void {
//   this.isSmallScreen == true ? this.first = false : true
//   
// }

}
