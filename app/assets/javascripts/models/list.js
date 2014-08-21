TrelloClone.Models.List = Backbone.Model.extend({

  parse: function(resp){
    console.log(resp)
    if (resp["cards"]) {
      this.cards().set(resp["cards"], {parse: true});
      delete resp["cards"];
    }
    return resp;
  },

  cards: function () {
    if(!this._cards){
      this._cards = new TrelloClone.Collections.Cards({
        list: this
      });
    };
    return this._cards;
  }

});