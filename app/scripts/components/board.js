import React from 'react';
import Category from './category';



const Board = React.createClass({
    getInitialState: function(){
      return {}
    },
    componentDidMount: function(){},
    render: function(){
      return (
      // <div className="game">
       <div className="board">
         <Category />
         <Category />
         <Category />
         <Category />
         <Category />
         <Category />
       </div>
      //   <div className="score">
      //     <Score/>
      //   </div>
      // </div>
      )
    },
});

export default Board;
