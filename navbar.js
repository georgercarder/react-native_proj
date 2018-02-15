import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';

export default class Navbar extends React.Component {
  
  render() {
    return (
			<View>
      <View style={styles.navcontainer}>
			<TouchableOpacity 
			  style={styles.button2} 
			  onPress={() => this.props.setRank()}>
			    <Text style={styles.txt}>rank {this.props.prerank}</Text>
			</TouchableOpacity>

			<TouchableOpacity 
			  style={styles.button2} 
			  onPress={() => this.props.setDiff()}>
			    <Text style={styles.txt}>difficulty {this.props.predifficulty}</Text>
			</TouchableOpacity>
			</View>
			<View style={styles.navcontainer}>
        <TouchableOpacity 
			    style={styles.button1} 
			    onPress={() => this.props.start()}>
			      <Text style={styles.txt}>{this.props.startorclear}</Text>
			  </TouchableOpacity>
        <TouchableOpacity 
			    style={styles.button1} 
			    onPress={() => this.props.load()}>
			      <Text style={styles.txt}>select</Text>
			  </TouchableOpacity>
        <TouchableOpacity 
			    style={styles.button1} 
			    onPress={() => this.props.gamecheck()}>
			      <Text style={styles.txt}>check</Text>
			  </TouchableOpacity>
      </View>
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

  button1: {
    backgroundColor: '#87CEEB',
    borderWidth: 1,
    borderColor: '#FEFDE3',
		alignItems: 'center',
    margin: 1,
    padding: 12,
    width: 104,  
  },

button2: {
    backgroundColor: '#87CEEB',
    borderWidth: 1,
    borderColor: '#FEFDE3',
		alignItems: 'center',
    margin: 1,
    padding: 12,
    width: 120,  
  },

	txt: {
		    color: '#FEFDE3',
		    fontSize: 18,
		  },


});
