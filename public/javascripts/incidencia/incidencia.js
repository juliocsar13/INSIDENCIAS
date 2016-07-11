$(function(){






    var table_incidencias = $("#table_incidencias").dataTable({

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


/*    $("#select-state").on('change', function() {
        filter by selected value on second column
                table_incidencias.fnFilter($(this).val(), 10);
            });
            $("#select-medio").on('change', function() {
                //filter by selected value on second column
                table_incidencias.fnFilter($(this).val(), 4);
            });*/

})
