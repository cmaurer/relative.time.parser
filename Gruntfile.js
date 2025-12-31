/*jshint maxstatements: 1000 */
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
      options: {
        jshintrc: '.jshintrc'
      }
    },
    eslint: {
      options: {
        overrideConfigFile: '.eslintrc'
      },
      target: ['src/relative.time.parser.js']
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
  grunt.loadNpmTasks('grunt-eslint');
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['clean', 'jshint', 'eslint', 'test', 'uglify']);

};
