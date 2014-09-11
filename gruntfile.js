/**
 * Created by Scott on 9/10/2014.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        md2html: {
            multiple_files: {
                options: {},
                files: [{
                    expand: true,
                    cwd: 'spec',
                    src: ['**/*.md'],
                    dest: 'hmtl',
                    ext: '.html'
                }]
            }
        }
    })



    grunt.loadNpmTasks('grunt-md2html');

    grunt.registerTask('default', ['md2html']);
}