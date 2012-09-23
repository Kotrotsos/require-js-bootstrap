
// used to bootstrap the application

require.config({
        deps: ['main'],
        paths: {
                'use': '../vendor/use',
                'jquery': '../vendor/jquery',
                'underscore': 'http://underscorejs.org/underscore',
                'backbone': 'http://backbonejs.org/backbone'

        },
        use: {
                backbone: {
                        deps: ['underscore','jquery'],
                        attach: 'Backbone'
                }
        }
});

require(['use!backbone'],function(Backbone){
   console.log(Backbone);
});

