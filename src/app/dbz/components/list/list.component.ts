import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() // Con el @Input() le estoy diciendo que mi ListComponent puede recibir una property llamada 'characterList'
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter;

  onDeleteCharacter(id?: string): void {
    // Si id no existe, finalizar la ejecución y no emitir
    if (!id) return;

    this.onDelete.emit(id);
  }
}
