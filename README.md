## Tiny module system for Meteor

A modules system for Meteor providong hooks in templates and functional mixins.

### Template Hooks

In your templates, create a pointcut:

    <div class="toolbar">{{> runHooks 'toolbarActions'}}</div>

In your modules, register the hooks:

	modules.push('toolbarActions', 20, custom01Action);
	modules.push('toolbarActions', 10, custom02Action);


List all the elements of the ordered list as an array:

	modules.list('toolbarActions')

returns [custom02Action, custom01Action]


### Helpers Hook

In your templates:

	{{callHook 'myHook'}}


In your modules:

	modules.myHook = function () {};

### Function Hooks

#### Single function

Add a function in the modules:

	modules.myFunction = function (args) {};
	
Call the function:

	modules.call('myFunction', this, args);



#### Multiple functions


	modules.myFunctions = [];
	modules.myFunctions.push(function(a){ return a });     // f1
	modules.myFunctions.push(function(b){ return b + 1 }); // f2
	modules.myFunctions.push(function(c){ return c + 2 }); // f3

call `f1(1) && f2(1) && f3(1)`:

	modules.calls('myFunctions', this, 1);

returns t;


Call `f1(f2(f3(1)))`:

	modules.compose('myFunctions', this, 1);

returns 4
