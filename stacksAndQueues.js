// 3.1 add min function to a stack
function Stack() {
	this.min = Number.MAX_SAFE_INTEGER;
	this.count = 0;
	this.stack = [];
}

Stack.prototype.push = function(val) {
	this.stack[this.count] = val;
	if ( this.min > val ) {
		this.min = val;
	}
	this.count++;
}

Stack.prototype.pop = function() {
	let removed = this.stack[--this.count];
	delete this.stack[this.count];
	return removed;
}

Stack.prototype.minNumber = function() {
	return this.min;
}