import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, PokemonType } from '../../models/pokemon';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonTemplateFormComponent {
  pokemon!: Pokemon;
  pokemonType: PokemonType[] = [
    {
      key: 0,
      value: 'Normal'
    },
    {
      key: 1,
      value: 'Fire'
    },
    {
      key: 2,
      value: 'Water'
    },
    {
      key: 3,
      value: 'Electric'
    },
    {
      key: 4,
      value: 'Grass'
    },
    {
      key: 5,
      value: 'Ice'
    },
    {
      key: 6,
      value: 'Fighting'
    },
    {
      key: 7,
      value: 'Poison'
    },
    {
      key: 8,
      value: 'Ground'
    },
    {
      key: 9,
      value: 'Flying'
    },
    {
      key: 10,
      value: 'Psychic'
    },
    {
      key: 11,
      value: 'Bug'
    },
    {
      key: 12,
      value: 'Rock'
    },
    {
      key: 13,
      value: 'Ghost'
    },
    {
      key: 14,
      value: 'Dragon'
    },
    {
      key: 15,
      value: 'Dark'
    },
    {
      key: 16,
      value: 'Steel'
    },
    {
      key: 17,
      value: 'Fairy'
    }
  ];

  constructor(private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute) { }

  toggleIsCool(object: any) {
    console.log(object);
  }

  handleSubmit(object: any) {
    console.log(object);
  }

  ngOnInit(): void {
    this.pokemon = {} as Pokemon;
    this.route.params.subscribe((data: Params) => {
      this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
        this.pokemon = data;
      });
    })

  }

  back() : void {
    this.router.navigate(['/pokemon']);
  }
  
  }
