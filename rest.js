module.exports = function average(...args)
{
	//args.length;
	var sum = 0;
	args.forEach(function(newValue)
	{
		sum+=newValue;
	});
	
	return sum/args.length;
}