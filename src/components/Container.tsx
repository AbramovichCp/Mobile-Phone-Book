import React, { ReactElement } from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

interface IProps {
  children: React.ReactNode;
  styles?: {} | [];
}

const Container = (props: IProps): ReactElement => (
  <View style={[styles.container, props.styles]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    maxWidth: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 15,
  },
});

export default Container;
