import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[];
  productsSeed: Product[] = [{
    id: '1',
    name: 'Product 1',
    description: 'Description 1',
    image: 'https://via.placeholder.com/240x120',
    price: 100000,
    quantity: 1
  }, {
    id: '2',
    name: 'Product 2',
    description: 'Description 2',
    image: 'https://via.placeholder.com/240x120',
    price: 200000,
    quantity: 2
  }];
  numberItems: number;
  subtotal: number;
  discount = 0;
  coupons = [
    { code: '1111', value: 0.1 },
    { code: '2010', value: 0.2 }
  ];

  constructor() {
    this.seed();
  }

  seed(): void {
    this.products = JSON.parse(JSON.stringify(this.productsSeed));
    this.update();
  }

  update(): void {
    this.numberItems = 0;
    this.subtotal = 0;
    this.products.forEach(e => {
      this.numberItems += e.quantity;
      this.subtotal += e.price * e.quantity;
    });
  }

  removeProduct(id: string): void {
    const index: number = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }

    this.update();
  }

  updateProductQuantity(id: string, quantity: string): void {
    const index: number = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index].quantity = parseInt(quantity, 10);
    }

    this.update();
  }

  updateDiscount(coupon: string): boolean {
    const index: number = this.coupons.findIndex(e => e.code === coupon);
    if (index !== -1) {
      this.discount = this.subtotal * 1.1 * this.coupons[index].value;
      return true;
    } else {
      this.discount = 0;
      return false;
    }
  }
}
