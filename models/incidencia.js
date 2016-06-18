"use strict"

module.exports = function(sequelize,DataType){
	var Incidencia = sequelize.define("Incidencia",{
		
		title:DataType.STRING,
        description:DataType.STRING,
		priority:DataType.STRING,
		state:DataType.STRING,
		registration_date:DataType.DATE,
		observation:DataType.STRING,
		comnentTechnical:DataType.STRING,
		state:DataType.STRING,
		notification_means:DataType.STRING,
		dependence:DataType.STRING

	},{
		classMethods:{
			associate:function(models){
				Incidencia.belongsToMany(models.Person,{through:models.IncidenciaPerson})
			}
		}
	})
	return Incidencia;
}


/*,{
	through:{
		model:Operation,
		unique:false
	},
	foreignKey:'person_id'
}*/
