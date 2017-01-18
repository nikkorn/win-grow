(function() {
    "use strict";

    var expandElement = function(element) {
        /** Store the element and its original dimensions. */
        var elementDetails = {
            element: element,
            top: element.style.top,
            bottom: element.style.bottom,
            left: element.style.left,
            right: element.style.right,
            position: element.style.position
        };

        /** Make the element fill the window. */
        Object.assign(element.style, {
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0"
        });

        return elementDetails;
    };

    var wingrow = {
        /** The element which is currently filling the window. */
        fullscreenElement: null,

        /** Toggle an element to fill the browser window. */
        toggle: function(element) {
            /** Check to see if we already have an element filling our browser window. */
            if (!this.fullscreenElement) {
                this.fullscreenElement = expandElement(element);
            } else {
				/** Check to see if the supplied element is the one which is filling the window. */
				var elementsMatch = this.fullscreenElement.element === element;
				/** Close the element which is fillign the window. */
				this.close();
                /** If toggle was called with a different element, make it fill the window. */
                if (!elementsMatch) {
                    /** Make the new element fill the window. */
                    this.fullscreenElement = expandElement(element);
                }
            }
        },

        /** If an element is currently filling the window then close it. */
        close: function() {
            /** Check to see if we even have an element filling our browser window. */
            if (this.fullscreenElement) {
                /** Assign the element its original dimensions. */
                Object.assign(this.fullscreenElement.element.style, {
                    position: this.fullscreenElement.position,
                    top: this.fullscreenElement.top,
                    bottom: this.fullscreenElement.bottom,
                    left: this.fullscreenElement.left,
                    right: this.fullscreenElement.right
                });

				/** Remove our full window element. */
                this.fullscreenElement = null;
            }
        },

        /** Returns whether wingrow is filling the browser window with an element. */
        isWindowFilled: function() {
            return !!this.fullscreenElement;
        }
    };

    window.wingrow = wingrow;
})();