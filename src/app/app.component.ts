import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrdersModule } from '../orders/orders.module';
import { SharedModule } from '../shared/shared.module';
import { PaymentsModule } from '../payments/payments.module';
import { PlaceOrderComponent } from '../orders/components/place-order/place-order.component';
import { ViewOrdersComponent } from '../orders/components/view-orders/view-orders.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../footer/footer.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,OrdersModule,SharedModule,PaymentsModule,PlaceOrderComponent,ViewOrdersComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_Fiery_Restaurant';
}
