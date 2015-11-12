(function () {

  var _pokemons = [];

  var CHANGE_EVENT = "change";
  var POKEMONS_INDEX_CHANGE_EVENT = "POKEMONS_INDEX_CHANGE_EVENT";

  var resetPokemons = function (newPokemons) {
      _pokemons = newPokemons;
  };

  window.PokemonStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _pokemons.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    addPokemonsIndexChangeListener: function(callback) {
      this.on(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    _changePokemonsIndex: function() {
      this.emit(POKEMONS_INDEX_CHANGE_EVENT);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case PokemonConstants.POKEMONS_RECEIVED:
        resetPokemons(payload.pokemons);
        window.PokemonStore._changePokemonsIndex();
        break;
      }

    }),

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }

  });

})();
