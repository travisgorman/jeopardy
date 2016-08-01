import React from 'react';
import Category from './category';

console.log('Board connected');

const Board = React.createClass({
    getInitialState: function(){
      return {}
    },
    componentDidMount: function(){},
    render: function(){
      return (
       <div className="board">
         <Category />
         <Category />
         <Category />
         <Category />
         <Category />
         <Category />
       </div>
      )
    },
});

export default Board;
         // <Category title={this.props.title}/>
         // <Category title={this.props.title}/>
         // <Category title={this.props.title}/>
         // <Category title={this.props.title}/>
         // <Category title={this.props.title}/>