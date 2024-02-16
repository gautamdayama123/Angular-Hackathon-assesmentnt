import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderservicesService {

  constructor(private http:HttpClient) { }

  order:Order= new Order;

  url:string = "http://localhost:8000/orders";
 
  getAll(){
   return  this.http.get<Order[]>(this.url);
  }

  // addOrder(orderdata:Order):Observable<any>{
  //   return this.http.post(this.url,orderdata);

  // }

  delete(id:string):Observable<Order[]>{
    return this.http.delete<Order[]>(`${this.url}/${id}`);
  }

  getorderbyid(id:any):Observable<Order>{
    return this.http.get<Order>(`${this.url}/${id}`)

  }

  addOrder(order:Order): Observable<Order[]> {
    return this.http.post<Order[]>(this.url, order);
  }
  private ordersUpdated=new Subject<Order[]>
 
  notifyOrdersUpdated(orders: Order[]): void {
    this.ordersUpdated.next(orders);
  }
 
  onOrdersUpdated(): Observable<Order[]> {
    return this.ordersUpdated.asObservable();
  }
}
