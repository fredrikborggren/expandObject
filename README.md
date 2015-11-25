# expandObject

Lightweight flash/image embed solution!

## Expand-/collapseable

##### HTML Requirement

Your chosen element ID must contain the following HTML structure example, but element ID's and classnames are not important nor required-

```html
<div id="myElement">
    <div id="myElement_outer">
        <div id="myElement_inner">
            <div id="myElement_main"></div>
        </div>
    </div>
</div>
```

##### Method

| Argument Name     | Argument Type     | Argument Description  | Argument Options      |
| :---------------: | :---------------: | :-------------------: | :-------------------: |
| elementId         | string            | Appending Element ID  |                       |
| collapseWidth     | integer           | Collapse Width        |                       |
| collapseHeight    | integer           | Collapse Height       |                       |
| collapseDelay     | integer           | Collapse Delay (secs) |                       |
| expandWidth       | integer           | Expanded Width        |                       |
| expandHeight      | integer           | Expanded Height       |                       |
| expandDelay       | integer           | Expanded Delay (secs) |                       |
| pushDown          | boolean           | Push Down             |                       |
| expandDirection   | string            | Expand Direction      | top, top-left, top-center, top-right, center, bottom-left, bottom-center, bottom-right |
| expandSmooth      | boolean           | Expand Transition     | true / false          |



```javascript
flashObject.enable(elementId, collapseWidth, collapseHeight, collapseDelay, expandWidth, expandHeight, expandDelay, pushDown, expandDirection, expandSmooth);
```

##### Example
```javascript
expandObject.enable('myElement', 930, 180, 0, 930, 400, 0, !1, 'bottom', 1);
```

## Requirements

No known dependencies known so far. Found one? Let me know!

## License

Copyright (c) 2015 Fredrik Borggren

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
