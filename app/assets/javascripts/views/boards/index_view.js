TrelloClone.Views.BoardIndexView = Backbone.View.extend({

  events: {
    "click show-board" : ""
  },

  template: JST["boards/index"],

  render: function() {
    var content = this.template({boards: this.collection});
    this.$el.html(content);
    return this;
  }

})