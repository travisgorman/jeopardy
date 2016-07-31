import React from 'react';
import ReactDOM from 'react-dom'
import Board from './components/board';


const page = document.querySelector('.container');


ReactDOM.render( <Board/>, page);

console.log('entry connected');

// function getMoney(){
//   return questionSet.map( function(question){
//     return _.map( question, function(category){
//       return category.title
//     });
//   });
// }
// getMoney();






