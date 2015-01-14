module.exports = function(grunt) {
	// Load the NPM tasks
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.initConfig({
	    
	    pkg: grunt.file.readJSON('package.json'),

	    sass: {
	    	options: {
	    		sourcemap: 'none',
	    		style: 'expanded',
	    		banner: '/* \n' +
	    					'* Name: <%= pkg.name %> \n' +
	    					'* Version: <%= pkg.version %> \n' +
	    					'* Author: <%= pkg.author %> \n' +
	    					'* Description: <%= pkg.description %> \n' +
	    				'*/'
	    	},
	    	dist: {
	      		files: {
	        		'build/css/style.css': 'sass/style.scss'
		      	}
		    },
	  	},

		
	});
	
	grunt.registerTask('default', ['sass']);

}