$(document).ready(function() {
  $('#form-client-edit').bootstrapValidator({
	 message: 'Este valor no es valido',
	 feedbackIcons: {
		 valid: 'glyphicon glyphicon-ok',
		 invalid: 'glyphicon glyphicon-remove',
		 validating: 'glyphicon glyphicon-refresh'
	 },
    fields: {
      dni: {
 			 validators: {
 				 notEmpty: {
 					 message: ' '
 				 },
          stringLength: {
 					 min: 8,
            max: 8,
            message: ' '
          },
          regexp: {
 					 regexp: /^[0-9]+$/,
 					 message: ' '
 				 }
 			 }
 		 },
      name: {
 			 validators: {
 				 notEmpty: {
 					 message: ' '
 				 }
 			 },
       regexp: {
         regexp: /^[A-Za-z]+$/,
         message: ' '
       }
 		 },
      role: {
 			 validators: {
 				 notEmpty: {
 					 message: ' '
 				 }
 			 }
 		 },
      lastname: {
 			 validators: {
 				 notEmpty: {
 					 message: ' '
 				 },
         regexp: {
					 regexp: /^[A-Za-z]+$/,
					 message: ' '
				 }
 			 }
 		 },
      email: {
 			 validators: {
 				 notEmpty: {
 					 message: ' '
 				 }
 			 }
 		 },
      dependence: {
 			 validators: {
 				 notEmpty: {
 					 message: ' '
 				 }
 			 }
 		 },
      password: {
 			 validators: {
 				 notEmpty: {
 					 message: ' '
 				 }
 			 }
 		 },
      phone: {
 			 validators: {
 				 notEmpty: {
 					 message: ' '
 				 },
         regexp: {
          regexp: /^[0-9]+$/,
          message: ' '
        }
 			 }
 		 }

  }
});
});
