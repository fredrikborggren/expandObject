# flashObject

A lightweight expandable advert solution

## Installation

Choose the *one* of the following that works best for you:

- Include expandobject.min.js into HTML
    ```html
<script type="text/javascript" src="expandobject.min.js"></script>
```

- Embed expandobject.min.js into JavaScript

## Usage

Enable Expanding
```javascript
expandObject.enable(elementId, collapseWidth, collapseHeight, collapseDelay, expandWidth, expandHeight, expandDelay, pushDown, expandDirection, expandSmooth);
```

Expand directions:

- top
- top-left
- top-center
- top-right
- left
- center
- right
- bottom
- bottom-left
- bottom-center
- bottom-right

Required HTML setup to work
```html
<div id="elementId">
    <div id="elementId_outer">
        <div id="elementId_inner">
            <div id="elementIdpolite"></div>
            <div id="elementId_main"></div>
        </div>
    </div>
</div>
```

Basic expandable from 930x180 to 930x400
```javascript
expandObject.enable('elementId', 930, 180, 0, 930, 400, 0, !1, 'bottom', !1);
```

Advanced expandable from 930x180 to 930x400 with 2 seconds collapse and expand delay enabled
```javascript
expandObject.enable('elementId', 930, 180, 2, 930, 400, 2, !1, 'bottom', !1);
```

Advanced expandable from 930x180 to 930x400 with `push down` and `transitioning` enabled
```javascript
expandObject.enable('elementId', 930, 180, 0, 930, 400, 0, 1, 'bottom', 1);
```

## History

* __1.0.0__ : Initial build

## Dependencies

None

## License

Copyright (c) 2015 Fredrik Borggren

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
