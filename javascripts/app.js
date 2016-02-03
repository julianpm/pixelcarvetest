(function() {
  pixelcarve.app = (function() {
    function app() {}

    app.prototype.initialize = function() {};

    app.prototype.start = function() {
      return alert("start here!");
    };

    return app;

  })();

}).call(this);
