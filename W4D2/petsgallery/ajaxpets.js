// $(function(){

//     $("#kitties").on("change",kittiesFunc);
//     $("#puppies").on("change",puppiesFunc)

// });

// function kittiesFunc(){
//     // alert("Kitties!");
//     let animal = "kitty";
//     $.ajax("ajaxpets.php",
//     { "type":"GET",
//       "data":{
//             "animal":animal
//         }      
//     }).done(display);
// }

// function puppiesFunc(){
//     // alert("Puppies!");
//     let animal = "puppy";
//     $.ajax("ajaxpets.php",
//     { "type":"GET",
//       "data":{
//             "animal":animal
//         }      
//     }).done(display);
// }

// function display(data){
//     $("#pictures").html(data);
// }

$(function() {
    $("#puppies").click(updatePictures);
    $("#kitties").click(updatePictures);
});

function updatePictures() {
    var animal = "";
    if ($("#puppies").attr("checked") == "checked") {
        animal = "puppy";
    } else {
        animal = "kitty";
    }
    $.ajax("ajaxpets.php", {
		"type": "get",
		"data": {
        	"animal": animal
		}
    }).done(displayPictures);
}

function displayPictures(data) {
    $("#pictures").html(data);
}

