import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import router from './router';
import Backbone from 'backbone';
import $ from 'jquery';

const Score = Backbone.Model.extend({
  defaults: {
    money: 0
  }
});

export default scoreModel;
