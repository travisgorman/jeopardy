import React from 'react';
import ReactDOM from 'react-dom'
import {Router, Route, Link, hashHistory} from 'react-router';
import Category from './category';
import Board from './board';
import Question from './question';


const Value = React.createClass({
  render: function(){
    return (
      <div className="value">
        <h2>$</h2>
        <Question/>
      </div>
    );
  },
  componentDidMount: function(){
    
  }
});

export default Value;
// <Question/>