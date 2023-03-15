import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TtlComponent } from './ttl.component';
import { Routes, RouterModule } from '@angular/router';
import { CardMacComponent } from './components/card-mac/card-mac.component';
import { CardGpayComponent } from './components/card-gpay/card-gpay.component';
import { FirstBlockComponent } from './first-block/first-block.component';
import { SecoundBlockComponent } from './secound-block/secound-block.component';
import { ThirdBlockComponent } from './third-block/third-block.component';



const routes: Routes = [
  {
    path: '',
    component: TtlComponent,
  }
];


@NgModule({
  declarations: [
    TtlComponent,
    CardMacComponent,
    CardGpayComponent,
    FirstBlockComponent,
    SecoundBlockComponent,
    ThirdBlockComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [TtlComponent]
})
export class TtlModule { }
