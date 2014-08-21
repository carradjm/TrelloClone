TrelloClone.Views.BoardShowView = Backbone.View.extend({

  template: JST["boards/show"],

  render: function() {
    var content = template({board: this.model});
    this.$el.html(content);

    var that = this;
    this.model.lists().each(function(list) {
      var listView = new TrelloClone.Views.ListShowView({model: list});
      that.$el.$('.board-lists').append(listView.render().$el);
    });

    return this;
  }

});