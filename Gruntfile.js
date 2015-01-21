// Generated on 2014-12-03 using generator-mobile 1.0.0-alpha.2
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'dev',
        build: 'build'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        // TODO: Make this conditional
        watch: {
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    '*.html',
                    '<%= yeoman.build %>/styles/{,*/}*.css',
                    '<%= yeoman.build %>/scripts/{,*/}*.js',
                    '<%= yeoman.build %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost',
            },
            livereload: true
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }

        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

	   // Add vendor prefixed styles
	    autoprefixer: {
	      options: {
		browsers: ['last 2 versions']
	      },
	      dist: {
		files: [{
		  expand: true,
		  cwd: '<%= yeoman.build %>/styles/',
		  src: '{,*/}*.css',
		  dest: '<%= yeoman.build %>/styles/',
		}]
	      }
	    },
        
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '<%= yeoman.build %>/styles',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                relativeAssets: false,
		outputStyle: 'compressed'
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        concurrent: {
            server: [
                'compass:server'
            ]
        }
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'concurrent:server',
            'connect:livereload',
            'open:server',
            'watch'
        ]);
    });

    grunt.registerTask('default', [
        'jshint'
    ]);
    
};
