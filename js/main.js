/*
    Author: Ionica Bizau
    Copyright (C) 2013 Ionica Bizau
    GNU LICENSE
    -------------------------------
    HANDLERS FOR ASCII DRAWINGS
    -------------------------------
*/



$(document).ready(function() {
    setHandlers();   
});

function setHandlers() {
    // Changing the color
    $(".color").on("click", function() {
        $(".color").removeClass("active");
        $(this).addClass("active");
    });
    
    // Create a new canvas
    $(".create-new .canvas").on("click", function() {
        var width = 0,
            height = 0,
            color = "";
        
        var empty = false;
        $(".create-new").find("input[type='text']").each(function() {
            if ($(this).val() === "") {
                $(this).css("background", "yellow");
                empty = true;
            }
            else {
                $(this).css("background", "white");
            }
        });
        
        if (empty) {
            return;
        }

        width = parseInt($("#width").val());
        
        if (!width) {
            width = 30;
        }
        
        height = parseInt($("#height").val());
        if (!height) {
            console.log(height);
            height = 15;
        }
        
        color = $("#color").val();
        
        createNewCanvas(width, height, color);
    });
    
    // Delete canvas
    $(".delete").live("click", function() {
        $("#delete-modal").modal("show");
        var canvas = $(this).parent().parent();
        
        $("#delete-picture").on("click", function() {
            canvas.remove();
            $("#delete-modal").modal("hide");
        });  
    });

    // Export HTML
    $(".export-html").live("click", function() {
        $("#export-html-modal").modal("show");
        var canvas = $(this).parent().parent().find(".canvas");
        var htmlCode = canvas.html().trim().replace(/<br \/>/g, "<br />\n");

        var styles = "<style>\n" +
                        "\t.canvas {\n" + 
                           "\t\tfont-family: monospace;\n" + 
                            "\t\tmargin: 15px;\n" + 
                        "\t}\n" + 

                         "\t.canvas .pixel {\n" + 
                             "\t\tdisplay: inline-block;\n" + 
                             "\t\tfont-size: 18px;\n" + 
                         "\t}\n" +
                    "</style>\n";

        htmlCode = styles + "<div class=\"canvas\">" + htmlCode + "</div>";

        console.log(htmlCode);
        $("#html-export-code").val(htmlCode);
    });

    // --------------------------
    // Convert to black and white
    // See conver.js
    // --------------------------

    $(".btn-import").on("click", function() {
        console.log("...");
        $("#import-html-modal").modal("show");

    });
    
    $("#html-import").on("click", function() {
        var htmlCode = $("#html-import-code").val().trim();
        importNewCanvas(htmlCode);
    });
}

/**
 * Create a new canvas: width, height, color
 * @param {Object} w
 * @param {Object} h
 * @param {Object} c
 */
function createNewCanvas(w, h, c) {
    var template = $(".template").clone().removeClass("template");
    var canvas = template.find(".canvas");
    
    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            var pixel = $("<div class='pixel'>");
            pixel.text("█");
            pixel.css("color", c);

            canvas.append(pixel);
        }
        canvas.append("<br />");
    }
    
    $(".colors").after(template);
}

function importNewCanvas(htmlCode) { 
    var template = $(".template").clone().removeClass("template");
    var canvas = template.find(".canvas");

    canvas.html(htmlCode);
    $(".colors").after(template);
}
