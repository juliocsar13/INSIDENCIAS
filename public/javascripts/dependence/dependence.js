$(function(){
    var table_dependence = $("#table_dependence").dataTable({
        "oLanguage": {
            "sSearch": "Buscar : ",
            "sLengthMenu": "Mostrar _MENU_ registros por pagina",
            "sInfo": "Mostrando pagina _PAGE_ de _PAGES_",
            "sEmptyTable": "No se encontraron datos en la tabla",
            "sInfoFiltered": " - filtrado de _MAX_ registros",
            "oPaginate": {
        		"sPrevious": "Anterior",
        		"sNext":     "Siguiente"
        	}
        }

    });

    var btnEditDependence = $('#btnEditDependence');

    btnEditDependence.live('click',getEditDependence)

    function getEditDependence(){
        //var data ={};
        self = $(this);
        var id = self.data('id');
        console.log("data-id",id);

        $.get('/dependencias/' + id)
            .done(function(dependence){
                $("#editIdDependence").val(dependence.id)
                $("#editNameDependence").val(dependence.nameDependence)
                $("#editSiglasDependence").val(dependence.siglas)
        })
    }

    var btnEditSubmitDependence = $('#btnEditSubmitDependences_');

    btnEditSubmitDependence.live('click',SubmitEditDependence)

    function SubmitEditDependence(){

        var data ={};

        data.siglas         = $("#editSiglasDependence").val();
        data.nameDependence = $("#editNameDependence").val();


        var id = $("#editIdDependence").val()
        $.post('/dependencias/' +id , data)
            .done(function(_dependence_){
            })
    }
})
