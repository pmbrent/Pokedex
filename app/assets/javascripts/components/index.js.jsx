window.Index = React.createClass({

  // componentDidMount: function() {
  //   ApiUtil.fetchAllPokemons();
  // },
  render: function() {
    return (<div>
              <div className="pokemon-index">
                <PokemonsIndex />
              </div>
                {this.props.children}
            </div>);
  }

});
