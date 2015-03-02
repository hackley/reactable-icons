/** @jsx React.DOM */
var Icon = require('./components/icon');
var React = require('react');


var App = React.createClass({
  getInitialState: function() {
    return {
      level: 0
    };
  },
  increase: function(event) {
    if (this.state.level == 6) return;
    this.setState({ level: this.state.level+1 });
  },
  decrease: function(event) {
    if (this.state.level == 0) return;
    this.setState({ level: this.state.level-1 });
  },
  render: function () {
    return (
      <div className="wrapper">
        <Icon name="signal" variant={"level-" + this.state.level} />
        <Icon name="signal" variant={"level-" + this.state.level} />
        <Icon name="signal" variant={"level-" + this.state.level} />
        <Icon name="signal" variant={"level-" + this.state.level} />
        <Icon name="signal" variant={"level-" + this.state.level} />
        <Icon name="signal" variant={"level-" + this.state.level} />
        <div className="buttons">
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
        </div>
      </div>
    );
  }
});



React.render(
  <App />,
  document.getElementById('main')
);
