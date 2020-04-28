window.onload = function () {
    const BigDecBut = document.getElementById('BigDecBut');
    BigDecBut.onclick = function () {
            delayMSG();
    }

    const CheckBox = document.getElementById('myCheckBox');
    CheckBox.onchange = function () {
            myCheckBoxFunc();
    }

    const LatinBut = document.getElementById('LatinBut');
    LatinBut.onclick = function () {
            LatinFunc();
    }

    const MalBut = document.getElementById('MalBut');
    MalBut.onchange = function () {
            Malkovitch();
    }

    function myFunction(){

        const style = window.getComputedStyle(document.getElementById("textarea"),null).getPropertyValue('font-size');
        var fontSize = parseInt(style);
        document.getElementById("textarea").style.fontSize = (fontSize+2)+"pt";

        // document.getElementById("textarea").style.fontSize += "24pt";
        // alert("Hello, world");

    }


    function myCheckBoxFunc(){
        // document.getElementById("textarea").style.fontWeight = "bold";
        // alert("Checked!");
        const func1 = document.getElementById('myCheckBox');
        func1.addEventListener('change', e => {

            if(e.target.checked){
                document.getElementById("textarea").style.fontWeight = "bold";
                document.getElementById("textarea").style.color = "green";
                document.getElementById("textarea").style.textDecorationLine = "underline";
                document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
            }
            else{
                document.getElementById("textarea").style.fontWeight = "normal";
                document.getElementById("textarea").style.color = "black";
                document.getElementById("textarea").style.textDecorationLine = "none";
            }
        });
    }

    var timer = null;
    function delayMSG(){

        if(timer === null){
            timer = setInterval(myFunction,500);
        }else{
            clearInterval(timer);
            timer = null;
        }
    }

    function LatinFunc(){
        // alert("hi");
        let texts = document.getElementById('textarea').value;
        var words = texts.split(" ");

        for(var i = 0; i < words.length; i++){
            // alert(words[i]);
            var W = words[i].toUpperCase().charAt(0);
            if(W==='A'||W==='O'||W==='I'||W==='E'||W==='U'){
                words[i] = words[i]+"ay";
            }
        }
        document.getElementById('textarea').value = words;

    }

    function Malkovitch() {
        const texts = document.getElementById('textarea').value;
        var words = texts.split(" ");

        for(var i = 0; i < words.length; i++){
            // alert(words[i]);

            if(words[i].length >= 5){
                words[i] = "Malkovitch";
            }
        }
        document.getElementById('textarea').value = words;
    }
};
