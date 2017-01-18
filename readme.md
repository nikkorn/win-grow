# win-grow

> Simple tool for enlarging elements to fill the browser window.

## Install

```sh
$ npm install --save win-grow
```

## Documentation

### Examples

#### Toggle an element to fill the browser window 

```js
const element = document.getElementById('box');

/** Make the element fit the browser window. */
wingrow.toggle(element);

wingrow.isWindowFilled(); // 'true'

/** Revert the element back to its original size and dimensions. */
wingrow.toggle(element);

wingrow.isWindowFilled(); // 'false'
```

#### Swap the currently expanded element with another 

```js
const firstElement  = document.getElementById('box-1');
const secondElement = document.getElementById('box-2');

/** Make the first element fit the browser window. */
wingrow.toggle(firstElement);

/** Make the second element fit the browser window. */
wingrow.toggle(secondElement);

/** Revert an expanded element is there is one. */
wingrow.close();
```

### Methods

#### .toggle(element)

Accepts a DOM element and expands it to fill the browser window.

If this method is called with an element which is expanded using `win-grow`, it will be reverted to it original position and dimensions.

If there is already an expanded element, and this method is called with a different element, the actively expanded element will be switched to the new one.

#### .isWindowFilled()

Returns `true` if `win-grow` is filling the window with an expanded element.

#### .close()

Will revert any currently expanded element to its original position and dimenstions.



## License

MIT © [Nikolas Howard]