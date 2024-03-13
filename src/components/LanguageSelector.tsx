import React, { useState, useEffect } from 'react';
import { SelectProps, Box, Button } from '@chakra-ui/react';
import { fetchLanguages } from '../api/apiClient';
import { END_POINT } from '../api/endPoints';

const LanguageSelector: React.FC = () => {
    const [languages, setLanguages] = useState<any[]>([]);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');
    const [selectedButtonValue, setSelectedButtonValue] = useState<string>('');
    const [isSelect, setIsSelect] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchLanguages(END_POINT + '/lang');
                setLanguages(data.data);
            } catch (error) {
                console.error('Error fetching languages:', error);
            }
        };

        fetchData();
    }, []);

    const handleButtonClick = (value: string) => {

        setSelectedButtonValue(value);
        setIsSelect(!isSelect)
    };

    const handleChange = (event:any) => {
        setIsSelect(!isSelect);
        setSelectedButtonValue(selectedLanguage)
        setSelectedLanguage(event.target.value);
    };

    return (
        <Box bg='#f3fbff' w='15rem' display='flex' flexDirection='column'>
            <Button value={selectedLanguage} onClick={handleChange} m='4' bg='white'>
                {selectedButtonValue || 'Select Language'}
            </Button>

            {isSelect ?
                <Box w='100%' display='flex' flexDirection='column' justifyContent='center' my='4' >

                    {languages.map((language, index) => (
                        <Box key={index} w='inherit' px='4'  >
                            <Button bg="white" w='inherit' color="black" fontWeight="600" variant='ghost' borderBottom='0.5px solid #D7DBDF' borderRadius='0'
                                onClick={() => handleButtonClick(language.lang)}>
                                {language.lang}
                            </Button>
                        </Box>
                    ))}

                </Box>
                : null}
        </Box>
    );
};

export default LanguageSelector;