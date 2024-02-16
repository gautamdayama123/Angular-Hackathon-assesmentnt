import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Order } from '../../models/Order';
import { OrderservicesService } from '../../services/orderservices.service';


@Component({
  selector: 'app-view-orders-info',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './view-orders-info.component.html',
  styleUrl: './view-orders-info.component.css'
})
export class ViewOrdersInfoComponent {
  order:Order=new Order();
    
constructor(private  http:OrderservicesService){

}




ngOnInit(){
  let value:any
  if (typeof window !== 'undefined') {
    value = localStorage.getItem("myid");
    console.log(value);
  }
  if (value) {
    this.http.getorderbyid(value).subscribe(data =>{
      this.order=data as Order;
    })
  }
}


}
