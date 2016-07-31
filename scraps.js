let numbers = ['one', 'two', 'three', 'four'];
const App = React.createClass({
  render: function(){
    let items = numbers.map((n) => <li>{n}</li> );
    return (  
      <div>
        <ul>
          {items}
        </ul>
       </div> 
    );
  }
});


      success: (response) => {
        console.log(response);
        let allClues = 200;
        let questions = response;
        let clueArray= questions.clues.filter( clue => {
          if (clue.value === allClues){
            allClues += 200;
            return clue;
          }
        });
        questions.clues = clueArray;
        let currentState= this.state.questions;
        currentState.push(questions);
        this.setState({
          questions:currentState
        });
      }