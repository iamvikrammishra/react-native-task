/**
 * Service to fetch dictionary definitions
 */

// Dictionary API endpoint
const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

/**
 * Fetch the definition of a term from the dictionary API
 * 
 * @param {string} term - The term to look up
 * @returns {Promise<Object>} - Dictionary data for the term
 */
export const fetchDefinition = async (term) => {
  try {
    // Simulating network latency (remove in production)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response = await fetch(`${API_URL}${encodeURIComponent(term.trim())}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Term "${term}" not found in dictionary.`);
      }
      throw new Error(`Error fetching definition: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data || data.length === 0) {
      throw new Error('No definition found for this term.');
    }
    
    return data[0]; // Return the first definition
  } catch (error) {
    if (error.message.includes('Network request failed')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
};