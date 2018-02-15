import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Game from './game';

export default class App extends React.Component {
  render() {

    return (
			<Game />

    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	
	},

  body: {
		/*width: 300,*/
		/*height: 300,*/
    flex: 9,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
  },

	game: {
		width: 248,
	},


	header: {
		flex: 2,
		backgroundColor: '#87CEEB',
		alignItems: 'center',
		justifyContent: 'center',
	},

	title: {
		fontSize: 42,
		color: '#FEFDE3', 
	},

	footer: {
		flex: 1,
		backgroundColor: 'black',
	}
});
