import React from 'react';
import ReactDOM from 'react-dom';


const Scoreboard = React.createClass({
  getInitialState: function(){
    return {
      score: store.session.get('money')
    };
  },
  componentDidMount: function(){
    store.session.on('change', () => {
      this.setState({
        score: store.session.get('money')
      });
    });
    store.session.hasChanged();
  },
  render:function(){
    return(
      <div className= "scoreboard">
        <h3 id = "yourMoney"> Total ${this.state.score}</h3>
        </div>
    );
  }
});

export default Score;
