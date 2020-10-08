import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Layout = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
});

export default Layout;
