TrelloClone.Routers.TrelloRouter = Backbone.Router.extend({

  routes: {
    "" : "index",
    "boards/:id" : "show"
    // "boards/:id" : "new"
  },

  index: function() {
    var view = new TrelloClone.Views.BoardIndexView({collection: TrelloClone.boards})
    this._swapView(view)
  },

  show: function(id){
    var that = this
    var board = TrelloClone.boards.get(id)
    board.fetch({
      success:  function(){
        var view = new TrelloClone.Views.BoardShowView({model: board, tagName: "ul"})
        that._swapView(view);
      }
    });

  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    $('#main').html(this._currentView.render().$el);
  }
  //must be verified

})