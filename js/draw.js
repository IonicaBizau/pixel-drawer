$(document).ready(function() {

    function changeColor(element) {
        var color = $(".colors .active").css("background-color");
        element.css("color", color);
    }

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

    $(".container").on("click", ".pixel", function() {
        changeColor($(this));
    });

    $(".container").on("mouseenter", ".pixel", function() {
        if (pressed) {
            changeColor($(this));
        }
    });
});
