# keypressmeter
Measures the speed of pressed keys of an input.

Default Configuration:
	  const Reset = 3000; // reset time is set to 3000ms.
Usage:
1. Add 'speedcheck' class on your input element
2. Append a <span> with 'speecheck' className where you would like to show speed indicator.

Example:
    <div>
        <input type="textbox" value="" placeholder="Start Typing.." class="speedcheck">
        <span class="speedcheck"></span>        
    </div>
