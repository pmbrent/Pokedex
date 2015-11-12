window.PokemonsIndex = React.createClass({
  getInitialState: function() {
    return {pokemon: PokemonStore.all()};
  },

  _onChange: function() {
    this.setState({pokemon: PokemonStore.all()});
  },

  componentDidMount: function() {
    PokemonStore.addPokemonsIndexChangeListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function() {
    PokemonStore.removeChangeListener(this._onChange);
  },

  render: function() {

    return (<div>
      {
        this.state.pokemon.map(function(pokemon) {
          return <PokemonIndexItem pokemon={pokemon} key={pokemon.name}/>;
        })
      }
    </div>);
  }
});
