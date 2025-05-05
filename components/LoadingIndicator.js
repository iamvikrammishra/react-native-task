import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from '../styles/styles';

const LoadingIndicator = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#0066cc" />
      <Text style={styles.loadingText}>Looking up the term...</Text>
    </View>
  );
};

export default LoadingIndicator;