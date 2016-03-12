/* We are creating an Angular 2 Web Component named "say-hello" with an inline template.
 * The Class method is where we could implement the Component's properties and methods that bind to the view.
 */
(function (app) {
  // (export)       |
  app.AppComponent = ng.core
    .Component({
      "selector": "say-hello",
      "template": `
        <h1>Hello, {{name}}!</h1>
        <hr>
        <p>Lorem ipsum dolor sit amet, lacus sociosqu, felis tempus quis, sed augue per, aliquam tortor vivamus nulla. Sapien nisl, lobortis proin sapien adipiscing. Nonummy sit tincidunt, vestibulum id et suspendisse. Eleifend egestas, aliquam torquent, pellentesque nunc volutpat dictum sapien proin fermentum, morbi quam rutrum eros dolor vestibulum, cursus proin tristique. At per. Libero est lectus enim sem fusce risus, eleifend lectus per, vestibulum vitae placerat nec, in dictum varius commodo est. Semper fusce pellentesque placerat suspendisse, facilisis ante ac. Rutrum mauris aliquam, mollis facilisis eu, fusce penatibus vel gravida vel dignissim wisi, sed nisl vel vel, convallis in et at proin. Sed tristique vel aliquam est, pede morbi vestibulum nisl varius ipsum. Ante lectus eros lorem libero, morbi pellentesque sed sodales vel cras, sociosqu id, ullamcorper aenean imperdiet duis a donec molestie, inceptos amet amet blandit vel. Non rutrum, ipsum nibh egestas elit ullamcorper elit, ut viverra et dui ultrices mollis fringilla, quam ac nisl.</p>
        `
    })
    .Class({
      "constructor": function () {
        this.name = "Shapeous";
      }
    });
})(window.app || (window.app = {}));
