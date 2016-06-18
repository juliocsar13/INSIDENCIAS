"use strict"
module.exports = function(sequelize,DataType){

	var Person = sequelize.define("Person",{

        dni:DataType.STRING,
		name:DataType.STRING,
        lastname:DataType.STRING,
        email:DataType.STRING,
        phone:DataType.STRING,
        role:DataType.STRING,
        register_date_person:DataType.STRING,
		dependence:DataType.STRING,
		personAdmin:DataType.STRING

	},{
		classMethods:{
			associate:function(models){
				Person.belongsToMany(models.Incidencia,{through:models.IncidenciaPerson})
			}
		}
	});

	return Person;
}

/*
,{
	through:{
		model:Operation,
		unique:false,
		scope:{
			taggable:'post'
		}
	},
	foreignKey:'incidencia_id',
	constraints:false

}
*/
