$(document).ready(function() {
    
    let t0,t1,vt=0,xt,x0,x1,cleaner;
    const barredKey = [8,9,13,16,17,18,19,20,27,33,34,35,36,37,38,39,40,
                       91,92,93,112,113,114,115,116,117,118,119,120,121,
                       122,123,144,145];
    const Reset = 3000;
    $('input[class="speedcheck"]').keydown(function(e){
            
        const indicator = $('span[class="speedcheck"]:eq('+$(this).index()+')');
        xt = $(this).val().length;
        // if input length is zero, prepare time variables and do not show speed
        if(xt == 0) {
            t0=t1=$.now();
            x0=x1=0;
            indicator.text('');
        }
        // when input area is not empty and ctrl key is not used
        else if(xt-x1 > 0 && e.ctrlKey==false) {
            // check if last key input time is smaller than Reset time
            if($.now()-t1 <= Reset) {
                // check if pressed key is not in barredKey array
                if($.inArray(e.keyCode, barredKey) == -1) {
                    t1=$.now();
                    x1=xt;
                    vt =  Math.ceil((t1-t0)/(x1-x0));  // formula for speed        
                    indicator.text(vt);
                    clearTimeout(cleaner);
                    cleaner = setTimeout(function(){
                                        indicator.text('');
                                        }, Reset);
                }
                // if backspace is pressed
                else if (e.keyCode == 8) {
                t0=t1=$.now();
                x0=x1;
                indicator.text('');
                clearTimeout(cleaner);
                }
            }
            // if reset time is exceeded, startover all parameters
            else {
            t0=t1=$.now();
            x0=xt;
            indicator.text('');
            clearTimeout(cleaner);
            }
        }


        });
    
    });
