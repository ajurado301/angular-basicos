import {Component} from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>

        <button (click)="variarBase(1)">Base + 1</button>

        <span> {{base}} </span>

        <button (click)="variarBase(-1)">Base - 1</button>

        <br><br>

        <button (click)="acumular(base)">+{{base}}</button>

        <span> {{numero}} </span>

        <button (click)="acumular(-base)">-{{base}}</button>
    `
})
export class ContadorComponent {
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base  : number = 1;
  
    public variarBase(valor: number) {
      if (this.base + valor > 0) {
        this.base += valor;
      }
    }
  
    public acumular(valor: number) {
      this.numero += valor;
    }
}