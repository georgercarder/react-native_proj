import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Board from './board';

export default class Game extends React.Component {
	constructor(props){
		super(props),
		this.state={
			red: Array(16).fill(null),
			squares: [1,4,0,0,0,0,0,0,3,0,1,0,0,0,2,0],
			rank: 2,
		}
	}

	handlePress(i) {
		const squares = this.state.squares.slice();
		squares[i]=(squares[i]%this.state.rank**2)+1;
		this.setState({squares: squares});
	}
	
	render() {
    return (
			<View>
			<Text>game</Text>
			<Board 
				rank={this.state.rank}
				red={this.state.red}
				squares={this.state.squares}
				onPress={(i) => this.handlePress(i)}
			/>
			</View>

    );
  }
}

const styles = StyleSheet.create({

	title: {
		fontSize: 42,
		color: '#FEFDE3', 
	},

});
