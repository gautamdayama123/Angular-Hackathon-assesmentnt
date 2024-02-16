import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Order } from '../../models/Order';
import { OrderservicesService } from '../../services/orderservices.service';
import { item } from '../../models/Item';

@Component({

  selector: 'app-place-order',
  providers:[OrderservicesService],
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet,HttpClientModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {
  constructor(private http:HttpClient,private service:OrderservicesService){

  }

   order:Order=new Order();

  // additem(){
  //   this.service.addOrder(this.order).subscribe((data) =>{
  //     console.log('Item added');
  // })}

  addOrder(): void {
    this.service.addOrder(this.order).subscribe(() => {
      this.service.getAll().subscribe((data) => {
        this.service.notifyOrdersUpdated(data);
      });
      
    });
 
  }
 
 
  addItem()
  {
    const newItem: item= new item('',0);
    this.order.itemsOrdered.push(newItem);
  }
   removeItem(index:number)
   {
    this.order.itemsOrdered.splice(index,1)
   }

  
}