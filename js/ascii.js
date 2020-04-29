(function(){

    "use strict";

    window.onload = function(){
        document.getElementById("start").onclick = startFunc;
        document.getElementById("stop").onclick = stopFunc;
        document.getElementById("animation").onchange = selectAnimationFunc;
        document.getElementById("fontsize").onchange = changeSizeFunc;
        document.getElementById("turbo").onchange = changeSpeedFunc;
    }

    var timer = null;
    var x = 0;
    var text = null;
    var frame = null;
    var temp = null;
    
    function animate(speed){
            text = document.getElementById("text-area");
            frame = ANIMATIONS[document.getElementById("animation").value];
            temp = frame.split("=====\n")

            if (timer !== null) return;
            timer = setInterval(()=> {
                if(x < temp.length) text.value  = temp[x];
                else x=0;
                x++;
            }, speed); 
    }

    function startFunc(){
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        document.getElementById("text-area").disabled = true;
        document.getElementById("animation").disabled = true;
        animate(200);
    }
    function stopFunc(){
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        document.getElementById("text-area").disabled = false;
        document.getElementById("animation").disabled = false;
        clearInterval(timer);
        timer = null;
    }

    function selectAnimationFunc(){
        var textArea = document.getElementById("text-area");
        textArea.value = ANIMATIONS[document.getElementById("animation").value].split("=====\n")[0];
        x = 0;
    }    

    function changeSizeFunc(){
        var textSize = document.getElementById("fontsize").value;
        document.getElementById("text-area").style.fontSize = textSize;
    }

    function changeSpeedFunc(){
            if(document.getElementById("turbo").checked===false){
                animate(200);
            }else{
                animate(50);
            }
    }

})();