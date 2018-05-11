$(document).ready(function() {

    // var colouredPanel = ($(".theButton").parent());
    // $(colourPanel).on("click", function(){
    //     $(colouredPanel).hide();
    // });

    // // Code Below is Part 1 of the Challenge - When a colored panel is clicked, all panels vanish.

    // $(".container").on("click", function(){
    //     $(".container").hide();
    // });


    // // Code Below is Part 2 of the Challenge - When a colored panel is clicked, just that panel disappears.

    $(".theButton").on("click", function() {
        $(this).hide();
    });


    // // Code Below is Part 3 of the Challenge - When a panel is clicked, all siblings fade to 10% opacity. 

    $(".container").on("click", function() {
        $(this).siblings().fadeTo("slow", 0.1);
    });


    // Code Below is Part 4 of the Challenge - When reset is clicked, all panels revert to full opacity.

    $(".superButton").on("click", function() {
        $(".container").fadeTo("slow", 1);
    });


    // Code Below is Part 5 of the Challenge - When the mouse hovers over a panel, that panel turns black. 

    // $(".theButton").mouseenter(function() {
    //     $(this).css("background-color", "#000");
    // });

    // $(".theButton").mouseenter(function() {
    //     $(this).addClass("makeBlack");
    // });

    // // Code Below is Part 6 of the Challenge - When the mouse moves away, the panel reverts back to its previous colour.

    // $(".theButton").mouseleave(function() {
    //     $(this).removeClass("makeBlack");
    // });

    // Code Below Belongs to the Challenge 3 in Other Traversing Methods - Change the text in the reset button to display the colour (RGB) of the selected panel.

    $(".theButton").on("click", function() {

        var thisButton = $(this).css("background-color");

        $(".superButton").css("color", thisButton);
    });
});




// When a colored panel is clicked, all panels vanish. DONE
// When a colored panel is clicked, just that panel disappears. DONE
// When a panel is clicked, all siblings fade to 10% opacity. DONE
// When reset is clicked, all panels revert to full opacity. DONE
// When the mouse hovers over a panel, that panel turns black. DONE
// When the mouse moves away, the panel reverts back to its previous colour. DONE 
// Had to look at the solution (my CSS class was being overwritten by other colors)

// Change the text in the reset button to display the colour (RGB) of the selected panel. DONE
