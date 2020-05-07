$(document).ready(function(){
    // When mouse reach to edge of the element with class named boundary.
    // it will call the lose() functon which set background color red and change the status 
    $(".boundary").mouseenter(function(){
        lose();
    });
    // When mouse reacthes to the edge of the element with id nmaed status 
    // it will call change the status as you win.
    $("#end").mouseenter(function(){
        $("#status").text("You win! :]");
    });
    // When mouse leaves the element with id named maze 
    // it will call the lose() function which sets background color into red and change the status 
    $("#maze").mouseleave(function(){
        lose();
    });
    //  When mouse click the element with element with id name start
    // It will call reset function which will reset the every changes that made so far.
    $("#start").click(function(){
        reset();
    });

    function lose(){
        $(".boundary").css("background-color","red");
        $("#status").text("Sorry, you lost. :[");
    };
    function reset(){
        $(".boundary").css("background-color","#eeeeee")
        $("#status").text("Click the \"S\" to begin.")
    }


});