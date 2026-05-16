import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


interface Product {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  page = signal('Products');
  products: Product[] = [
    { id: '1', name: 'Coffee 1', description: 'Extra-strong type' },
    { id: '2', name: 'Coffee 2', description: 'Flavoured type' },
    { id: '3', name: 'Coffee 3', description: 'Arabica type' },
    { id: '4', name: 'Coffee 4', description: 'Gourmet type' },
    { id: '5', name: 'Coffee 3', description: 'Carioca type' },
    { id: '6', name: 'Coffee 3', description: 'Decaffeinated type' },

  ];

  cart: Product[] = [];

  addCart(product: Product) {
    this.cart.push(product);
  };

  removeCart(index: number) {
    this.cart.splice(index, 1);
  };

  goTo(next: string) {
    this.page.set(next);
  }
}
