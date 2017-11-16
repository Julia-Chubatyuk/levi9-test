'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-serve');

    var plugins = grunt.file.readJSON('plugins.json');

    grunt.initConfig({
        serve: {
            options: {
                port: 9000
            }
        },
        clean: {
            all: {
                src: ['./build/*']
            }
        },
        concat: {
            css: {
                src: ['./src/**/*.css'],
                dest: './build/styles.css'
            },
            vendorCSS: {
                src: plugins.css,
                dest: './build/vendor.css'
            },
            vendorJS: {
                src: plugins.js,
                dest: './build/vendor.js'
            },
            customJS : {
                src: ['./src/**/*.js'],
                dest: './build/custom.js'
            }
        },
        cssmin: {
            default: {
                src: './build/styles.css',
                dest: './build/styles.min.css'
            }
        }
    });

    grunt.registerTask('default', [
        'clean',
        'concat',
        'cssmin',
        'serve'
    ]);
};

