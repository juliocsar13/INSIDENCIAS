$(document).ready(function() {
  $('#form-dependence').bootstrapValidator({
	 message: 'Este valor no es valido',
	 feedbackIcons: {
		 valid: 'glyphicon glyphicon-ok',
		 invalid: 'glyphicon glyphicon-remove',
		 validating: 'glyphicon glyphicon-refresh'
	 },
    fields: {
    title: {
      validators: {
        notEmpty: {
          message: ' '
        }
      },
      regexp: {
        regexp: /^[A-Z]+$/,
        regexp: /^[a-z]+$/,
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
