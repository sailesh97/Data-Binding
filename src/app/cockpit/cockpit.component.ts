import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput)
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
    // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});

  }

  /**
   * serverCreated and blueprintCreated are two properties of cockpit componet, which contains an object of EventEmitter class.
   * 
   * EventEmitter is a generic type which is indicated in typescript by mentioning < and > after the class name and inside the angular brackets(<>), we mention the type of data we expect it to return whenever this event is triggered or fired.
   * 
   * To make this event accesible/listenable to trigger from outside this component, we need to mention Output decorator.
   * 
   */
}
