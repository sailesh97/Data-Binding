import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input("srvElement") element: {type: string, name: string, content: string};
  @Input() name: string;
  element2: {type: string, name: string, content: string};

  constructor() { 
    console.log("Constructor Called")
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called", changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit Called")
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

/**
 * Lifecycle Hooks Explanation:
 *  Whenever Angular encounters a selector of our custom component, It goes through couple of lifecycles.
 *  In this phase of lifecycles hooks, the 1st hook that ran is: constructor, then 2nd one is ngOnChanges and the 3rd one is ngOnInit.
 * 
 * We have put consoles in this server-element component whose selector is used in app-component. 
 * In app-component we loop through the serverElements array and for each item of serverElements array we're calling server-element component's selector. 
 * 
 * As by default in serverElements array of app-component there is one item present, that's why while refreshing the application consoles for that element will always be there and after that if you click on add server button, a new server-component will be created that's again lifecycle hooks will run for those components as well.
 * 
 * So each time Angualr encounters server-element component's selector, it's constructor -> ngOnChanges -> ngOnInit is called.
 * 
 * ngOnChanges is the only hook that receives an arguement which is an object containing information about all the propertie with an @Input decorator.
 * 
 * @Input() prop1
 * @Input() prop2
 * 
 * If we have two properties prop1 and prop2
 * then the format of the arguemnt received by ngOnChanges is:
 * 
 * changes: SimpleChanges------> 
 *  {
 *    prop1: {
 *      currentValue: __,
 *      previousValue: __,
 *      firstChange: __ (Boolean value)
 *    },
 *    prop2: {
 *      currentValue: __,
 *      previousValue: __,
 *      firstChange: __ (Boolean value)
 *    }
 *  }
 *  
 *  ngOnChanges is called more than once. Let's check this in demo by adding a button Change First in app component where we will change one of the @Input() propertis of server-element component.
 * 
 *  To demonstrate ngOnChanges is called more than once, we have changed the value of name property passed to server-element component on a button click.
 *  We could have changed the srvElement (alias: element) object on button click. But as it is an Object and In Javascript are of reference type, by changing it's value, it won't trigger the ngOnChanges hook in server-element component.
 * 
 *  That's why we changed the value of a value type field; i.e; name property to demonstrate this example. So after the 1st load if you click Change First Element only ngOnChanges will be triggered and ngOnInit and constructor won't be triggered.
 *  This time the firstChange in the ngOnChnages arguement will be false.
 * 
 * As on the click listener we changed the Value to  "Changed!", for the 1st click it's a different value than original, But for 2nd time click or 3rd time or onwards the name is same and not changed. That's why it won't trigger ngOnChnages for 2n time onwards clicks.
 */