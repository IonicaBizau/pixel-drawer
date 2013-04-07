$(document).ready(function() {
    var PRESSED_KEY_CODE = 16;
    var pressed = false;
    var activeShiftClass = "shift-active";

    $(document).on("keydown", function(e) {
        if (e.keyCode === PRESSED_KEY_CODE) {
            pressed = true;
            $(".shift-pressed").addClass(activeShiftClass);
        }
    });
    
    $(document).on("keyup", function(e) {
        if (e.keyCode === PRESSED_KEY_CODE) {
            pressed = false;
            $(".shift-pressed").removeClass(activeShiftClass);
        }
    });
    
    $(".pixel").live("click", function() {
        changeColor($(this));
    });
    
    $(".pixel").live("mouseenter", function() {
        if (pressed) {
            changeColor($(this));    
        }
    });
});

function changeColor(element) {
    var color = $(".colors .active").css("background-color");
    element.css("color", color);
}
