TrelloClone.Views.BoardShowView = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.model.lists(), 'sync remove', this.render);
  },

  events: {
    "click .add-list": "add"
    // "dblclick .dblclickable" : "edit"
  },

  template: JST["boards/show"],

  render: function() {
    var content = this.template({board: this.model});
    this.$el.html(content);

    var that = this;
    console.log(this.model)
    this.model.lists().each(function(list) {
      var listView = new TrelloClone.Views.ListShowView({model: list});
      that.$el.find('.board-lists').append(listView.render().$el);
    });

    this.$(".board-lists").sortable();
    return this;
  },

  add: function(event){
    var newTitle = $('#new-list').val()
    this.model.lists().create({ title: newTitle, board_id: this.model.id }, {
      wait: true
    });
  },

  edit: function(event){
    var $element = $(event.currentTarget);
    console.log($element);
    $element.after('<button class="submit-edit">Edit</button>')
  }



});