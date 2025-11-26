import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart-service';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  products: IProduct[];
  filter: string='';
  private cartSvc: CartService=inject(CartService);
  
  constructor(){
    this.products =[
      {
      id: 1,
      description: "80% koncentracija",
      name: "Lavndino olje",
      imageName: "Lavanda.png",
      category: "eterično olje",
      price: 100.60,
      discount: 0.2,
    },
          {
      id: 2,
      description: "100% koncentracija",
      name: "Lavndino olje",
      imageName: "Lavanda.png",
      category: "olja",
      price: 100.60,
      discount: 0.2,
    },
          {
      id: 3,
      description: "10% koncentracija",
      name: "Lavndino olje",
      imageName: "Lavanda.png",
      category: "eterično olje",
      price: 560.44,
      discount: 0.2,
    },
          {
      id: 4,
      description: "50% koncentracija",
      name: "Lavndino olje",
      imageName: "Lavanda.png",
      category: "eterično olje",
      price: 1007.80,
      discount: 0.2,
    },
          {
      id: 5,
      description: "100% koncentracija",
      name: "immortelino olje",
      imageName: "Lavanda.png",
      category: "eterično olje",
      price: 1004.60,
      discount: 0.6,
    },
          {
      id: 6,
      description: "5% koncentracija",
      name: "Lavandino masažno olje",
      imageName: "Lavanda.png",
      category: "masažno olje",
      price: 1020.60,
      discount: 0.2,
    },
          {
      id: 7,
      description: "100% koncentracija",
      name: "Immortelino masažno olje",
      imageName: "immor.png",
      category: "masažno olje",
      price: 1080.60,
      discount: 0.2,
    },
  ];
  }

  addToCart(product: IProduct){
    this.cartSvc.add(product);
  }

  getImageUrl(product: IProduct){
    if (!product) return '';
  return '/assets/images/product/'+ product.imageName;
  }

  getFilterProducts(){
  //this.filter = 'olja';
  return this.filter === ''
  ? this.products
  : this.products.filter((product: any) => product.category === this.filter);
}
}
