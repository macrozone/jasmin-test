require.config({
   
    paths: {
        jquery: 'vendor/jquery-2.0.3.min',
        'jasmine': 'vendor/jasmine-1.3.1/jasmine',
        'jasmine-html': 'vendor/jasmine-1.3.1/jasmine-html',
       
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});


require(['jquery', 'jasmine-html'], function ($, jasmine) {

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('specs/module1');



    $(function () {
        require(specs, function (spec) {
            jasmineEnv.execute();
        });
    });

});