import {Component} from 'angular2/core';

@Component({
  selector: 'say-hello',
  template: '<h1>Say Hello to Angular 2 {{name}}!</h1>'
})
export class AppComponent {
  name = "Shapeous";
}
