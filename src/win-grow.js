(function() {
  "use strict";

  var fn = function (element) {

    var elementDetails = {
      element: element,
      top: element.style.top,
      bottom: element.style.bottom,
      left: element.style.left,
      right: element.style.right,
      position: element.style.position
    };

    Object.assign(element.style, { position: "absolute", top: "0", bottom: "0", left: "0", right: "0" });

    return elementDetails;
  };

  var wingrow = {
    fullscreenElement: null,
    toggle: function (element) {

      if (!this.fullscreenElement)
      {
        this.fullscreenElement = fn(element);
      }
      else
      {
        if (this.fullscreenElement.element !== element)
        {
          return;
        }

        Object.assign(element.style, {
           position: this.fullscreenElement.position,
           top: this.fullscreenElement.top,
           bottom: this.fullscreenElement.bottom,
           left: this.fullscreenElement.left,
           right: this.fullscreenElement.right
        });

        this.fullscreenElement = null;
      }
    }
  };

  window.wingrow = wingrow;
})();
