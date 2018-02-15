import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

function RedSquare(props) {
    return (
					<Text style={styles.redsquare}>{props.value}</Text>

    );
}

const styles = StyleSheet.create({
	redsquare: {
		          backgroundColor: '#ffff80',
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


});

export default RedSquare;
