$(function(){
    if(localStorage.getItem('token'))
    $('#login-btn').click(login);

    function login(e){
        e.preventDefault();
        var formData = {
          'dni': $('input[name=dni]').val(),
          'password': $('input[name=password]').val()
        };
        console.log('AJAX RESULT',formData)

        $.ajax({
        type: "POST",
        url: 'http://localhost:3002/login',
        data: formData,
        async: false,
        success: function (result) {
            console.log('AJAX RESULT',formData)
            $('input[name=token]').val(result.token); // para enviar el token al login dela webapp
            $('#login-form').submit();
            localStorage.setItem('token', result.token);
            localStorage.setItem('dni', result.dni);
        },
        dataType: 'json'
        });
    }
})
