module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */\n\n',
    paths: {
      source: 'lib',
      vendor: 'node_modules',
      dist: 'dist'
    },

    browserify: {
      app: {
        options: {
          banner:  "<%= banner %> 'use strict';\n",
          transform:  [ require('grunt-react').browserify ],
        },
        src: ['<%= paths.source %>/app.js'],
        dest: '<%= paths.dist %>/app.js'
      }
    },

    less: {
      app: {
        options: {
          style: 'expanded',
          banner: '<%= banner %>'
        },
        src: ['<%= paths.source %>/app.less', '<%= paths.source %>/**/*.less'],
        dest:'<%= paths.dist %>/app.css'
      }
    },

    copy: {
      app: {
        expand: true,
        cwd: '<%= paths.source %>/',
        src: ['index.html', 'img/**', 'fonts/**'],
        dest: '<%= paths.dist %>'
      }
    },

    clean: ['<%= paths.dist %>'],

    watch: {
      app: {
        files: ['<%= paths.source %>/**/*'],
        tasks: ['build', 'watch'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    connect: {
      app: {
        options: {
          base: '<%= paths.dist %>',
          port: 8000,
          hostname: 'localhost',
          livereload: true
        }
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-browserify');

  // Custom tasks
  grunt.registerTask('build', ['clean', 'browserify', 'less', 'copy']);
  grunt.registerTask('server', ['build', 'connect', 'watch']);
  grunt.registerTask('default', ['server']);

};
