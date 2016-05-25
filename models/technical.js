"use strict"
module.exports = function(sequelize,DataType){

	var Technical = sequelize.define("Technical",{

		name:DataType.STRING,
        lastname:DataType.STRING,
        dni:DataType.STRING,
        phone:DataType.STRING,
        email:DataType.STRING,
		turno:DataType.STRING


	},{
		/*classMethods:{
			associate:function(models){
				User.belongsToMany(models.MaterialIB,{through:models.Solicita})
			}
		}*/
	})
	return Technical;
}
