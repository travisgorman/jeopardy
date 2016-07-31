import React from 'react';
import ReactDOM from 'react-dom'
import {Router, Route, Link, hashHistory} from 'react-router';
import Category from './category';
import Board from './board';
import Value from './value';


const QuestionSet = React.createClass({
  render: function(){
    return (
      <div className="questionSet">
        <Value value={this.props.value}/>    
      </div>
    );
  },
  componentDidMount: function(){

  }
});

export default QuestionSet;
// <Value value={this.props.value}/>
// <Value value={this.props.value}/>
// <Value value={this.props.value}/>
// <Value value={this.props.value}/>
// <Value value={this.props.value}/>
// <Value value={this.props.value}/>