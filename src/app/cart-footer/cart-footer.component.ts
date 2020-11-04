import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./cart-footer.component.css']
})
export class CartFooterComponent implements OnInit {
  @Input() subtotal: number;

  constructor() { }

  ngOnInit(): void {
  }
}
