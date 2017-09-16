module.exports=function(sequelize, DataTypes){
	var User = sequelize.define("User", {
		username: DataTypes.STRING,
		img: DataTypes.STRING,
		group: DataTypes.INTEGER,
		wishlist: DataTypes.STRING
	});
	return User;
};