import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css',
})
export class CompAtributosComponent {
  estilo: string = 'disable';
  item: string = '';
  lista: string[] = [];

  trocar() {
    if (this.estilo === 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }

  adicionar() {
    if (this.item === '') {
      return;
    }

    this.lista.push(this.item);

    this.item = '';
  }
}
