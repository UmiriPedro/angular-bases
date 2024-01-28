import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character : Character): void {
    const newCharacter: Character = {
      id: uuid(), ...character
    }; // Con '...character', le estoy diciendo que tome todas las propiedades de character y se las esparsa en el nuevo objetos

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string) {
    // Filtro la lista de characters, quedandome con todos los character cuyo id sea distinto al id que recibo
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
