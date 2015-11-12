window.PokemonDetail = React.createClass({

  getInitialState: function() {
    return this.getStateFromStore();
  },

  componentDidMount: function () {
    PokemonStore.addPokemonDetailChangeListener(this._onChange);
    var pokemon = ApiUtil.fetchPokemon(parseInt(this.props.params.pokemonId));
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  getStateFromStore: function() {
    return {pokemon: PokemonStore.find(parseInt(this.props.params.pokemonId))};
  },

  componentWillReceiveProps: function (newProps) {
    var id = newProps.params.pokemonId;
    var pokemon = ApiUtil.fetchPokemon(parseInt(id));
  },

  render: function() {

    var pokeDetail;

    if (typeof this.state.pokemon !== "undefined") {
      pokeDetail = (<div className="detail">
        <img src={this.state.pokemon.image_url} />
        <ul>
          <li>Name: {this.state.pokemon.name}</li>
          <li>Attack: {this.state.pokemon.attack}</li>
          <li>Defense: {this.state.pokemon.defense}</li>
          <li>Poke-Type: {this.state.poke_type}</li>
          <li>Moves: {this.state.pokemon.moves.join(", ")}</li>
          <ToysIndex toys={this.state.pokemon.toys} />
        </ul>
      </div>);
    }

    return (<div>
      {pokeDetail}
    </div>);
  }

});
