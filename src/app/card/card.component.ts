import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  produtos: string[] = [];
  menuType: string = 'admin';

  constructor() {
    this.produtos = ['mouse', 'teclado', 'cabo', 'fonte'];
  }

  adicionar() {
    this.produtos.push('Ruben');
  }

  remove(index: number) {
    this.produtos.splice(index, 1);
  }
}
