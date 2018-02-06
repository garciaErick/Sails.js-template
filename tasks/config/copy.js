/**
 * `copy`
 *
 * ---------------------------------------------------------------
 *
 * Copy files and/or folders from your `assets/` directory into
 * the web root (`.tmp/public`) so they can be served via HTTP,
 * and also for further pre-processing by other Grunt tasks.
 *
 * #### Normal usage (`sails lift`)
 * Copies all directories and files (except CoffeeScript and LESS)
 * from the `assets/` folder into the web root -- conventionally a
 * hidden directory located `.tmp/public`.
 *
 * #### Via the `build` tasklist (`sails www`)
 * Copies all directories and files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-copy
 *
 */
module.exports = function (grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [
        {expand: true, cwd: './assets', src: ['**/*.!(coffee|less|scss|sass)'], dest: '.tmp/public'},
        {expand: true, cwd: './node_modules/jquery/dist', src: ['jquery.min.js'], dest: '.tmp/public/js/dependencies/jquery'},
        {expand: true, cwd: './node_modules/jquery-validation/dist', src: ['jquery.validate.js'], dest: '.tmp/public/js/dependencies/jquery'},
        {expand: true, cwd: './node_modules/angular', src: ['angular.min.js'], dest: '.tmp/public/js/dependencies/angular'},
        {expand: true, cwd: './node_modules/materialize-css/dist', src: ['**/*.!(css)'], dest: '.tmp/public/assets/materialize-css'},
        {expand: true, cwd: './node_modules/materialize-css/dist', src: ['**/*.!(css)'], dest: '.tmp/public/assets/materialize-css'},
        {expand: true, cwd: './assets/datatable', src: ['**/*'], dest: '.tmp/public/assets/datatable'},
      ]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
