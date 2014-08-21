TrelloClone.Views.ListShowView = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.model.cards(), 'sync remove', this.render);
    $(".list-cards").sortable();
  },

  events: {
    "click #add-card": "add"
  },

  className: "group",

  template: JST["lists/show"],

  render: function(){
    var content = this.template({ list: this.model })
    this.$el.html(content);

    var that = this
    if (this.model.cards()){
      this.model.cards().each(function(card){
        var cardView = new TrelloClone.Views.CardShowView({ model: card });
        that.$el.find('.list-cards').append(cardView.render().$el);
      })
    };
    this.$(".list-cards").sortable();

    return this;
  },

  add: function(event){
    var newTitle = $('#card-title').val()
    this.model.cards().create({ title: newTitle, list_id: this.model.id }, {
      wait: true
    });
  }

});