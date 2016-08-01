import React from 'react';
import $ from 'jquery';
import _ from 'underscore';
import ReactDOM from 'react-dom';

// let this.state.questions[0].clues.answer;

const Category = React.createClass({
   getInitialState: function(){
      return ({data:{},questions:[],showModal:false})
    },
  getCategory : function(){
    let self = this;
    this.state.questions = [];
    $.ajax({
      type: 'GET',
      url: `http://jservice.io/api/category?id=
        ${Math.floor(Math.random()*18000)}`,
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
        if (questions.clues.length !== 5){
          self.getCategory();
        } else {
          self.setState({questions:currentState}); 
        }
      }
    });
  },
  openQuestion: function(){
      this.setState({showModal:true});
  },
  closeQuestion: function(e){
    console.log( e.target.refs );
    // if (e.target.refs !== guess)
    this.setState({showModal:false});
  },
  // submitAnswer: function(e){
  //   e.preventDefault();
  //   let guessInput = React.findDOMnode(this.refs.guess);
  //   console.log( e );
  //   console.log( guessInput )
  //   //
  //   //check to see if it matches `this.state.questions[0].clues.answer`
  //   console.log( this.state.questions[0].clues.answer );
  // },
  submitGuess: function(e){
    e.preventDefault();
    let guess = this.refs.guess.value;
    console.log( guess );
    if (guess === this.props.question.answer){
      let addMoney = store.session.get('money');
      addMoney += this.props.question.value;
      store.session.set('money', addMoney);
      store.session.trigger('change');
      this.setState({result:true});
    } else {
      this.setState({result:false});
    }
    this.setState({answered:true});
},
  componentDidMount: function(){
    this.getCategory();
  },
  render: function(){
    if ( !this.state.questions[0] ){return null}
    let clues = this.state.questions[0]
      .clues.map( clue => {

        return  (
          <li key={clue.id} onClick={this.openQuestion} className="value"> 
            ${clue.value} 
          </li>
          )
      });

    let modal;
      if (this.state.showModal){

        return (  
          <div className="modal" >
            <div className="modal-container">
            <i className="fa fa-times close-btn"onClick={this.closeQuestion} />
            <main>
              <h1> {this.state.questions[0].clues[0].question} </h1>
              <form >
                <input
                  className="guess"
                  onSubmit={this.submitGuess}
                  type="text" 
                  name="guess" 
                  placeholder="Your guess..."/>
                <input 
                  className="submit"
                  onSubmit={this.submitGuess}
                  type="submit" 
                  name="submit" 
                  value="Submit"/>
              </form>
            </main>
    
          </div>
        </div>
        )
      }
      return (  
        <div className="category">
          <div className="title">
            <h3>{this.state.questions[0].title}</h3>
          </div>
          <ul className="questionSet">{clues}</ul>
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
