import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrl: './pokemon-template-form.component.css'
})
export class PokemonTemplateFormComponent {
  pokemon!: Pokemon;

  constructor(private pokemonService: PokemonService) { }

 toggleIsCool(object: any) {
  console.log(object);
  }


  ngOnInit(): void {
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
  })
}

}
