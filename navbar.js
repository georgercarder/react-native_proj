import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Navbar extends React.Component {
	
	render() {
    return (
				<View style={styles.navcontainer}>
					<Text style={styles.button} onPress={() => this.props.start()}>start</Text>
					<Text style={styles.button}>select</Text>
					<Text style={styles.button} onPress={() => this.props.gamecheck()}>check</Text>
			
				</View>

    );
  }
}

const styles = StyleSheet.create({

	title: {
		fontSize: 20,
		color: '#FEFDE3', 
	},

	navcontainer: {
		flexDirection: 'row',	
	},

	button: {
		backgroundColor: '#87CEEB',
		color: '#FEFDE3',
		borderWidth: 1,
		borderColor: '#FEFDE3',
		margin: 1,
		padding: 8,
		textAlign: 'center',
		width: 60,	
	},

});
