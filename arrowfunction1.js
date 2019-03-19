var inputs = process.argv.slice(2); //Hello, arrow, functions
var result = inputs
	.map(x => x[0]) //Hello => H, arrow => a, functions => f
	.reduce((x,y) => x + y, ''); 
console.log(`[${inputs}] becomes "${result}"`)

//["Hello", "arrow", "functions"] => ["H", "a", "f"]
//["H", "a", "f"] => "Haf"

//H + a
//Ha + f

//function a(x,y)
//{
//	return x+y;
//}