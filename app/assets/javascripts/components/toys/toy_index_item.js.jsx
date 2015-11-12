window.ToyIndexItem = React.createClass({

  _onClick: function() {

  },

  render: function() {
    return (<li onClick={this._onClick} className="toy-list-item">
      <p>Name: {this.props.toy.name}</p>
      <p>Happiness: {this.props.toy.happiness}</p>
      <p>Price: {this.props.toy.price}</p>
    </li>);
  }

});
