import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

function Square(props) {
    return (
					<Text style={styles.square} onPress={() => props.onPress()} >{props.value}</Text>

    );
}

const styles = StyleSheet.create({
	square: {
			    backgroundColor: 'red',
			    color: 'black',
					fontSize: 28,
			    borderWidth: 1,
			    borderColor: '#FEFDE3',
			    margin: 1,
			    padding: 8,
			    textAlign: 'center',
			    width: 60,  

	},	

});

export default Square;
