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

// implement a Queue using two stacks;

function Queue() {
	this.stack1 = new Stack();
	this.stack2 = new Stack();
}

Queue.prototype.unshift = function(val) {
	this.stack1.push(val);
}

Queue.prototype.shift = function() {
	if ( this.stack2.count === 0 ) {
		while ( this.stack1.count > 0 ) {
			this.stack2.push(this.stack1.pop())
		}
		return this.stack2.pop();
	} else {
		return this.stack2.pop()
	}
}







