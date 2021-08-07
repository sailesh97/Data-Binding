import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {

  @Input("srvElement") element: {type: string, name: string, content: string};
  element2: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit(): void {
  }


  /**
   * The difference between element and element2 is that, element is accessible by outside(by other elements);
   * But element2 is not.
   * 
   * We could bind to element property of server-element component from it's parent component.
   * 
   * As in app.component,html we will be using the selector of server-element, app component is the parent component.
   * 
   * Summary:
   * By default, all properties of components are only accessible inside these components, not bindable from outside components.
   * 
   * By mentioning @input decorator we're exposing a property to outside world.
   */

  /**
   * We can configure @Input by giving other params as well.
   * 
   * We can assign a alias name by which we can access this element variable outside this component.
   * 
   * @Input("srvElement") element means , inside this component we will use it by mentioning element .
   * 
   * But outside this component, element can be accessible by srvElement.
   */

  /**
   * @Input() and @Output() are decorators or functions. That's the reason we need to mention () after the word @Input and to execute the @input function we need to mention brackets after that.
   */

  /**
   * Though viewEncapsulation is enabled in all angular components by default, we can regulate that behaviour as well through the encapsulation property in component decorator.
   * 
   * It gives us 3ways to reguate it
   * i. ViewEncapsulation.Emulated ---> Default value
   * ii. ViewEncapsulation.None ----> The styling of these component will be applied globally to the whole document. 
   * iii. ViewEncapsulation.ShadowDOM ---> It is same as Emulated but will only reflect in browsers that support Shadow DOM. All browsers doesn't support.
   */
}

