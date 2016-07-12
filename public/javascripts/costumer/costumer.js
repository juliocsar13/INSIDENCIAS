$(function(){

    var table_costumer = $("#table_costumer").dataTable({
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
    var btnEditCostumer_ = $("#btnEditCostumer");
    var btnSaveCostumer_ = $("#btnSaveCostumer");

    btnEditCostumer_.live('click',getEditCostumers);
    btnSaveCostumer_.live('click',saveAllCostumer);

    function getEditCostumers(){

        self = $(this);
        var id = self.data('id');

        $.get('/clientes/'+ id)
            .done(function(costumer){

                $("#editIdCostumer").val(costumer.id)
                $("#editDniCostumer").val(costumer.dni)
                $("#editNameCostumer").val(costumer.name)
                $("#editRoleCostumer").val(costumer.role)
                $("#editPhoneCostumer").val(costumer.phone)
                $("#editEmailCostumer").val(costumer.email)
                $("#editLastnameCostumer").val(costumer.lastname)
                $("#editRecorderCostumer").val(costumer.recorder)
                $("#editDateCostumer").val(costumer.register_date_person)

            })
    }

    function saveAllCostumer(){
        var data = {};
        data.dni                   = $("#editDniCostumer").val()
        data.name                  = $("#editNameCostumer").val()
        data.role                  = $("#editRoleCostumer").val()
        data.phone                 = $("#editPhoneCostumer").val()
        data.email                 = $("#editEmailCostumer").val()
        data.lastname              = $("#editLastnameCostumer").val()
        data.recorder              = $("#editRecorderCostumer").val()
        data.register_date_person  = $("#editDateCostumer").val()

        var id =  $("#editIdCostumer").val()
        console.log("ID",id)
        $.post('/clientes/'+ id , data)
            .done(function(){

            })
    }
})
