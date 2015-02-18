
/*
 * The main object.
 * It allow you to share informations between packages and the main application
 * 
 * You can add your slots here.
 */
modules = {};
/*
 * Share your collections between packages. 
 */
modules.collections = {};

/*
 * Push in an ordered list in a dictionary.
 * Used to push templates for the hooks
 */
modules.push = function(key, order, value){
    if (modules[key] === undefined)
        modules[key] = [];
    if (modules[key][order] === undefined)
        modules[key][order] = [];

    modules[key][order].push(value);
};

/*
 * List the elements associated the key. The list is ordered.
 */
modules.list = function(key) {
    if (modules[key] === undefined)
        return null;
    return _.flatten(_.values(modules[key]) , true);
};

/*
 * Call a function associated to the key
 */
modules.call = function(key, context, args){
    if (modules[key] !== undefined)
        return modules[key].call(context, args);
    return null;
};

/*
 * Call all the functions associated to the key
 * Returns true if all functions returns true. Return false otherwise.
 */
modules.calls = function(key, context, args){
    if (modules[key] === undefined)
	return null;

    var mapping = _.map(modules[key], function(f){return f.call(context, args);});
    return _.all(mapping);
};

/*
 * Compose all the functions associated to the key
 * ==> f3(f2(f1(args)));
 */
modules.compose = function(key, context, args){
    if (modules[key] === undefined)
	return args;
   return  _.compose.apply(context, this.list(key))
	.call(context,args);
};
