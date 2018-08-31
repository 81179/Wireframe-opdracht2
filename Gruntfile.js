module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'main.css': 'main.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['*.scss', "index.html"],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'watch']);
};