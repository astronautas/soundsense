requirejs.config({
  paths: {
    'jquery'     : 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min',
    'backbone'   : 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min',
    'underscore' : 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    'react'      : 'https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.min'
  }
});

require(['backbone', 'router'], function(Backbone, Router) {
  var router = new Router();

  if (Backbone.history) {
    Backbone.history.start();
  }
});