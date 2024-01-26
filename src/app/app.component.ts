import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 pokemonName: String = "";

 constructor() { } 


 handleChange(event : any){
  this.pokemonName = event?.target.value;
 }
}
