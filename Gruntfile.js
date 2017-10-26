/*jshint maxstatements: 1000 */
/* global module, process */
'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
          build: ['build/'],
          coverage: ['coverage/'],
          contents: ['.nyc_output/*']
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: { jshintrc: '.jshintrc'}
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today(\'yyyy-mm-dd\') %> */\n'
            },
            build: {
                src: 'src/relative.time.parser.js',
                dest: 'build/relative.time.parser.min.js'
            }
        },
        codeclimate: {
          main: {
            options: {
              file: 'coverage/lcov.info',
              token: 'a7bc1ef397115120c4c23d9361ae64475cd8797469cd6c2bcea7c57d70ca5e22',
              executable: ''
            }
          }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    quiet: false,
                    require: 'blanket/blanket'
                },
                src: ['test/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha-nyc');
    grunt.loadNpmTasks('grunt-codeclimate-reporter');
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('codeclimate', ['codeclimate']);
    grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'test']);

};
