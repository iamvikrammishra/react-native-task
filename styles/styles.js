import { StyleSheet } from 'react-native';

const colors = {
  primary: '#0066cc',
  secondary: '#ff6b6b',
  background: '#f5f5f7',
  cardBackground: '#ffffff',
  text: '#333333',
  lightText: '#777777',
  error: '#ff3b30',
  synonym: '#8e44ad',
  border: '#e0e0e0',
  buttonText: '#ffffff',
};

export default StyleSheet.create({
  // App Container
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  appContainer: {
    flex: 1,
    padding: 16,
  },
  
  // Dictionary Component
  dictionaryContainer: {
    flex: 1,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  appSubtitle: {
    fontSize: 16,
    color: colors.lightText,
    marginBottom: 24,
  },
  
  // Input
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.cardBackground,
    fontSize: 16,
  },
  searchButton: {
    width: 80,
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 12,
  },
  searchButtonText: {
    color: colors.buttonText,
    fontWeight: 'bold',
    fontSize: 16,
  },
  
  // Loading
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: colors.lightText,
  },
  
  // Result Card
  resultCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 20,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  termTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  phonetic: {
    fontSize: 16,
    color: colors.lightText,
    marginBottom: 12,
    fontStyle: 'italic',
  },
  definitionsContainer: {
    maxHeight: 400,
  },
  meaningContainer: {
    marginBottom: 16,
  },
  partOfSpeech: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  definitionItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  definitionNumber: {
    marginRight: 8,
    fontSize: 16,
    color: colors.text,
  },
  definitionTextContainer: {
    flex: 1,
  },
  example: {
    marginTop: 4,
    fontSize: 14,
    color: colors.lightText,
    fontStyle: 'italic',
  },
  synonymsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  synonymsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
  },
  synonymsList: {
    fontSize: 14,
    color: colors.text,
  },
  synonym: {
    color: colors.synonym,
    fontWeight: 'bold',
  },
  
  // Error Card
  errorCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.error,
    padding: 20,
    marginVertical: 8,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.error,
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 8,
  },
  errorHelp: {
    fontSize: 14,
    color: colors.lightText,
  },
});