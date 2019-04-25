# KeyPressMeter with jQuery
Measures the speed of pressed keys of an input.

### Default Configuration:
A timer will reset current speed measurement and will start measurement over.
```
const Reset = 3000; // reset time is set to 3000ms
```

### Usage:
1. import speedcheck.js file.
2. Add 'speedcheck' class on your input element
3. Append a 'span' element with 'speecheck' className where you would like to show speed indicator.


### Example:
```
<div>
<input type="textbox" class="speedcheck">
<span class="speedcheck"></span>        
</div>
```

## Built With

* [jQuery](https://jquery.com/) - JS Library

## License

This project is licensed under the GNU License - see the [LICENSE.md](LICENSE.md) file for details
