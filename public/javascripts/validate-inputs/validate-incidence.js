$(document).ready(function() {
  $('#form-incidence').bootstrapValidator({
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
      }
      },
    dependence: {
      validators: {
        notEmpty: {
          message: ' '
        }
      }
    },
    priority: {
      validators: {
        notEmpty: {
          message: ' '
        }
        regexp: {
         regexp: /^[0-9]+$/,
         message: ' '
       }
      }
    },
    notificacionMeans: {
      validators: {
        notEmpty: {
          message: ' '
        }
      }
    },
    nameCostumer: {
      validators: {
        notEmpty: {
          message: ' '
        }
      }
    },
    technical: {
      validators: {
        notEmpty: {
          message: ' '
        }
      }
    },
    state: {
      validators: {
        notEmpty: {
          message: ' '
        }
      }
    },
    registration_date: {
      validators: {
        notEmpty: {
          message: ' '
        }
      }
    },
    description: {
      validators: {
      notEmpty: {
        message: ' '
      }
    }
    },
    comment: {
      validators: {
        notEmpty: {
          message: ' '
        }
      }
    }
  }
});
});
