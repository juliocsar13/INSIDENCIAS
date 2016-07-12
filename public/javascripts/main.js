$(function(){

    var toogleIncidenciaBtn = $('.toggleIncidencia');

    toogleIncidenciaBtn.live('click',toggleIncidencia);

    function toggleIncidencia(){
        var data ={};
        self = $(this);

        if(self.hasClass('btn-primary')){

            data.state = "atendido";
        }else{
            data.state = "pendiente";
        }
        var state = self.data('id');
        
        $.post('/incidencias/' + state , data)
            .done(function(){
                console.log("AQUI EN MAIN JS",state)

                if(self.hasClass('btn-primary')){

                    self.removeClass('btn-primary');
                    self.addClass('btn-success');
                    self.removeClass('btn-content-pendiente')
                    self.addClass('btn-content-atendido');




                } else {
                    self.removeClass('btn-success')
                    self.addClass('btn-primary')
                    self.removeClass('btn-content-atendido')
                    self.addClass('btn-content-pendiente')

                }
            })

    }

    $(document).on('show.bs.modal', '.modal', function () {
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        $(this).css('z-index', zIndex);
        setTimeout(function() {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
    })

    function updateClock() {
        var date = new Date();
        var dateFormated = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear() +' | '+ date.getHours() +':'+date.getMinutes()+':'+date.getSeconds();
        $("#dateIncidencia").val(dateFormated);
        $("#datePerson").val(dateFormated);
        $("#dateStaff").val(dateFormated);

    }

    setInterval(updateClock, 1000);

    /*$("#select_costumer").change(function(){

           if($(this).val() == "cliente"){

               $("#passwordHiden").hide();

           }else{

             $("#passwordHiden").show();

           }
    })*/
    $('.select2-costumer-incide').select2({
        placeholder:"Seleccionar cliente"
    });

    $('.select2-tecnico-incide').select2({
        placeholder:"Seleccionar tecnico"
    });
    $('.select2-dependence-incide').select2({
        placeholder:"Seleccionar dependencia"
    });

    $('.select2-dependence-staff').select2({
        placeholder:"Seleccionar dependencia"
    });



});
