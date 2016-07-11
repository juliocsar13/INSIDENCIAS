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
})
