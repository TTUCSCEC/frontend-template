module.exports = function (grunt) {

  grunt.initConfig({
    sourceDir: 'app',
    buildDir: 'public',
    watch: {
      options: {
        livereload: true // 開啟 livereload
      },
      stylus: {
        files: ['<%= sourceDir %>/stylus/**/*.styl'],
        tasks: ['stylus']
      },
      all: {
        files: ['!<%= sourceDir %>/stylus/**/*.styl'],
        tasks: ['copy']
      }
    },
    stylus: {
      all: {
        dest: '<%= buildDir %>/css/style.css',
        src: '<%= sourceDir %>/stylus/style.styl'
      }
    },
    connect: {
      server: {
        options: {
          port: 8080,
          base: '<%= buildDir %>'
        }
      }
    },
    copy: {
      all: {
        files: [
          {
            expand: true,
            cwd: '<%= sourceDir %>',
            src: ['**/*', '!**/*.styl'],
            dest: '<%= buildDir %>'
          }
        ]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');   // 監看檔案，livereload
  grunt.loadNpmTasks('grunt-contrib-stylus');  // stylus => css
  grunt.loadNpmTasks('grunt-contrib-connect'); // 啟動 server
  grunt.loadNpmTasks('grunt-contrib-copy');    // 複製檔案

  grunt.registerTask('default', ['stylus', 'copy', 'connect', 'watch']);
  grunt.registerTask('build', ['stylus', 'copy']);
};
