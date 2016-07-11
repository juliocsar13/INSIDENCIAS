// INIT DATATABLES
$(function () {
	// Init
    var spinner = $( ".spinner" ).spinner();
    var table = $('#table_id').dataTable( {
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
    } );

    var tableTools = new $.fn.dataTable.TableTools( table, {
    	"sSwfPath": "../code/vendors/DataTables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
        "sDom": '<"H"TCfr>t<"F"ip>',
        "bStateSave": true,
        "bJQueryUI": true,
        "sPaginationType": "full_numbers",
        "bProcessing": true,
        "bServerSide": true,
        "buttons": [
               "copy",
               "csv",
               "xls",
               {
                   "sExtends": "pdf",
                   "sPdfMessage": "message.pdf"
               },
               "print"
        ]
    } );
    $(".DTTT_container").css("float","right");
});
