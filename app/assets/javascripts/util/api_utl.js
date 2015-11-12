window.ApiUtil = {

  fetchAllPokemons: function() {
    $.ajax ({
      url: "api/pokemon",
      method: "GET",
      dataType: "json",
      contentType: "application/json",
      success: function (data) {
        ApiActions.receiveAllPokemons(data);
      }
    });
  },

  fetchPokemon: function(id) {
    $.ajax ({
      url: "api/pokemon/" + id,
      method: "GET",
      dataType: "json",
      contentType: "application/json",
      success: function (data) {
        ApiActions.receiveSinglePokemon(data);
      }
    });
  }

};
