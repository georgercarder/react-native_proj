import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

function RedSquare(props) {
  if(props.rank===2){
    return (
      <Text style={styles.redsquare2}>
        {props.value}
      </Text>
    );
  } else {
    return (
      <Text style={styles.redsquare3}>
        {props.value}
      </Text>  
    );
  }
}

const styles = StyleSheet.create({
  redsquare2: {
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

  redsquare3: {
    backgroundColor: '#ffff80',
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

export default RedSquare;
