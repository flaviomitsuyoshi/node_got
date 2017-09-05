/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function() {
	var db = new mongo.Db(
		'got', // string do nome do banco de dados
		new mongo.Server(
			'localhost', //string contendo o endereço do servidor
			27017, //porta de conexão
			{} //config do server
		),
		{} //config do db
	);

	console.log('mongodb okey!');

	return db;
}

module.exports = function(){
	return connMongoDB;
}