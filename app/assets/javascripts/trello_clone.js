window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log("welcome to backbone!")
    TrelloClone.boards.fetch({
      success: function() {
        var router = new TrelloClone.Routers.TrelloRouter();
        Backbone.history.start();
      }
    });
  }
};