import React from 'react';
import $ from 'jquery';
import _ from 'underscore';


const Category = React.createClass({
   getInitialState: function(){
      return ({data:{},questions:[]})
  },
  getCategory : function(){
    let self = this;
    this.state.questions = [];
    $.ajax({
      type: 'GET',
      url: `http://jservice.io/api/category?id=${Math.floor(Math.random()*18000)}`,
      success: ( response ) => {

        // get $200, $400, $600, $800, $1000 clues into an array. 
        // remove duplicates, and return in accending order

        let tooHunnit = 200;
        let questions = response;
        let clues = questions.clues.filter( clue => {
              if( clue.value === tooHunnit ) {
              tooHunnit += 200;
              return clue;
            }
        });
        questions.clues = clues;
        let currentState = this.state.questions;
        currentState.push( questions );

console.log( questions.clues.length );
        
        if (questions.clues.length !== 5){
          self.getCategory();
        } else {
          self.setState({questions:currentState}); 
          console.log( 'questions length', questions.clues.length );           
        }
      }
    });
  },
  componentDidMount: function(){
     this.getCategory();
  },
  render: function(){
  if (!this.state.questions[0]){
    return null;
  }
  console.log( this.state );
    let clues = this.state.questions[0].clues.map( clue => {
        return  (
          <li key={clue.id}> ${clue.value} </li>
          )
      });

      return (  
        <div className="category">
          <div className="title">
            <h3>{this.state.questions[0].title}</h3>
          </div>
          <ul>{clues}</ul>
        </div>
      )

    }//close render function
});//close Category component

export default Category;

// if (!this.state.data.title){return null}
      // //get array of clues
      //         let clues = this.state;
// console.log( this.state.data.clues );
      //remove null values and values not divisible by 200
      // let bigMoneyClues = clues
      //   .filter( clue => {
      //     if (clue.value !== null)
      //       return clue.value % 200 === 0;
      //   });
        // console.log( bigMoneyClues );

      // bigMoneyClues.map( clue => {
      //   let usefulClues =[];
      //   let tooHunnit = 200;
      //   return _.each( clue =>{
      //     if (clue.value === tooHunnit){
      //       usefulClues.push(clue);
      //       tooHunnit += 200;
      //     }

      //     return usefulClues;
      //   })
      // });
      // console.log( bigMoneyClues );
      // let usefulClues = _.uniq(
      //   clues.filter( clue => {
      //     if (clue.value !== null)
      //       return clue.value % 200 === 0;
      //   });
      // )

      // let usefulClues = _.uniq( bigMoneyClues, false );
      // console.log( usefulClues );

// const Category = React.createClass({
//   getInitialState: function(){
//     return {}
//   },
//   componentDidMount: function(){
//     axios.get(`http://jservice.io/api/categories?id=55`)
//       .then( response => {
//         let tooHunnit = 200;
//         let cloose = response;
//         console.log(cloose);
//         let newArray = cloose
//           .clues
//             .filter(clue => {
//               if (clue === tooHunnit){
//               tooHunnit += 200;
//               return clue;
//               }
//             });
//             console.log(newArray);
//             let clews = cloose.clues;
//             console.log(clews);

//         let questions = response.data;
//         let evenValueClues = questions
//           .filter( question => {
//             return question.id === 2
//         });
//       // console.log( JSON.stringify(  
//       //   questions, null, 4
//       // ))
//     });      
// },
//   render: function(){
//     return (
//       <div className="category" >
//         <div className="title" 
//           title={this.props.title}>
        
//         </div>
//       </div>
//     );
//   }
// });

// <QuestionSet category={this.props}/>
