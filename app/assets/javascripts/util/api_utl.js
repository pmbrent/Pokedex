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
  }

};
