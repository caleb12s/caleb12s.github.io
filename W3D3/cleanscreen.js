$(function() {

    $("#btn").on('click',function(){
        
        let growthRate = parseInt($("#growth_rate").val());
        let growthAmount = parseInt($("#growth_amount").val());
        let numberOfCircle = parseInt($("#numberOfCircle").val());
        let width = parseInt($("#width").val());
        createCircle(numberOfCircle,width,growthRate,growthAmount);
    });

    $("#container").on('click','.circles',function(event){
        disappear(event.target);
    });

    $("#container").on('mouseover','.circles',function(event){
        $(event.target).css({
            'opacity':'1'
        });
    })
    $("#container").on('mouseleave','.circles',function(event){
        $(event.target).css({
            'opacity':'0.5'
        });
    })

   }); 

function disappear(target) {
    $(target).remove();
   }

function increase(amount){
    

    let prevAmount = $(".circles").css('width');
    let i = 0;
    // console.log(parseInt(prevAmount));

    $(".circles").css("width", (parseInt(prevAmount) + parseInt(amount))+"px");
    $(".circles").css("height", (parseInt(prevAmount)+ parseInt(amount))+"px");
}

function random(){
    return Math.floor(Math.random() * 255);
  }

function removeElements(){
    $(".circles").remove();
}



function createCircle(numberOfCircle,width,rate,amount){

    // removeElements();

    for(let i = 0; i < numberOfCircle; i++){
        let x = random();
        let y = random();
        let z = random();
        let backgroundColor = `rgb(${x},${y},${z})`;
        let circleDiv = $('<div class="circles">')
        circleDiv.css({
            'width': width + 'px',
            'height': width + 'px',
            'background-color': backgroundColor,
            'left': random() *3 + 'px',
            'border-radius':'50%',
            'position': 'fixed',
            'bottom': '50px',
            'right': '50',
            'float': 'left',
            'opacity': '0.5'
        });
        $("#container").append(circleDiv);

    }
    // setInterval(function(){
    //     increase(amount);
    // }, rate);
}



   
   