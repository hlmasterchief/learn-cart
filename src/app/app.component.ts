import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'learn-cart';
  products: Product[] = [{
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

  ngOnInit(): void {
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
}
