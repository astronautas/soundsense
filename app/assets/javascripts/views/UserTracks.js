define(['jquery', 'backbone', 'underscore', 'collections/UserTracks'], 
function($, Backbone, _, UserTracksCollection) {
  var UserTracks = Backbone.View.extend({
    initialize: function() {
      this.collection = new UserTracksCollection();

      this.listenTo(this.collection, 'reset',  this.addAll);
      this.listenTo(this.collection, 'add',    this.addOne);

      this.collection.fetch({ reset: true });
    },

    // Works as renderAll
    addAll: function() {

    },

    // Works as renderOne item
    addOne: function() {

    }
  });

  return UserTracks;
});