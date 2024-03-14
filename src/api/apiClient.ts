import axios from 'axios';

export const getMethod = async (LANGUAGE: string) => {
    
  try {
    const response = await axios.get(LANGUAGE);
    return response.data;
  } catch (error) {
    console.error('Error fetching languages:', error);
    throw new Error('Failed to fetch languages');
  }
};

export const postMethod = async (LANGUAGE: string , email:string) => {
    console.log("post",LANGUAGE,email)
  try {
    const response = await axios.post(LANGUAGE,{email});
    return response.data;
  } catch (error) {
    console.error('Error in posting :', error);
    throw new Error('Failed to posting ');
  }
};