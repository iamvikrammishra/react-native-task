import React from 'react';
import { render } from '@testing-library/react-native';
import ResultCard from '../components/ResultCard';

describe('ResultCard Component', () => {
  const mockDefinition = {
    word: 'photosynthesis',
    phonetic: '/ˌfoʊtoʊˈsɪnθəsɪs/',
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The process by which green plants and some other organisms use sunlight to synthesize nutrients from carbon dioxide and water.',
            example: 'Algae produce oxygen through photosynthesis.'
          }
        ],
        synonyms: ['light reaction', 'dark reaction']
      }
    ]
  };

  it('renders the word and phonetic correctly', () => {
    const { getByText } = render(<ResultCard definition={mockDefinition} />);
    
    expect(getByText('photosynthesis')).toBeTruthy();
    expect(getByText('/ˌfoʊtoʊˈsɪnθəsɪs/')).toBeTruthy();
  });

  it('renders part of speech correctly', () => {
    const { getByText } = render(<ResultCard definition={mockDefinition} />);
    
    expect(getByText('noun')).toBeTruthy();
  });

  it('renders definition and example correctly', () => {
    const { getByText } = render(<ResultCard definition={mockDefinition} />);
    
    // The definition text might be split due to synonym highlighting
    expect(getByText(/The process by which green plants/)).toBeTruthy();
    expect(getByText('Example: "Algae produce oxygen through photosynthesis."')).toBeTruthy();
  });
  
  it('renders synonyms correctly', () => {
    const { getByText } = render(<ResultCard definition={mockDefinition} />);
    
    expect(getByText('Synonyms:')).toBeTruthy();
    expect(getByText(/light reaction/)).toBeTruthy();
    expect(getByText(/dark reaction/)).toBeTruthy();
  });
});