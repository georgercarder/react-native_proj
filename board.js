import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Square from './square';
import RedSquare from './redsquare';

export default class Board extends React.Component {
		
	renderSquare(i) {
		if(this.props.red[i]==null){
			return <Square
				
				value={this.props.squares[i]}
			  rank={this.props.rank}	
				onPress={() => this.props.onPress(i)}
				 />;
		} else {
			return <RedSquare
				value={this.props.squares[i]}
				rank={this.props.rank}
				/>;
		}	
	}

	buildrow(i) {
		var row=[]
		for (var j=0;j<this.props.rank**2;j++){
			var index=j+i*(this.props.rank**2)
			row.push(this.renderSquare(index))
		}
		return <View style={styles.row} >
						{row}
						</View>
	}

	buildtable(rank) {
		if(rank === 0){
			return <Text>build table</Text>	
		} else {
			var table=[]
			for(var i=0;i<rank**2;i++){
				table.push(this.buildrow(i))	
			}
			return table
		}	
	}

  render() {

    return (
				<View>
				{this.buildtable(this.props.rank)}		
				</View>
    );
  }
}

const styles = StyleSheet.create({

	title: {
		fontSize: 42,
		color: '#FEFDE3', 
	},

	row: {
		flexDirection: 'row',
	},

});
