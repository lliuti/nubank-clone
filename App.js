import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import Routes from './src/routes';

const App = () => (
  <>
  <SafeAreaView style={styles.safeArea}>
    <StatusBar barStyle='light-content' backgroundColor='#333'/>
    <Routes/>
  </SafeAreaView>
  </>
)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})

export default App;
