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


	navcontainer: {
		flexDirection: 'row',	
	  justifyContent: 'center',
		backgroundColor: '#87CEEB',
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
		width: 100,	
	},

});
