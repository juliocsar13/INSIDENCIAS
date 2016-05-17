"use strict"
module.exports = function(sequelize,DataType){

	var User = sequelize.define("User",{

		user:DataType.STRING

	},{
		/*classMethods:{
			associate:function(models){
				User.belongsToMany(models.MaterialIB,{through:models.Solicita})
			}
		}*/
	})
	return User;
}
/*lastname:DataType.STRING,
		DNI:DataType.STRING,
		direccion:DataType.STRING,
		telefono:DataType.INTEGER*/
