(function () {

  var _pokemons = [];

  var CHANGE_EVENT = "change";
  var POKEMONS_INDEX_CHANGE_EVENT = "POKEMONS_INDEX_CHANGE_EVENT";
  var POKEMON_DETAIL_CHANGE_EVENT = "POKEMON_DETAIL_CHANGE_EVENT";

  var resetPokemons = function (newPokemons) {
      _pokemons = newPokemons;
  };

  var resetPokemon = function (pokemon) {
    var idx = _pokemons.indexOf(window.PokemonStore.find(pokemon.id));
    _pokemons[idx] = pokemon;
  };

  window.PokemonStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _pokemons.slice(0);
    },

    find: function (id) {
      for (var i = 0; i < _pokemons.length; i++) {
        if (id === _pokemons[i].id) {
          return _pokemons[i];
        }
      }
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    addPokemonsIndexChangeListener: function(callback) {
      this.on(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    addPokemonDetailChangeListener: function(callback) {
      this.on(POKEMON_DETAIL_CHANGE_EVENT, callback);
    },

    _changePokemonsIndex: function() {
      this.emit(POKEMONS_INDEX_CHANGE_EVENT);
    },

    _changePokemonDetail: function () {
      this.emit(POKEMON_DETAIL_CHANGE_EVENT);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case PokemonConstants.POKEMONS_RECEIVED:
          resetPokemons(payload.pokemons);
          window.PokemonStore._changePokemonsIndex();
          break;
        case PokemonConstants.POKEMON_RECEIVED:
          resetPokemon(payload.pokemon);
          window.PokemonStore._changePokemonDetail();
          break;
      }

    }),

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }

  });

})();
