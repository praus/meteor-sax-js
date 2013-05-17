Package.describe({
    summary: "NodeJS's sax packaged for meteor."
});

Package.on_use(function (api) {
    //api.use('jquery', 'client');
    api.add_files([
        'lib/sax.js'
    ], 'server'
    );

});
Npm.depends({sax:"0.5.2"});
