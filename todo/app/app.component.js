/* We are creating an Angular 2 Web Component named "say-hello" with an inline template.
 * The Class method is where we could implement the Component's properties and methods that bind to the view.
 */
(function (app) {
  // (export)       |
  app.AppComponent = ng.core
    .Component({
      "selector": "to-do",
      "templateUrl": 'app/todo.html'
    })
    .Class({
      "constructor": function () {
        this.todos = ["Learn Angular 2", "Learn Bootstrap", "Learn MachII"];
      }
    });
})(window.app || (window.app = {}));
