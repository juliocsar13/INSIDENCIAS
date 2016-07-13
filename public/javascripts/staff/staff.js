$(function(){

        var table_staff = $("#table_staff").dataTable({
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

        var btnEditSubmitStaff = $("#btnStaffModal");
        var btnSaveSubmitStaff1 = $("#btnSaveSubmitStaff");
//
        btnEditSubmitStaff.live('click',EditSubmitStaff);
        btnSaveSubmitStaff1.live('click',SaveSubmitStaff);

        function EditSubmitStaff(){

            self = $(this);

            var id = self.data('id');

            $.get('/usuarios/' + id)
                .done(function(staff){

                    $("#editIdStaff").val(staff.id)
                    $("#editDniStaff").val(staff.dni)
                    $("#editRoleStaff").val(staff.role)
                    $("#editNameStaff").val(staff.name)
                    $("#editLastnameStaff").val(staff.lastname)
                    $("#editEmailStaff").val(staff.email)
                    $("#editDependenceStaff").val(staff.dependence)
                    $("#editPasswordStaff").val(staff.password)
                    $("#editPhoneStaff").val(staff.phone)
                    $("#editRecorderStaff").val(staff.recorder)
                    $("#editDateStaff").val(staff.register_date_staff)

                })
        }

        function SaveSubmitStaff(){

            var data = {};

            data.dni                  = $("#editDniStaff").val();
            data.role                 = $("#editRoleStaff").val();
            data.name                 = $("#editNameStaff").val();
            data.lastname             = $("#editLastnameStaff").val();
            data.email                = $("#editEmailStaff").val();
            data.dependence           = $("#editDependenceStaff").val();
            data.password             = $("#editPasswordStaff").val();
            data.phone                = $("#editPhoneStaff").val();
            data.recorder             = $("#editRecorderStaff").val();
            data.register_date_staff  = $("#editDateStaff").val()

            var IdStaff  = $("#editIdStaff").val();

            $.post('/usuarios/' + IdStaff , data)
                .done(function(){

                })
        }


});
