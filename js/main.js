

function contactSubmit() {
    var email = $("#email").val(),
        message = $("#message").val();

    $.ajax({
        type: "POST",
        url: 'https://7vvltdsvu5.execute-api.us-east-1.amazonaws.com/prod/',
        data: JSON.stringify({
            'email': email,
            'message': message
        }),
        success: function(res){
            $('#hide-on-contact-submit').hide();
            $('#show-on-contact-submit-success').show();
        },
        error: function(){
            $('#hide-on-contact-submit').hide();
            $('#show-on-contact-submit-failure').show();
        }
    });
}

function recaptchaCallback() {
    $('#contact-form-submit-button').removeAttr('disabled');
}

function showForm(){
    $('.hide-contact').addClass('animated fadeOutLeft faster');
    $('.hide-contact').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $('.mobile-hide').removeClass('mobile-hide');
        $('.hide-contact').addClass('mobile-hide');
    });
}