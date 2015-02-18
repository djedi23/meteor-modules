// -*- coding: utf-8 -*-

Tinytest.add('Modules - Helpers - Hooks', function (test) {
    test.notEqual(Template.runHooks ,undefined,"Hooks helper declared");
    test.notEqual(Template.runHooks.__helpers[' templates'] ,undefined,"Hooks templates list declared");
});