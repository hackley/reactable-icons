/** @jsx React.DOM */
var Icon = require('./components/icon');
var React = require('react');

React.render(
  <div>
    <Icon name="signal" className="level-1" />
    <Icon name="signal" className="level-2" />
    <Icon name="signal" className="level-3" />
    <Icon name="signal" className="level-4" />
    <Icon name="signal" className="level-5" />
    <Icon name="signal" className="level-6" />
  </div>,
  document.getElementById('main')
);
