/* We are creating an Angular 2 Web Component named "say-hello" with an inline template.
 * The Class method is where we could implement the Component's properties and methods that bind to the view.
 */
(function (app) {
  // (export)       |
  app.AppComponent = ng.core
    .Component({
      "selector": "say-hello",
      "templateUrl": 'app/sayHello.html'
    })
    .Class({
      "constructor": function () {
        this.name = "Shapeous";
      }
    });
})(window.app || (window.app = {}));
