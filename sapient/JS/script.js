$.ajax({
    url: 'JSON/carousel-data.json'
}).done(function(data) {
    var newHTML = [];
    for (var i = 0; i < data.length; i++) {
        newHTML.push('<li><img src="css/' + data[i].image + '" title="' + data[i].heading + '" /></li>');
    }
    $("#bxslider").html(newHTML.join(""));
    var slider = $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true,
        controls: false
    });
    slider.reloadSlider();

});
$('#inputSubmit').on("click", function() {
    var nameVal = $('#inputName').val(),
        passwordVal = $('#inputPassword').val(),
        confirmPasswordVal = $('#inputConfirmPassword').val(),
        emailVal = $('#inputEmail').val(),
        websiteVal = $('#inputWebsite').val(),
        name = /^[^\s]+(\s.*)?$/,
        password = /[0-9a-zA-Z]{6,}/,
        email = /@(?!.{254})(?!sapient\.com$)(([a-z0-9][-a-z0-9]{0,61})?[a-z0-9]\.)+com$/,
        websiteURL = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,
        nameBool, passBool, confirmPassBool, emailBool, wesiteBool;
    if (!name.test(nameVal)) {
        $('#inputName').parent().addClass('error');
        $('#inputName ~ span.msg').html('Please enter Firstname');
        nameBool = 0;
    } else {
        $('#inputName ~ span.msg').html('');
        $('#inputName').parent().removeClass('error');
        nameBool = 1;
    }
    if (!password.test(passwordVal)) {
        $('#inputPassword').parent().addClass('error');
        $('#inputPassword ~ span.msg').html('Please enter atleast 6 characters');
        passBool = 0;
    } else {
        $('#inputPassword ~ span.msg').html('');
        $('#inputPassword').parent().removeClass('error');
        passBool = 1;
    }
    if (passwordVal !== confirmPasswordVal) {
        $('#inputConfirmPassword').parent().addClass('error');
        $('#inputConfirmPassword ~ span.msg').html('Confirm password is not matching with Password');
        confirmPassBool = 0;
    } else {
        $('#inputConfirmPassword ~ span.msg').html('');
        $('#inputConfirmPassword').parent().removeClass('error');
        confirmPassBool = 1;
    }
    if (!email.test(emailVal)) {
        $('#inputEmail').parent().addClass('error');
        $('#inputEmail ~ span.msg').html('Please enter valid email address');
        emailBool = 0;
    } else {
        $('#inputEmail ~ span.msg').html('');
        $('#inputEmail').parent().removeClass('error');
        emailBool = 1;
    }
    if (!websiteURL.test(websiteVal)) {
        $('#inputWebsite').parent().addClass('error');
        $('#inputWebsite ~ span.msg').html('Invalid Website URL');
        wesiteBool = 0;
    } else {
        $('#inputWebsite ~ span.msg').html('');
        $('#inputWebsite').parent().removeClass('error');
        wesiteBool = 1;
    }
    if (nameBool && passBool && confirmPassBool && emailBool && wesiteBool) {
        $('.noMarginLeft').removeClass('noDisplay').addClass('display');
    } else {
        $('.noMarginLeft').removeClass('display').addClass('noDisplay');

        console.log("fa");
    }
});
