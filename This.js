/* case 1. console.log(this)

a. in node environment

1. Global Context in Node.js:
In Node.js, when you're in the global execution context (outside of any function), this doesn't refer to
the global object (global). Instead, it refers to the module.exports (which is the object that is used to export
functions, variables, or objects from the module).So when you do console.log(this) in the global context
(outside of a function), it logs an empty object ({}) because this refers to module. exports, and it typically
starts as an empty object.

Example:
javascript
Copy
Edit
Outside any function in Node.js (Global Context)
console.log(this);  // This will log an empty object `{}` because it refers to `module.exports`


b. in the browser give the window object.

------case 2.----
function regularFunction() {
  console.log(this);  // In Node.js, this refers to `global`
}
regularFunction();

When you call console.log(this) inside a regular function, this refers to the global object
(in Node.js, this is the global object).So in a regular function inside Node.js (when executed in the global context), 
it refers to the global object (not module.exports), and it will show the global object, but when logged, it might 
print [object global] or simply an empty object {} because the console doesn't expand it by default.


-------case3-----
3. Arrow Function in Node.js:
In contrast, an arrow function lexically binds this, meaning it takes the value of this from the surrounding context. 
Since arrow functions don’t have this, so they inherit it from where they are defined.
If you use an arrow function in the global context (outside of a module or function), this will still refer 
to the module. exports (the global context in Node.js).






Key Differences in Node.js:
1. In the Global Context (outside of functions): this refers to the module. exports, not the global object (global).
2. Regular Function: this refers to global when inside a regular function in the global context.
3. Arrow Function: this is an arrow function inside the global context that will also refer to the module.exports 
4.(since arrow functions inherit this from the outer context).
5. Inside a Regular Function (in global scope): this refers to the global object.
6. Inside an Arrow Function (in global scope): this refers to the module. exports because arrow 
functions do not have their own and inherit from the surrounding context.




--by Vivek 

*/

