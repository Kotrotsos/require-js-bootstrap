
// used to bootstrap the application

require.config({
        deps: ['main'],
        paths: {
                'use': '../vendor/use',
                'jquery': '../vendor/jquery',
                'lodash': 'http://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.7.0/lodash.min',
                'backbone': 'http://backbonejs.org/backbone'

        },
        use: {
                backbone: {
                        deps: ['lodash','jquery'],
                        attach: 'Backbone'
                }
        }
});

require(['use!backbone'],function(Backbone){
   console.log(Backbone);
});

