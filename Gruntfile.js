/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        // Metadata.
        meta: {
            project:'line-button-js-web'
            ,description:'line-button-js-web'
            ,url:'https://github.com/up9cloud/line-button-js-web'
            ,author:'up9cloud'
            ,license:'MIT'
            ,filename:'line-button-web'
            ,src_dir:'src'
            ,dist_dir:'dist'
        },
        banner: '/*! <%= meta.project %> <%= meta.description %>\n' +
                ' * <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * <%= meta.url %>\n' +
                ' * <%= meta.author %> | Licensed <%= meta.license %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['<%= meta.src_dir %>/**/*.js'],
                dest: '<%= meta.dist_dir %>/<%= meta.filename %>.js'
            }
        },
        uglify: {
            my_target: {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    '<%= meta.dist_dir %>/<%= meta.filename %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task.
    grunt.registerTask('default', [ 'concat', 'uglify']);

};
