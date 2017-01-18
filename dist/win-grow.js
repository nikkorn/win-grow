/*!
* win-grow
* v1.0.3 - 18-01-2017
* (c) Nikolas Howard; MIT License
*/
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
            width: element.style.width,
            height: element.style.height,
            position: element.style.position
        };

        /** Make the element fill the window. */
        element.style.position = "fixed";
        element.style.top = "0";
        element.style.bottom = "0";
        element.style.left = "0";
        element.style.right = "0";
        element.style.width = "100%";
        element.style.height = "100%";

        /** Add a class to any expanded elements to allow for custom styling. */
        element.classList.add("win-grow-expanded");

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
                var element = this.fullscreenElement.element;
                element.style.position = this.fullscreenElement.position;
                element.style.top = this.fullscreenElement.top;
                element.style.bottom = this.fullscreenElement.bottom;
                element.style.left = this.fullscreenElement.left;
                element.style.right = this.fullscreenElement.right;
                element.style.width = this.fullscreenElement.width;
                element.style.height = this.fullscreenElement.height;

                /** Remove the expanded elements class. */
                this.fullscreenElement.element.classList.remove("win-grow-expanded");

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