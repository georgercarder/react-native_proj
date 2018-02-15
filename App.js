import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Game from './game';

export default class App extends React.Component {
  constructor(props){
    super(props);
      this.state={
        puzzles: 'url(path to node)',  
      };
  }


  render() {

    return (
      <Game puzzles={this.state.puzzles}/>

    );
  }
}



