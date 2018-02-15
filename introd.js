import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Introd extends React.Component {

  render() {
    return (
			<View style={styles.container}>
			<View style={styles.body}>
			 <Text style={styles.title}>Sudoku Sunshine</Text>
			</View>
			<View style={styles.footer}>
			<Text style={styles.button} onPress={() => this.props.changepage(1)}>click to enter</Text>
			</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },

  body: {
    flex: 9,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
		justifyContent: 'center',
    margin: 10,
  },

	footer: {
		flex: 3,
		backgroundColor: '#87CEEB',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 10,
	},

  title: {
    fontSize: 42,
    color: '#FEFDE3',
  },

	button: {
		    backgroundColor: '#87CEEB',
		    color: '#FEFDE3',
		    fontSize: 22,
		    borderWidth: 1,
		    borderColor: '#FEFDE3',
		    margin: 1,
		    padding: 12,
		    textAlign: 'center',
		    width: 200,
		  },


});
