What is a JavaScript closure?

Who knows. Let's explore it some more.

What is a closure?

A closure is a function that accesses variables outside its immediate lexical scope.

Why do we care about closures in JavaScript?

QUOTE

Here the number x is a literal number. As with other literals in JavaScript, when foo is called, the number x is copied into foo as its argument x.

On the other hand, JavaScript always uses references when dealing with Objects. If say, you called foo with an Object, the closure it returns will reference that original Object!

function foo(x) {
  var tmp = 3;
  return function (y) {
    alert(x + y + tmp);
    x.memb = x.memb ? x.memb + 1 : 1;
    alert(x.memb);
  }
}
var age = new Number(2);
var bar = foo(age); // bar is now a closure referencing age.
bar(10);
As expected, each call to bar(10) will increment x.memb. What might not be expected, is that x is simply referring to the same object as the age variable! After a couple of calls to bar, age.memb will be 2! This referencing is the basis for memory leaks with HTML objects.

ENDQUOTE

What makes closures helpful in JavaScript?

(function(){
	var counter = 0;
	$('.update-counter').click(function() {
		counter = counter + 1;
	});
})()

i.e. event driven programming
- when an event happens call this function
- this function can access and mutate variables defined outside itself

What about closures causing memory leaks?

https://www.meteor.com/blog/2013/08/13/an-interesting-kind-of-javascript-memory-leak


What are some examples of closures?

var foo = function(){
	var counter = 0;
	return function() {
		counter = counter + 1;
		return counter;
	}
}

var bar = foo();
console.log(bar()); // 1
console.log(bar()); // 2








NOTES
-scope is created when a function is called
-in javascript, we have function scope, which belongs to a function call
-if you want a block scope, you need to create an immeditiately invoking function
-lexical scope => free variables belong to a parent scope (bound variables belong to the current scope)
-variables are resolved to their nearest scope