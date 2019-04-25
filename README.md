# KeyPressMeter with jQuery
Measures the speed of pressed keys of an input.

### Default Configuration:
A timer will reset current speed measurement and will start measurement over.
```
const Reset = 3000; // reset time is set to 3000ms
```

### Usage:
1. import jQuery Library
2. Add 'speedcheck' class on your input element
3. Append a 'span' element with 'speecheck' className where you would like to show speed indicator.


### Example:
```
<div>
<input type="textbox" value="" placeholder="Start Typing.." class="speedcheck">
<span class="speedcheck"></span>        
</div>
```
