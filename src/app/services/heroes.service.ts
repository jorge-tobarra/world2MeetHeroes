import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  HEROES: Hero[] = [
    { id: 1, name: 'Pepe the hero', superpower: 'flying' },
    { id: 2, name: 'Paca the dog' },
    { id: 3, name: 'Mimo the weird', superpower: 'being weird' },
    { id: 4, name: 'Sermo the mother', superpower: 'taking care' },
    { id: 5, name: 'Vilma the hero', superpower: 'laser ears' },
    { id: 6, name: 'Petra the ficus', superpower: 'being a tree' },
    { id: 7, name: 'Rara the hero', superpower: 'strong fingers' },
    { id: 8, name: 'Roar the tiger' },
    { id: 9, name: 'Meow the lion', superpower: 'big jaw' },
    { id: 10, name: 'Katya the robbed', superpower: 'being funny' },
    { id: 11, name: 'Trixie the hero' },
    { id: 12, name: 'Jaida the winner', superpower: 'look over there!' },
    { id: 13, name: 'Violet the assassin' },
    { id: 14, name: 'Angeria the hero', superpower: 'sword nose' },
    { id: 15, name: 'Ruru the secret villain' },
    { id: 16, name: 'Michelle the maiden', superpower: 'scream' },
    { id: 17, name: 'Fierce the fierce', superpower: 'fierceness' },
    { id: 18, name: 'Kaos the chaotic', superpower: 'being chaotic' },
    { id: 19, name: 'Chelazon the... her.' },
  ];

  constructor() { }

  getHeroes(): Hero[] {
    return this.HEROES;
  }

  getHeroById(id: number) {
    return this.HEROES.find((hero) => hero.id === id);
  }

  createHero(heroName: string, superpower: string): Hero {
    const maxHeroId = Math.max(...this.HEROES.map((hero) => hero.id));
    const hero: Hero = { id: maxHeroId + 1, name: heroName, superpower };
    this.HEROES.push(hero);
    return hero;
  }

  updateHero(hero: Hero) {
    const dbhero = this.getHeroById(hero.id);
    if (dbhero) {
      const index = this.HEROES.indexOf(dbhero);
      if (index > -1) {
        this.HEROES[index] = hero;
        return hero;
      }
      return dbhero;
    }
    return undefined;
  }

  deleteHero(heroId: number) {
    const hero = this.getHeroById(heroId);
    if (hero) {
      const index = this.HEROES.indexOf(hero);
      if (index > -1) {
        this.HEROES.splice(index, 1);
      }
      console.log(this.HEROES);
    }
  }
}
