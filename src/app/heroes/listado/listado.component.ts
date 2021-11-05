import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Capitán América'];
  public heroeBorrado: string = '';

  public borrarHulk(): void {
    this.heroeBorrado = this.heroes.shift() || '';    
  }

}


