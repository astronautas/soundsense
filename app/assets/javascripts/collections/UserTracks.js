define(['backbone', 'models/Track'], 
function(Backbone, Track) {
  var UserTracks = Backbone.Collection.extend({
    model: Track,
    url: '/tracks'
  });

  return UserTracks;
});