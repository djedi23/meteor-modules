// -*- coding: utf-8 -*-

Template.runHooks.helpers({
    templates: function(){
        return modules.list(this);
    }
});

/*
 * Call a specific hook function.
 * 
 */
Template.registerHelper('callHook', function(hook) {
    return modules.call(hook, this);
});
