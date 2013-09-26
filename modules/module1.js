define(function(require)
{
	
	var sayHello = function()
	{

		return "hello world";
	};
	var Api = {

		sayHello: sayHello,
		sqrt: Math.sqrt,
		fart: function(){ return "smell"}
	}

return Api;
});