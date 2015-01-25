/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`.
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0);
 * // => []
 */
var debug = require('debug')('test')

function range(start, end) {
	var _start;
	var _end;
	if(end == undefined){
		_start = 0;
		_end = start;
	}else{
	var _start = start;
	var _end = end;
	}	

	var index;
	var array = [];
	for(index = _start; index < _end; index++){
		array[array.length] = index;
	}


    return array
}


/**
 * Creates an object composed of the picked `object` properties. Property
 * names may be specified as individual arguments or as arrays of property
 * names.
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 *
 */
function pick(object, propertyNames) {
    var array = {};
    var i;
    var j;
    for(i in object){
    	for(j in propertyNames){
    		
    		if(i == propertyNames[j]){
    			array[i] = object[i];
    		}
    	}
    }

    return array
}


/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is invoked with (value)
 */
function some(collection, predicate) {
	var a = false;
	for (var i = 0; i < collection.length; i++){
		if (predicate(collection[i]))
			a = true;
	}

    return a
}

/**
 * Checks if the given callback returns truthy value for **all** elements of a collection.
 */
function every(collection, predicate) {
    var a = true;
	for (var i = 0; i < collection.length; i++){
		if (predicate(collection[i]) == false)
			a = false;
	}

    return a
}

/**
 * Iterates over elements of `collection`, returning the first element
 * that have the properties of the given
 * object, else `false`.
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 *
 * _.find(users, { 'age': 1 })
 * // => { 'user': 'pebbles', 'age': 1,  'active': false }
 *
 */
function find(collection, object) {
	
	for(var x = 0; x < collection.length; x++){
		var flag = new Array();
		for(var y in collection[x]){
			for(var z in object){
				if(y == z){
					
					if(collection[x][y] == object[z]){
						flag.push(true);}
					else{
						flag.push(false);}
				}
			}
		}

	var a = true;
	for(var i = 0; i< flag.length; i++){
		a = a && flag[i];

	}

	if(a == true){
		return collection[x]
	}
	}

	return false;
    }

// Export functions
var lib = {}
lib.range = range
lib.pick = pick
lib.some = some
lib.every = every
lib.find = find

module.exports = lib