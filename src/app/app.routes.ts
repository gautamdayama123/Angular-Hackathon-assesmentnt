import { Routes } from '@angular/router';
import { PlaceOrderComponent } from '../orders/components/place-order/place-order.component';
import { ViewOrdersComponent } from '../orders/components/view-orders/view-orders.component';
import { ViewOrdersInfoComponent } from '../orders/components/view-orders-info/view-orders-info.component';

export const routes: Routes = [

    {path:'orders-placed',component:PlaceOrderComponent},
    {path:'view-orders',component:ViewOrdersComponent},
    {path:'view-order-info',component:ViewOrdersInfoComponent},
    // {path:'view-orders/view-order-info',component:ViewOrdersInfoComponent},
    {path:"place-order",component:PlaceOrderComponent}
];
