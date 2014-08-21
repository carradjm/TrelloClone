TrelloClone.Views.ListShowView = Backbone.View.extend({

  template: JST["lists/show"],

  render: function(){
    var content = this.template({ list: this.model })
    this.$el.html(content);

    var that = this
    this.model.cards().each(function(card){
      var cardView = new TrelloClone.Views.CardShowView({ model: card });
      that.$el.$('.list-cards').append(cardView.render().$el);
    });

    return this;
  }

});