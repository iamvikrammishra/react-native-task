import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/styles';

const ResultCard = ({ definition }) => {
  // Helper function to highlight synonyms
  const renderDefinitionText = (text, synonyms) => {
    if (!synonyms || synonyms.length === 0) return <Text>{text}</Text>;
    
    // Split text by synonyms to highlight them
    let parts = [text];
    synonyms.forEach(synonym => {
      const newParts = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const splitPart = part.split(new RegExp(`\\b${synonym}\\b`, 'gi'));
          for (let i = 0; i < splitPart.length; i++) {
            newParts.push(splitPart[i]);
            if (i < splitPart.length - 1) {
              newParts.push(<Text key={`${synonym}-${i}`} style={styles.synonym}>{synonym}</Text>);
            }
          }
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });
    
    return <Text>{parts}</Text>;
  };

  return (
    <View style={styles.resultCard}>
      <Text style={styles.termTitle}>{definition.word}</Text>
      
      {definition.phonetic && (
        <Text style={styles.phonetic}>{definition.phonetic}</Text>
      )}

      <ScrollView style={styles.definitionsContainer}>
        {definition.meanings.map((meaning, index) => (
          <View key={index} style={styles.meaningContainer}>
            <Text style={styles.partOfSpeech}>{meaning.partOfSpeech}</Text>
            
            {meaning.definitions.map((def, defIndex) => (
              <View key={defIndex} style={styles.definitionItem}>
                <Text style={styles.definitionNumber}>{defIndex + 1}.</Text>
                <View style={styles.definitionTextContainer}>
                  {renderDefinitionText(def.definition, meaning.synonyms)}
                  
                  {def.example && (
                    <Text style={styles.example}>Example: "{def.example}"</Text>
                  )}
                </View>
              </View>
            ))}
            
            {meaning.synonyms && meaning.synonyms.length > 0 && (
              <View style={styles.synonymsContainer}>
                <Text style={styles.synonymsTitle}>Synonyms: </Text>
                <Text style={styles.synonymsList}>
                  {meaning.synonyms.map((synonym, synIndex) => (
                    <Text key={synIndex} style={styles.synonym}>
                      {synonym}{synIndex < meaning.synonyms.length - 1 ? ', ' : ''}
                    </Text>
                  ))}
                </Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ResultCard;