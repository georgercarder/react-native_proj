import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Game from './game';
import axios from 'axios';
import Introd from './introd';

export default class App extends React.Component {
  constructor(props){
    super(props);
      this.state={
				page: <Introd onload={this.handleFetch()} changepage={(i) => this.changepage(i)}/>,
        puzzles: 'url(path to node)',  
      };
  }

	handleFetch() {
		axios.get('http://georgercarder.com/fetch/').then((response) => this.setState({puzzles: response.data}))	
	}

	changepage(i){
		if(i===1){
			this.setState({page: <Game puzzles={this.state.puzzles}/>})	
		}	
	}


  render() {

    return (
		 this.state.page	
    );
  }
}



