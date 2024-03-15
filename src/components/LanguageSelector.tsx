import React, { useState, useEffect } from 'react';
import { Box, Button,Icon } from '@chakra-ui/react';
import { ChevronDownIcon,ChevronUpIcon } from '@chakra-ui/icons'
import { LANGUAGE_SELECTOR } from '../api/endPoints';
import axios from 'axios';

const LanguageSelector: React.FC = () => {
    const [languages, setLanguages] = useState<any[]>([]);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');
    const [selectedButtonValue, setSelectedButtonValue] = useState<string>('');
    const [isSelect, setIsSelect] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(LANGUAGE_SELECTOR);
                // console.log("lang",data.data.data)
                setLanguages(data.data.data);
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
        <Box bg='#DDE6ED' w='15rem' display='flex' flexDirection='column' borderRadius='10' m='10'>
            <Button value={selectedLanguage} onClick={handleChange} m='4' bg='white' justifyContent='space-evenly'>
                {selectedButtonValue || 'Select Language'} <Icon as={isSelect?ChevronDownIcon:ChevronUpIcon} />
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
