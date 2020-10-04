$(document).ready(function() {
    $('.nextSlide').click(function() {
        var curr = $('.curr');
        var indexCurr = $('.curr').index();
        var indexNext = indexCurr + 1;
        var next = $('.image').eq(indexNext);

        curr.fadeOut(1000);
        curr.removeClass('curr');

        if (indexNext === ($('.image:nth-child(3)').index() + 1)) {
            $('.image').eq(0).fadeIn(800);
            $('.image').eq(0).addClass('curr');
        } else {
            next.fadeIn(800);
            next.addClass('curr');
        }
    });
    $('.prevSlide').click(function() {
        var curr = $('.curr');
        var indexCurr = $('.curr').index();
        var prevIndex = indexCurr - 1;
        var prev = $('.image').eq(prevIndex);

        curr.fadeOut(800);
        curr.removeClass('curr');
        prev.fadeIn(800);
        prev.addClass('curr');
    });
});

function registerValidate() {
    var name = document.getElementById("name");
    var email = document.getElementById("mail");
    var password = document.getElementById("pw");
    var checkbox = document.getElementById("check");

    if (name.value == "") {
        alert("Input Your Name");
        return false;
    }
    if (name.value.length < 2 || name.value.length > 50) {
        alert("Name need 2-50 characters");
        return false;
    }
    if (email.value == "") {
        alert("Input Your Email");
        return false;
    }

    if (password.value == "") {
        alert("Input Your Password");
        return false;
    }

    if (password.value.length < 8 || password.value.length > 24) {
        alert("Password need 8-24 charcters");
        return false;
    }

    var valid = false;
    var gender = document.registerForm.Gender;

    for (var index = 0; index < gender.length; index++) {
        if (gender[index].checked) {
            valid = true;
            break;
        }
    }
    if (valid == false) {
        alert("Choose Your Gender!");
        return false;
    }

    var skinType = registerForm.skinType.value;

    if (skinType == "empty") {
        alert("Choose Your Skin Type!");
        return false;
    }
    if (!checkbox.checked) {
        alert("You must agree with term and condition");
        return false;
    }
}