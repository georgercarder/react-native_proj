import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';

export default class Introd extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.body}>
       <Text style={styles.title}>Sudoku Sunshine</Text>
      </View>
      <View style={styles.footer}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => this.props.changepage(1)}
      >
        <Text style={styles.txt}>click to enter</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },

  body: {
    flex: 9,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  footer: {
    flex: 3,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  title: {
    fontSize: 42,
    color: '#FEFDE3',
  },

  button: {
    backgroundColor: '#87CEEB',
    borderWidth: 1,
    borderColor: '#FEFDE3',
    margin: 1,
    padding: 12,
    alignItems: 'center',
    width: 200,
    alignItems: 'center',
  },

  txt: {
    color: '#FEFDE3',
    fontSize: 22,
  }

});
