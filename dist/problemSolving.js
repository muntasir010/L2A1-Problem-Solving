"use strict";
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
formatString("hello");
formatString("GOOD MORNING");
formatString("Hello World");
formatString("GOOD BYE");
