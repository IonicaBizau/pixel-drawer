$(document).ready(function() {
    setHandlers();
});

function setHandlers() { 
    var canvas;
    // Delete canvas
    $(".black-and-white").live("click", function() {
        $("#black-and-white-modal").modal("show");
        canvas = $(this).parent().parent().find(".canvas");
        
    });

    $("#convert-to-black-and-white").on("click", function() {
        var htmlCode = canvas.html();

        var pixels = [
            "█",
            "▓",
            "▒",
            "░",
            " "
        ];

        
                <div class="color red"> </div>
                <div class="color orange"> </div>
                <div class="color yellow"> </div>
                <div class="color green"> </div>
                <div class="color blue"> </div>
                <div class="color indigo"> </div>
                <div class="color violet"> </div>
                <div class="color white"> </div>
                <div class="color gray"> </div>
                <div class="color black active"> </div>

        $("#delete-modal").modal("hide");
    });  
}
