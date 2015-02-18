Package.describe({
    summary: 'Tiny modules system for Meteor',
    version: '0.1.0',
    git: 'https://github.com/djedi23/meteor-modules.git'
});

Package.onUse(function(api){

    api.use([
        'blaze@2.0.3'
        ,'templating@1.0.9'
    ], 'client');

    api.addFiles(['modules.js'],
		 ['client','server']);

    api.addFiles(['client/helpers.html',
                  'client/helpers.js'],
		 ['client']);

    
    api.export('modules', ['client','server']);
});


Package.onTest(function (api) {
    // Allows you to use the 'tinytest' framework
    api.use(['tinytest@1.0.0'],['client','server']);
    // Sets up a dependency on this package
    api.use(['djedi:modules'], ['client','server']);
    api.use([
        'blaze'
    ], 'client');
    

    // Specify the source code for the package tests
    api.addFiles(['tests/modules.js'], ['client', 'server']);
    api.addFiles(['tests/client/helpers.js'], 'client');
});