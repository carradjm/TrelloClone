TrelloClone.Views.BoardIndexView = Backbone.View.extend({

  events: {
    "click .add-board": "add"
  },

  initialize: function(){
    this.listenTo(this.collection, 'sync remove', this.render);
  },

  template: JST["boards/index"],

  render: function() {
    var content = this.template({boards: this.collection});
    this.$el.html(content);
    return this;
  },

  add: function(event){
    var newTitle = $('#new-board').val()
    this.collection.create({ title: newTitle }, {
      wait: true
    });
  }

})