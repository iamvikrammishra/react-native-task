import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Keyboard } from 'react-native';
import { fetchDefinition } from '../services/dictionaryService';
import LoadingIndicator from './LoadingIndicator';
import ResultCard from './ResultCard';
import ErrorCard from './ErrorCard';
import styles from '../styles/styles';

const Dictionary = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!term.trim()) return;
    
    setLoading(true);
    setError(null);
    setResult(null);
    Keyboard.dismiss();

    try {
      const data = await fetchDefinition(term);
      setResult(data);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching the definition.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.dictionaryContainer}>
      <Text style={styles.appTitle}>Dictionary App</Text>
      <Text style={styles.appSubtitle}>Look up any term you want to learn</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a term (e.g., photosynthesis)"
          value={term}
          onChangeText={setTerm}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearch}
          disabled={loading}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {loading && <LoadingIndicator />}
      {error && <ErrorCard message={error} />}
      {result && <ResultCard definition={result} />}
    </View>
  );
};

export default Dictionary;