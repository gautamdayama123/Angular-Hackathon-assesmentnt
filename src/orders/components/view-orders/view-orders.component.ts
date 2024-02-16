import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { OrderservicesService } from '../../services/orderservices.service';
import { Order } from '../../models/Order';



@Component({
  providers:[OrderservicesService],
  selector: 'app-view-orders',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterLink,RouterOutlet],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {
  
constructor(private http:HttpClient,private service:OrderservicesService, private route:Router){

}

orderdata:Order[]=[];

getallorders(){ 
   this.service.getAll().subscribe((data: Order[])=>{
      this.orderdata=data;
      console.log(this.orderdata);
    
    })};


ngOnInit(){
  this.getallorders();
  let result:any;
  this.service.getAll().subscribe(data=>{
    result=data;
    this.orderdata=result;
  })
}

nav(id:any){
  localStorage.setItem("myid",id)
  this.route.navigate(['view-order-info'],id)
}




deleteOrder(id:string) {
  if (confirm(`Are you sure you want to delete order?`)) {
    this.service.delete(id).subscribe(() => {
      this.getallorders() // Fetch the updated list of orders
    });
  }
}

}

