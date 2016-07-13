$(document).ready(function() {
  $('#form-dependence-edit').bootstrapValidator({
	 message: 'Este valor no es valido',
	 feedbackIcons: {
		 valid: 'glyphicon glyphicon-ok',
		 invalid: 'glyphicon glyphicon-remove',
		 validating: 'glyphicon glyphicon-refresh'
	 },
    fields: {
    nameDependence : {
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
    siglas: {
      validators: {
        notEmpty: {
          message: ' '
        }
      }
    },
  }
});
});
