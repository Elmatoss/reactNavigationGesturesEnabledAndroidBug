import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ROUTES } from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    color: 'white'
  }
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTES.HOMESTACK.SECOND)}
    >
      <Text style={styles.text}>Next Screen</Text>
    </TouchableOpacity>
  </View>
);

export default HomeScreen;
