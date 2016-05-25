"use strict"
module.exports = function(sequelize,DataType){

	var Costumer = sequelize.define("Costumer",{

		nombre:DataType.STRING,
        apellido:DataType.STRING,
        dni:DataType.STRING,
        telefono:DataType.STRING,
        email:DataType.STRING,
        oficina:DataType.STRING,
        departamento:DataType.STRING,
        tipo:DataType.STRING

	},{
		/*classMethods:{
			associate:function(models){
				User.belongsToMany(models.MaterialIB,{through:models.Solicita})
			}
		}*/
	})
	return Costumer;
}
/*lastname:DataType.STRING,
		DNI:DataType.STRING,
		direccion:DataType.STRING,
		telefono:DataType.INTEGER*/
