import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
   private cart: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);


    getCart(): Observable<IProduct[]> {
    return this.cart.asObservable();
  }

  add(product: IProduct){
    const newCart = [...this.cart.getValue(), product];
    this.cart.next(newCart);
    console.log(`product ${product.name} added to cart`);
  }
  
}
