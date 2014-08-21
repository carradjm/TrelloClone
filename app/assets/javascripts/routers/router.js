TrelloClone.Routers.TrelloRouter = Backbone.Router.extend({

  routes: {
    "" : "index",
    "/boards/:id" : "show"
  },

  index: function() {
    var view = new TrelloClone.Views.BoardIndexView({collection: TrelloClone.boards})
    this._swapView(view)
  },

  show: function(id){
    var board = TrelloClone.boards.get(id)
    var view = new TrelloClone.Views.BoardShowView({model: board})
    this._swapView(view)
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    $('#main').html(this._currentView.render().$el);
  }
  //must be verified

})