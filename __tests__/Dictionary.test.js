import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Dictionary from '../components/Dictionary';
import { fetchDefinition } from '../services/dictionaryService';

// Mock the dictionary service
jest.mock('../services/dictionaryService');

describe('Dictionary Component', () => {
  beforeEach(() => {
    fetchDefinition.mockClear();
  });

  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<Dictionary />);
    
    expect(getByPlaceholderText('Enter a term (e.g., photosynthesis)')).toBeTruthy();
    expect(getByText('Dictionary App')).toBeTruthy();
    expect(getByText('Search')).toBeTruthy();
  });

  it('handles search with valid term', async () => {
    // Mock successful API response
    const mockDefinition = {
      word: 'test',
      phonetic: '/test/',
      meanings: [
        {
          partOfSpeech: 'noun',
          definitions: [
            {
              definition: 'A procedure intended to establish the quality, performance, or reliability of something.',
              example: 'no laboratory tests were carried out'
            }
          ],
          synonyms: ['trial', 'experiment']
        }
      ]
    };
    
    fetchDefinition.mockResolvedValueOnce(mockDefinition);
    
    const { getByPlaceholderText, getByText, queryByText } = render(<Dictionary />);
    
    // Enter a search term
    const input = getByPlaceholderText('Enter a term (e.g., photosynthesis)');
    fireEvent.changeText(input, 'test');
    
    // Click search button
    const searchButton = getByText('Search');
    fireEvent.press(searchButton);
    
    // Should show loading indicator initially
    expect(queryByText('Looking up the term...')).toBeTruthy();
    
    // Wait for results to display
    await waitFor(() => {
      expect(fetchDefinition).toHaveBeenCalledWith('test');
      expect(queryByText('test')).toBeTruthy(); // The result word should appear
    });
  });

  it('handles error when term not found', async () => {
    // Mock API error
    fetchDefinition.mockRejectedValueOnce(new Error('Term "xyz123" not found in dictionary.'));
    
    const { getByPlaceholderText, getByText, queryByText } = render(<Dictionary />);
    
    // Enter a non-existent term
    const input = getByPlaceholderText('Enter a term (e.g., photosynthesis)');
    fireEvent.changeText(input, 'xyz123');
    
    // Click search button
    const searchButton = getByText('Search');
    fireEvent.press(searchButton);
    
    // Wait for error message
    await waitFor(() => {
      expect(fetchDefinition).toHaveBeenCalledWith('xyz123');
      expect(queryByText('Oops!')).toBeTruthy();
      expect(queryByText('Term "xyz123" not found in dictionary.')).toBeTruthy();
    });
  });
});