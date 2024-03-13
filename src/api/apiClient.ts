import axios from 'axios';

export const fetchLanguages = async (LANGUAGE: string) => {
    
  try {
    const response = await axios.get(LANGUAGE);
    return response.data;
  } catch (error) {
    console.error('Error fetching languages:', error);
    throw new Error('Failed to fetch languages');
  }
};