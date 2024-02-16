import { item } from "./Item";


export class Order{

id:string="";
contactName:string="";
orderDate:Date | undefined;
itemsOrdered:item[] ;
orderTotal:number=0
taxTotal:number=0
grandTotal:number=0;

constructor(){
    this.itemsOrdered=[];
}


}
