require.config({
  paths: {
    "jquery": "../lib/js/jquery/jquery.min",
    "bootstrap": "../lib/js/bootstrap/bootstrap.min",
    "backbone": "../lib/js/backbone/backbone-min",
    "underscore": "../lib/js/underscore/underscore-min",
    "mustache": "../lib/js/mustache/mustache"
  },

  shim: {
    backbone: {
        exports: 'Backbone',
        deps: ['jquery', 'underscore']
    },

    underscore: {
        exports: '_'
    },

    mustache: {
        exports: 'Mustache'
    }
  }
});

if (!window.requireTestMode) {
  require(['main'], function(){ });
}