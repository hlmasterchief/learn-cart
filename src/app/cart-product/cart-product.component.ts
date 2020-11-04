import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  @Input() products: Product[];
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateProduct(): void {
    this.update.emit();
  }

  removeProduct(id: string): void {
    if (!confirm('Are you sure to remove item?')) {
      return;
    }

    const index: number = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }

    this.updateProduct();
  }

  updateProductQuantity(id: string, quantity: string): void {
    const index: number = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index].quantity = parseInt(quantity, 10);
    }

    this.updateProduct();
  }
}
