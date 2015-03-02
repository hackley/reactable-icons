/** @jsx React.DOM */
var React = require('react');
var SVGInjector = require('svg-injector');

var Icon = React.createClass({
  propTypes:{
    name: React.PropTypes.string.isRequired
  },

  componentDidMount: function() {
    var elem = this.refs.image.getDOMNode();
    SVGInjector(elem);
  },

  render: function () {
    var src = "img/" + this.props.name + ".svg";
    var classes = "icon icon-" + this.props.name + " " + this.props.variant;
    return (
      <span className={classes}>
        <img ref="image" src={src} />
      </span>
    );
  }
});


module.exports = Icon;
