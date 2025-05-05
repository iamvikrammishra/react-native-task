import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import Dictionary from './components/Dictionary';
import styles from './styles/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Dictionary />
      </View>
    </SafeAreaView>
  );
}