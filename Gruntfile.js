module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    watch: {
   	  files: ['js/*.js'],
      tasks: ['docco']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('docco', '', function() {
  	var done = this.async();
  	var exec = require('child_process').exec;
  	exec('docco -o docs/ -c docs/custom-docco.css js/*.js ',function(error, stdout, stderr){
  		grunt.log.write(stdout).ok();
  		done();
  	});

    
  });

  grunt.registerTask('default', ['watch']);

};