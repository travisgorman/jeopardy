// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';

// const Question = React.createClass({

//   getInitialState: function(){
//      return{
//        questions:[]
//      }
//   },
//   componentWillMount: function(){},
//   componentDidMount: function(){
//      $.ajax({
//        type: 'GET',
//        url: `http://jservice.io/api/category?id=55`,
//        success: (response) => {
//          let allClues= 200;
//          let questions= response;
//          let clueArry= questions.clues.filter( clue =>{
//            if(clue.value === allClues ) {
//              allClues += 200;
//              return clue;
//            }
//          });
//          questions.clues = clueArry;
//          let currentState = this.state.questions;
//          currentState.push( questions );
//          this.setState({ questions:currentState });
//        }
//      });
//     },
//   render: function(){
//     return (  
//       <div className="value">{this.props.id}</div>

//     )
//   }


// //   getInitialState: function(){
// //     return {};
// //   },
// //   componentDidMount: function(){
// //     let self = this;
// //     $.ajax({
// //       url: `http://jservice.io/api/category?id=55`,
// //       success: data  => {
// //         self.setState( data );
// //           // let category = self.state;
// //           // let catId = category.id;
// //           // let catTitle = category.title;
// //           // let clues = category.clues;
// //       }//close success
// //     });//close ajax
// //   },
// //   render: function(){
// //   return (  
// //     .quest
// //     <div><h1>YAY</h1></div>
// //   )
// // }
// ///////////////////
//   // componentDidMount: function(){
//   //   axios.get(`http://jservice.io/api/clues`)
//   //     .then( response => {
//   //       let tooHunnit = 200;
//   //       let cloose = response.data;
//   //       let newArray = cloose
//   //         .clues
//   //           .filter(clue => {
//   //             if (clue === tooHunnit){
//   //             tooHunnit += 200;
//   //             return clue;
//   //             }
//   //           });
//   //           console.log (newArray);
//   //           cloose.clues = clews


//   //       let questions = response.data;
//   //       let evenValueClues = questions
//   //         .filter( question => {
//   //           return question.id === 2
//   //       });
//   //       // console.log( JSON.stringify(  
//   //       //   questions, null, 4
//   //       // ))
//   //     });      
//   // },


// });//close Question Component

// export default Question;
