module.exports = function(grunt) {

  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
	return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      defaultPath: 'bootflat-admin',
      distPath:'dist',
      jsCombPath: grunt.file.readJSON('bootflat-admin/jscomb.json'),
      cssCombPath: grunt.file.readJSON('bootflat-admin/csscomb.json')
    },
    banner: '/*\n * <%= pkg.name %> <%= pkg.version %>\n' +
		    ' *\n' +
		    ' * Description: <%= pkg.description %>\n' +
		    ' *\n' +
		    ' * Homepage: <%= pkg.homepage %>\n' +
		    ' *\n' +
		    ' * By @<%= pkg.author %>\n' +
		    ' *\n' +
		    ' * Last modify time: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
		    ' *\n' +
		    ' * Licensed under the MIT license. Please see LICENSE for more information.\n' +
		    ' *\n' +
		    ' *\n' +
		    ' */\n',
    clean: {
      dist: ['<%= meta.defaultPath %>/dist/css/']
    },
    uglify: {
      options: {
          banner: '<%= banner %>',
          sourceMap: true,
          sourceMapIncludeSources: true
      },
      dist: {
        files: {
          '<%= meta.distPath %>/js/site.min.js': '<%= meta.jsCombPath %>'
        }
      }
    },
    csscomb: {
      options: {
        config: '<%= meta.defaultPath %>/sass/.csscomb.json'
      },
      dist: {
        files: {
          '<%= meta.defaultPath %>/css/<%= pkg.name %>.css': '<%= meta.defaultPath %>/css/<%= pkg.name %>.css'
        }
      }
    },
    cssmin: {
      options: {
          keepSpecialComments: 0,
          banner: '<%= banner %>',
      },
      dist: {
        files: {
          '<%= meta.distPath %>/css/site.min.css': '<%= meta.cssCombPath %>'
        }
      }
    },
    sass: {
      dist: {
        files: {
          '<%= meta.defaultPath %>/tmp/<%= pkg.name %>.css': '<%= meta.defaultPath %>/sass/<%= pkg.name %>.scss'
        },
        options: {
          banner: '<%= banner %>',
          style: 'expanded',
          sourcemap: 'true'
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '<%= meta.defaultPath %>/sass/.csslintrc'
      },
      src: [
          '<%= meta.defaultPath %>/css/site.css'
      ]
    },
    validation: {
      options: {
        charset: 'utf-8',
        doctype: 'HTML5',
        failHard: true,
        reset: true,
        relaxerror: [
          'Bad value apple-mobile-web-app-title for attribute name on element meta: Keyword apple-mobile-web-app-title is not registered.',
          'Bad value apple-mobile-web-app-status-bar-style for attribute name on element meta: Keyword apple-mobile-web-app-status-bar-style is not registered.',
          'Bad value X-UA-Compatible for attribute http-equiv on element meta.',
          'Attribute ontouchstart not allowed on element body at this point.'
        ]
      },
      files: {
        src: '*.html'
      }
    },
    sed: {
      versionNumber: {
        pattern: (function () {
          var old = grunt.option('oldver');
          return old ? RegExp.quote(old) : old;
        })(),
        replacement: grunt.option('newver'),
        recursive: true
      }
    },
    watch: {
      css: {
        files: '<%= meta.defaultPath %>/css/**',
        tasks: ['task-css'],
        options: {
          livereload: true,
        },
      },
      sass: {
        files: '<%= meta.defaultPath %>/sass/**/**',
        tasks: ['task-css'],
        options: {
          livereload: true,
        },
      },
      js: {
        files: '<%= meta.defaultPath %>/js/**',
        tasks: ['task-js'],
        options: {
          livereload: true,
        },
      },
    }
  });

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('task-css', ['sass', 'csscomb', 'cssmin']);
  grunt.registerTask('task-js', ['uglify']);
  grunt.registerTask('task', ['clean', 'task-css', 'task-js']);
  grunt.registerTask('build', ['task']);
  grunt.registerTask('default', ['task']);
  grunt.registerTask('test', ['task', 'csslint', 'validation']);

  // Version numbering task.
  // grunt change-version-number --oldver=A.B.C --newver=X.Y.Z
  // This can be overzealous, so its changes should always be manually reviewed!
  grunt.registerTask('change-version-number', 'sed');
};
