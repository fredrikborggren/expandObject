(function(global) {

    window.expandObject = window.expandObject || (function() {

        /**
         * @param {object} outerElement
         * @param {object} innerElement
         * @param {integer} outerPositionTop
         * @param {integer} outerPositionLeft
         * @param {integer} innerPositionTop
         * @param {integer} innerPositionLeft
         */

        function setPosition(outerElement, innerElement, outerPositionTop, outerPositionLeft, innerPositionTop, innerPositionLeft) {
            outerElement.style.top = outerPositionTop + "px";
            outerElement.style.left = outerPositionLeft + "px";
            innerElement.style.top = innerPositionTop + "px";
            innerElement.style.left = innerPositionLeft + "px";
        }

        /**
         * @param {string} currentEvent
         * @param {string} expandDirection
         * @param {integer} collapseWidth
         * @param {integer} collapseHeight
         * @param {integer} expandWidth
         * @param {integer} expandHeight
         */

        function getCalculatedPosition(currentEvent, expandDirection, collapseWidth, collapseHeight, expandWidth, expandHeight) {
            switch (expandDirection) {
                case "top":
                    return currentEvent === 'expand' ? [collapseHeight - expandHeight, 0, 0, 0] : [0, 0, collapseHeight - expandHeight , 0];
                break;
                case "top-left":
                    return currentEvent === 'expand' ? [collapseHeight - expandHeight, collapseWidth - expandWidth, 0, 0] : [0, 0, collapseHeight - expandHeight, collapseWidth - expandWidth + 0];
                break;
                case "top-center":
                    return currentEvent === 'expand' ? [collapseHeight - expandHeight, collapseWidth / 2 - expandWidth / 2, 0, 0] : [0, 0, collapseHeight - expandHeight, collapseWidth / 2 - expandWidth / 2];
                break;
                case "top-right":
                    return currentEvent === 'expand' ? [collapseHeight - expandHeight, 0, 0, 0] : [0, 0, collapseHeight - expandHeight, 0];
                break;
                case "left":
                    return currentEvent === 'expand' ? [0, collapseWidth - expandWidth, 0, 0] : [0, 0, 0, collapseWidth - expandWidth];
                break;
                case "center":
                    return currentEvent === 'expand' ? [collapseHeight / 2 - expandHeight / 2, collapseWidth / 2 - expandWidth / 2, 0, 0] : [0, 0, collapseHeight / 2 - expandHeight / 2, collapseWidth / 2 - expandWidth / 2];
                break;
                case "right":
                    return [0, 0, 0, 0];
                break;
                case "bottom":
                    return [0, 0, 0, 0];
                break;
                case "bottom-left":
                    return currentEvent === 'expand' ? [0, collapseWidth - expandWidth, 0, 0] : [0, 0, 0, collapseWidth - expandWidth];
                break;
                case "bottom-center":
                    return currentEvent === 'expand' ? [0, collapseWidth / 2 - expandWidth / 2, 0, 0] : [0, 0, 0, collapseWidth / 2 - expandWidth / 2];
                break;
                case "bottom-right":
                    return [0, 0, 0, 0];
                break;
            }
        }

        /**
         * @param {object} holderElement
         * @param {object} outerElement
         * @param {object} innerElement
         * @param {integer} collapseWidth
         * @param {integer} collapseHeight
         * @param {integer} collapseDelay
         * @param {array} collapsePosition
         * @param {boolean} pushDown
         */

        function collapse(holderElement, outerElement, innerElement, collapseWidth, collapseHeight, collapsePosition, pushDown) {
            setPosition(outerElement, innerElement, collapsePosition[0], collapsePosition[1], collapsePosition[2], collapsePosition[3]);
            holderElement.style.width = collapseWidth + "px";
            holderElement.style.height = collapseHeight + "px";
            outerElement.style.width = collapseWidth + "px";
            outerElement.style.height = collapseHeight + "px";
            if (global === window.parent) {
                window.frameElement.style.width = collapseWidth + "px";
                window.frameElement.style.height = collapseHeight + "px";
            }
        }

        /**
         * @param {object} holderElement
         * @param {object} outerElement
         * @param {object} innerElement
         * @param {integer} collapseWidth
         * @param {integer} collapseHeight
         * @param {integer} collapseDelay
         * @param {integer} expandWidth
         * @param {integer} expandHeight
         * @param {array} expandPosition
         * @param {boolean} pushDown
         */

        function expand(holderElement, outerElement, innerElement, collapseWidth, collapseHeight, expandWidth, expandHeight, expandPosition, pushDown) {
            setPosition(outerElement, innerElement, expandPosition[0], expandPosition[1], expandPosition[2], expandPosition[3]);
            holderElement.style.width = (pushDown ? expandWidth : collapseWidth) + "px";
            holderElement.style.height = (pushDown ? expandHeight : collapseHeight) + "px";
            outerElement.style.width = expandWidth + "px";
            outerElement.style.height = expandHeight + "px";
            if (global === window.parent) {
                window.frameElement.style.width = expandWidth + "px";
                window.frameElement.style.height = expandHeight + "px";
            }
        }

        return {

            /**
             * @param {string} id
             * @param {integer} collapseWidth
             * @param {integer} collapseHeight
             * @param {integer} collapseDelay
             * @param {integer} expandWidth
             * @param {integer} expandHeight
             * @param {integer} expandDelay
             * @param {boolean} pushDown
             * @param {string} expandDirection
             * @param {boolean} expandSmooth
             */

            enable: function(elementId, collapseWidth, collapseHeight, collapseDelay, expandWidth, expandHeight, expandDelay, pushDown, expandDirection, expandSmooth) {

                var collapseTimeout;
                var expandTimeout;

                var holderElement = document.getElementById(elementId);
                    holderElement.style.width = collapseWidth + 'px';
                    holderElement.style.height = collapseHeight + 'px';
                    holderElement.style.display = 'block';
                    holderElement.style.position = 'relative';

                var outerElement = holderElement.firstElementChild || holderElement.firstChild;
                    outerElement.style.width = collapseWidth + 'px';
                    outerElement.style.height = collapseHeight + 'px';
                    outerElement.style.display = 'block';
                    outerElement.style.position = pushDown ? 'relative' : 'absolute';
                    outerElement.style.top = 0;
                    outerElement.style.left = 0;
                    outerElement.style.overflow = 'hidden';

                var innerElement = outerElement.firstElementChild || outerElement.firstChild;
                    innerElement.style.width = expandWidth + 'px';
                    innerElement.style.height = expandHeight + 'px';
                    innerElement.style.display = 'block';
                    innerElement.style.position = 'relative';
                    innerElement.style.top = 0;
                    innerElement.style.left = 0;
                    innerElement.style.background = '#333';

                if (expandSmooth) {
                    holderElement.style.WebkitTransition = holderElement.style.MozTransition = holderElement.style.OTransition = holderElement.style.msTransition = holderElement.style.transition = outerElement.style.WebkitTransition = outerElement.style.MozTransition = outerElement.style.OTransition = outerElement.style.msTransition = outerElement.style.transition = innerElement.style.WebkitTransition = innerElement.style.MozTransition = innerElement.style.OTransition = innerElement.style.msTransition = innerElement.style.transition = 'all .25s ease-in-out';
                }

                function prepareCollapse() {
                    clearTimeout(collapseTimeout);
                    collapseTimeout = setTimeout(function() {
                        var collapsePosition = getCalculatedPosition('collapse', expandDirection, collapseWidth, collapseHeight, expandWidth, expandHeight);
                            collapse(holderElement, outerElement, innerElement, collapseWidth, collapseHeight, collapsePosition, pushDown);
                    }, collapseDelay * 1000);
                }

                function prepareExpand() {
                    clearTimeout(expandTimeout);
                    expandTimeout = setTimeout(function() {
                        var expandPosition = getCalculatedPosition('expand', expandDirection, collapseWidth, collapseHeight, expandWidth, expandHeight);
                            expand(holderElement, outerElement, innerElement, collapseWidth, collapseHeight, expandWidth, expandHeight, expandPosition, pushDown);
                    }, expandDelay * 1000);
                }

                if (innerElement.addEventListener) {
                    innerElement.addEventListener('mouseover', prepareExpand, false); 
                    innerElement.addEventListener('mouseout', prepareCollapse, false);
                } else if (innerElement.attachEvent)  {
                    innerElement.attachEvent('onmouseover', prepareExpand); 
                    innerElement.attachEvent('onmouseout', prepareCollapse);
                }

                prepareCollapse();
            }
        }

    })();

})('undefined' === typeof inFIF || 'undefined' === typeof inDapIF ? window : window.parent);
