import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild('serverContentInput2', {static: true}) serverContentInput: ElementRef;  
  /**
   * ViewChild takes two args. A string : that is the selector. How we want to select a element
   *  a. The selector we use here is not a normal css selector but we can use the name of a local reference.
   *  b. If you want to select a custom component made by us, you can mention the class name of the custom component without any double quotes instead of a string.
   * 
   * The 2nd arg is an object that is {static: true}.
   * 
   * ex:
   *  @ViewChild(CockpitComponent)
   *  @ViewChlid('serverNameInput') 
   * 
   * ViewChild will give us the 1st occurrence of the element we want to get. 
   *  Like if there are 2 cockpit components used in our dom, it will return the 1st one always
   * 
   * serverContentInput2 in DOM can be accessed by serverContentInput
   * 
   * ViewChild will return an output of type ElementRef.
   * 
   * ElementRef is an angular type. 
   * 
   * The output of type ElementRef has a property called nativeElement which indeed holds the actual HTML element.
   * 
   * So we can get the value property from the nativeElement of HTML Element. 
   */
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log("Through Local Ref",nameInput);
    console.log("Through ViewChild", this.serverContentInput);
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
    // this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
    // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
    // this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

  /**
   * serverCreated and blueprintCreated are two properties of cockpit componet, which contains an object of EventEmitter class.
   * 
   * EventEmitter is a generic type which is indicated in typescript by mentioning < and > after the class name and inside the angular brackets(<>), we mention the type of data we expect it to return whenever this event is triggered or fired.
   * 
   * To make this event accesible/listenable to trigger from outside this component, we need to mention Output decorator.
   * 
   */

  /**
   * this.serverContentInput.nativeElement.value = 'somethong' is not recommended at all.
   * 
   * Accessing the DOM this way is not recommended at all. We can show things in UI through property binding/string interpolation etc.
   * 
   * There are better ways of accessing the DOM in Angular that we will learn in directives section.
   */

  /**
   * Summary:
   *  ngModel, local reference and ViewChild solves similar problem. 
   * 
   * Through ngModel directive we can bind our UI HTML elements with typescript code directly.
   * 
   * Through local ref we can have access to a HTML Element and all its properties. but can only be used inside template file.
   *  To use that inside ts code we need to pass the reference through a function
   * 
   * Through ViewChild: we can directly access any HTML element inside our ts code. We don't need to pass it through a function.
   * 
   */
}
