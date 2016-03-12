/* Tell Angular to load app.AppComponent
 */
(function (app) {
  document.addEventListener("DOMContentLoaded", function() {
    ng.platform.browser.bootstrap(app.AppComponent); // (import)
  })
})(window.app || (window.app = {}));
