import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Game from './game';

export default class App extends React.Component {
  render() {

    return (
			<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Sudoku Sunshine</Text>	
			</View>
      <View style={styles.body}>
			<View style={styles.game}>
			<Game />
			</View>
      </View>
			<View style={styles.footer}></View>
			</View>

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
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

	game: {
		width: 248,
	},


	header: {
		flex: 2.5,
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
