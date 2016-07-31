 render: function(){
  if (!this.state.questions[0]){
    return null;
  }
    let clues = this.state.questions[0].clues.map( clue => {
        return  (<li key={clue.id}> ${clue.value} </li>)
      });

      return (  
        <div className="category">
          <ul>{clues}</ul>
        </div>
      )



    }//close render function