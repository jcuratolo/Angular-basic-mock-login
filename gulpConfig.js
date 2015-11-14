module.exports = (function() {
    var base = './';
    var src = 'src/';
    var js = 'js/';
    var css = 'css/';
    var bower_components = 'bower_components';
    var config = {
        wiredep: {
            getDefaultOptions: getWiredepDefaultOptions,
        },
        paths: {
            src: base + '/src',
            js: base + src + js,
            css: base + src + css,
            index: base + src + 'index.html',
            bower: {
                json: base + 'bower.json',
                dir: base + bower_components,
                ignorePath: '../..'
            }

        }
    };

    function getWiredepDefaultOptions() {
        return {
            bowerJson: config.paths.bower.json,
            directory: config.paths.bower.dir,
            ignorePath: config.paths.bower.ignorePath
        };
    }

    return config;
})();
