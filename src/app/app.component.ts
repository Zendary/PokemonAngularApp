import { Component } from '@angular/core';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  isCool: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
pokemons: Pokemon[] = [{
  id : 1,
  name: 'pikachu',
  type: 'electrik',
  isCool: false
},{
  id : 2,
  name: 'squirtle',
  type: 'water',
  isCool: true
},{
  id : 3,
  name: 'charmander',
  type: 'fire',
  isCool: true
}]


 constructor() { } 


}
