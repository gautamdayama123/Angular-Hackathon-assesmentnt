import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { ViewOrdersInfoComponent } from './components/view-orders-info/view-orders-info.component';



@NgModule({
  declarations: [],
  imports: [
    ViewOrdersInfoComponent,
    ViewOrdersComponent,
    PlaceOrderComponent,
    CommonModule
  ]
})
export class OrdersModule { }
