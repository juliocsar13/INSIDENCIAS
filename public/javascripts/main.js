$(function(){

    $(document).on('show.bs.modal', '.modal', function () {
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        $(this).css('z-index', zIndex);
        setTimeout(function() {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
    })


    $("#btn-login").click(login)
        function login(e){
            e.preventDefault();
            var dni = $('#dniLg').val()
            localStorage.setItem('dniLg',dni);
    }
});
