$(function() {
    $(".circles").on("click",disappear);
    setInterval(increase, 250);

   }); 

function disappear() {
    $(this).remove();
   }

function increase(){
    let growthAmount = $("#growth_amount").val();
    let growthRate = $("#growth_rate").val();

    $(".circle").css("width", parseInt($("#circle").css("width"))+10+"px");
    $(".circle").css("height", parseInt($("#circle").css("height"))+10+"px");
}

function random(){
    return Math.floor(Math.random() * 256);
  }

function createCircle(){
    let numberOfCircle = $("#numberOfCircle").val();
    let width = $("#width").val();
    
    for(let i = 0; i < numberOfCircle; i++){
        let x = random();
        let y = random();
        let z = random();
        let backgroundColor = `rgb(${x},${y},${z})`;
        let $circleDiv = $('<div class="circles">')
        $circleDiv.css({
            'width': width + 'px',
            'height': width + 'px',
            'background-color': backgroundColor,
            'left': random() * 2 + 'px',
        });
        $("#container").append($circleDiv);
    }




}



   
   