import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Backbone from 'backbone';


const Session = Backbone.Model.extend({
defaults:{money: 0}
});

export default Session;
