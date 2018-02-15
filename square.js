import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

function Square(props) {
	if(props.rank===2){

    return (
					<Text style={styles.square2} onPress={() => props.onPress()} >{props.value}</Text>

    );
	} else {
		return (
					<Text style={styles.square3} onPress={() => props.onPress()} >{props.value}</Text>

		);	
	}
}

const styles = StyleSheet.create({
	square2: {
			    backgroundColor: 'white',
			    color: 'black',
					fontSize: 28,
			    borderWidth: 1,
			    borderColor: '#FEFDE3',
			    margin: 1,
			    padding: 8,
			    textAlign: 'center',
					height: 60,
			    width: 60,  

	},	
square3: {
		          backgroundColor: 'white',
		          color: 'black',
		          fontSize: 14,
		          borderWidth: 1,
		          borderColor: '#FEFDE3',
		          margin: 1,
		          padding: 8,
		          textAlign: 'center',
							height: 35,
		          width: 35,

		  },


});

export default Square;
