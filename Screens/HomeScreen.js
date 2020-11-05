import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  goToBuzzerScreen = (buzzerColor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzerColor });
  };
  render() {
    return (
      <View>
        <AppHeader />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'magenta' }]}
          onPress={()=>this.goToBuzzerScreen('magenta')}>
          <Text style={styles.buttonText}>Team 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={()=>this.goToBuzzerScreen('green')}>
          <Text style={styles.buttonText}>Team 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={()=>this.goToBuzzerScreen('red')}>
          <Text style={styles.buttonText}>Team 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={()=>this.goToBuzzerScreen('blue')}>
          <Text style={styles.buttonText}>Team 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
