import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
   name: '',
   power: 0
  };

  emitCharacter(): void {
    //debugger; // Cuando la ejecución llega a este punto, se detiene la ejecución aquí
    if (this.character.name.length === 0) return; // Si nombre está vacío, no hago nada

    this.onNewCharacter.emit(this.character); // Emito el character

    // Seteo los elementos de name y power a sus valores originales
    this.character = {name: '', power: 0};
  }

}
