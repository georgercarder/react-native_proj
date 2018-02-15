import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image} from 'react-native';

function Square(props) {
  if(props.rank===2){
    return (
      <TouchableHighlight style={styles.square2} onPress={() => props.onPress()} >
        <Text style={styles.txtb1}>{props.value}</Text>
      </TouchableHighlight>
    );
  } else {
    return (
      <TouchableHighlight style={styles.square3} onPress={() => props.onPress()} >
        <Text style={styles.txtb2}>{props.value}</Text>
      </TouchableHighlight>
    );  
  }
}

const styles = StyleSheet.create({
  square2: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FEFDE3',
    margin: 1,
    padding: 8,
    alignItems: 'center',
    height: 60,
    width: 60,  
  },  
  
  square3: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FEFDE3',
    margin: 1,
    padding: 8,
    alignItems: 'center',
    height: 35,
    width: 35,
  },

  txtb1: {
    fontSize: 28,
    color: 'black',
  },

  txtb2: {
    fontSize: 14,
    color: 'black',
  },

});

export default Square;
