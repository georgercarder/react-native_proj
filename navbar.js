import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Navbar extends React.Component {
	constructor(props){
		super(props),
		this.state={
			tag: 1,
		}
	} 

	
	render() {
    return (
				<View style={styles.navcontainer}>
					<Text>{this.state.tag}</Text>
					<Text style={styles.button}>startt</Text>
					<Text style={styles.button}>select</Text>
					<Text style={styles.button} onPress={() => this.setState({tag: this.state.tag+1})}>check</Text>
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
