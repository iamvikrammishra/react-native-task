import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const ErrorCard = ({ message }) => {
  return (
    <View style={styles.errorCard}>
      <Text style={styles.errorTitle}>Oops!</Text>
      <Text style={styles.errorMessage}>{message}</Text>
      <Text style={styles.errorHelp}>
        Please check your spelling or try another term.
      </Text>
    </View>
  );
};

export default ErrorCard;