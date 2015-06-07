'use strict';

var blanket = require('blanket');
var tasks = require('load-grunt-tasks');
var time = require('time-grunt');

module.exports = function (grunt) {
    time(grunt);
    tasks(grunt);

    blanket({
        'data-cover-only': 'src/',
        'data-cover-never': 'node_modules/'
    });

    grunt.initConfig({
        babel: {
            test: {
                files: [
                    {
                        expand: true,
                        cwd: 'test',
                        src: '**/*.test.js',
                        dest: 'target/test',
                        ext: '.test.js',
                        extDot: 'first',
                        filter: 'isFile'
                    }
                ]
            },

            base: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: '**/*.js',
                        dest: 'target/src',
                        filter: 'isFile'
                    }
                ]
            }
        },

        jscs: {
            options: {
                config: '.jscsrc'
            },

            src: [
                '**/*.js',
                '!node_modules/**/*.js',
                '!target/**/*.js'
            ]
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },

            src: [
                '**/*.js',
                '**/*.json',
                '!node_modules/**/*.js',
                '!node_modules/**/*.json',
                '!target/**/*.js',
                '!target/**/*.json'
            ]
        },

        mochaTest: {
            options: {
                colors: true,
                ui: 'bdd'
            },

            spec: {
                options: {
                    reporter: 'spec'
                },

                src: 'target/test/**/*.test.js'
            },

            'html-cov': {
                options: {
                    captureFile: 'target/coverage.html',
                    quiet: true,
                    reporter: 'html-cov'
                },

                src: 'target/test/**/*.test.js'
            },

            'console-cov': {
                options: {
                    reporter: 'mocha-cov-reporter'
                },

                src: 'target/test/**/*.test.js'
            },

            'lcov-cov': {
                options: {
                    captureFile: 'target/lcov.info',
                    quiet: true,
                    reporter: 'mocha-lcov-reporter'
                },

                src: 'target/test/**/*.test.js'
            }
        }
    });

    grunt.registerTask('lint', [
        'jscs',
        'jshint'
    ]);

    grunt.registerTask('test', [
        'mochaTest:spec',
        'mochaTest:html-cov',
        'mochaTest:console-cov',
        'mochaTest:lcov-cov'
    ]);

    grunt.registerTask('default', [
        'babel',
        'lint',
        'test'
    ]);
};
