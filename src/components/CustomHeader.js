import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import config, { ROUTES } from '../config';

export const HEADER_HEIGHT = 60;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: HEADER_HEIGHT
  },
  backContainer: {
    position: 'absolute',
    left: 8
  },
  back: {
    fontSize: 16
  },
  mainContentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: '800'
  }
});

const CustomHeader = ({ scene, previous, navigation }) => {
  const { route } = scene || {};

  return (
    <SafeAreaView style={styles.root}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
      <View style={styles.mainContentContainer}>
        <Text style={styles.headerText}>Header</Text>
      </View>
    </SafeAreaView>
  );
};

CustomHeader.propTypes = {
  scene: PropTypes.object.isRequired,
  previous: PropTypes.object,
  navigation: PropTypes.object.isRequired
};

export default CustomHeader;
