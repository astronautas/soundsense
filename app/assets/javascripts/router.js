define(['backbone', 'views/UserTracks'], 
function(Backbone, UserTracks) {
  var Router = Backbone.Router.extend({
    routes: {
      '(/)'       : 'userTracks',
      '/mytracks' : 'userTracks'
    },

    userTracks: function() {
      this.loadView(new UserTracks());
    },

    loadView: function(View) {
      if (this.view) {
        this.view.close ? this.view.close() : this.view.remove();
      }

      this.view = View;
    }
  });

  return Router;
});