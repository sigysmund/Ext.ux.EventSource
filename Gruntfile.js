'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks') (grunt);

    grunt.initConfig ({
        jshint: {
            options: {
                eqeqeq: true ,
                undef: true ,
                unused: true ,
                eqnull: true ,
                browser: true
            } ,
            dist: {
                src: ['ux/EventSource.js', 'test/*.js']
            }
        } ,
        uglify: {
            dist: {
                src: ['ux/EventSource.js'] ,
                dest: 'build/EventSource.min.js'
            }
        } ,
        watch: {
            dist: {
                files: ['ux/EventSource.js', 'test/*.js', 'Gruntfile.js'] ,
                tasks: ['jshint']
            }
        } ,
        express: {
            livereload: {
                options: {
                    script: 'test/app.js'
                }
            }
        } ,
        connect: {
            options: {
                port: 9000 ,
                livereload: 35729
            } ,
            livereload: {
                options: {
                    open: 'http://localhost:9000/test/index.html'
                }
            }
        }
    });

    grunt.registerTask ('server', ['express', 'connect:livereload', 'watch']);
    grunt.registerTask ('build', ['uglify']);
};