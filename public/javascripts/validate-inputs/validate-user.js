$(document).ready(function() {

    $('#form-user').validate({
        rules: {
            name: {
                required: true
            },
            dni: {
                required: true,
                number: true
            }

        },
        messages: {
            name: "Please enter a valid Name."
        },

        submitHandler: function(form) { // just for demo
            alert('valid form');
            return false;
        }
    });
});
