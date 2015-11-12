window.ToysIndex = React.createClass({

  render: function() {

    if (typeof this.props.toys === "undefined") {
      return <div></div>;
    }

    return (
      <div>
        {this.props.toys.map(function(toy) {
          return <ToyIndexItem toy={toy} />;
        })}
      </div>
    );
  }

});
