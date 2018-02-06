module.exports = function (grunt) {

  grunt.config.set('sass', {
    dev: {
      files: [
        {expand: true, cwd: 'assets/styles/', src: ['sassImporter.scss'], dest: '.tmp/public/styles/', ext: '.css'},
        {expand: true, cwd: './node_modules/materialize-css/sass', src: ['materialize.scss'], dest: '.tmp/public/assets/materialize-css/css/', ext: '.css'},

      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
};
