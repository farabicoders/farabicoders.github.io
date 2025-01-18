const button = ".button-container";
const highlight = ".button-highlight";
const icon_error = ".icon-error";
const email = ".email";
const email_error = "email-error";
const invalid_text = ".email-invalid-text";

const dropshadow_dark = "var(--ds-dark)";
const dropshadow_light = "var(--ds-light)";

const show = "block";
const hide = "none";

const validateEmail = (input) => {
    return input.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


function errorCSS(valid) {
    if (valid) {
        $(icon_error).css("display", hide);
        $(invalid_text).css("display", hide);
        $(email).removeClass(email_error);
    } else {
        $(icon_error).css("display", show);
        $(invalid_text).css("display", show);
        $(email).addClass(email_error);
    }
}

function validate() {
    const input = $(email).val();

    if (validateEmail(input)) {
        errorCSS(true);
    } else {
        errorCSS(false);
    }
    return false;
}


function buttonHighlight(display) {
    if (display === show) {
        $(highlight).css("display", show);
        $(button).css("filter", dropshadow_dark);
    } else {
        $(highlight).css("display", hide);
        $(button).css("filter", dropshadow_light);
    }
}


$(document).ready(function() {
    $(button).mouseenter(function() {
        buttonHighlight(show);
    })
    $(button).mouseleave(function() {
        buttonHighlight(hide);
    })

    $(button).on("click", function() {
        validate();
    })
})