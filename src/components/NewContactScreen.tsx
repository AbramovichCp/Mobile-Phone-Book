import React, { ReactElement } from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import { Colors } from '../utils/helper';

const NewContactScreen = (): ReactElement => (
  <SafeAreaView style={styles.container}>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 47,
    color: '#fff',
  }
});

export default NewContactScreen;
