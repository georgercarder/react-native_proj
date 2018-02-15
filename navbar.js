import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Navbar extends React.Component {
  
  render() {
    return (
			<View>
      <View style={styles.navcontainer}>
			<Text style={styles.button2} onPress={() => this.props.setRank()}>rank {this.props.prerank}</Text>
			<Text style={styles.button2} onPress={() => this.props.setDiff()}>difficulty {this.props.predifficulty}</Text>
			</View>
			<View style={styles.navcontainer}>
        <Text style={styles.button1} onPress={() => this.props.start()}>{this.props.startorclear}</Text>
        <Text style={styles.button1} onPress={() => this.props.load()}>select</Text>
        <Text style={styles.button1} onPress={() => this.props.gamecheck()}>check</Text>
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
    color: '#FEFDE3',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#FEFDE3',
    margin: 1,
    padding: 12,
    textAlign: 'center',
    width: 104,  
  },

button2: {
    backgroundColor: '#87CEEB',
    color: '#FEFDE3',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#FEFDE3',
    margin: 1,
    padding: 12,
    textAlign: 'center',
    width: 120,  
  },



});
