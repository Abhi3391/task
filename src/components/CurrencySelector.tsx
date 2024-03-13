import React, { useState, useEffect } from 'react';
import { Box, Button,  SelectProps} from '@chakra-ui/react';
import { fetchLanguages } from '../api/apiClient';
import { END_POINT } from '../api/endPoints';

const CurrencySelector: React.FC = () => {
    const [currency, setCurrency] = useState<any[]>([]);
    const [selecteCurrency, setSelectedCurrency] = useState<string>('');
    const [selectedButtonValue, setSelectedButtonValue] = useState<string>('');
    const [isSelect, setIsSelect] = useState<boolean>(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchLanguages(END_POINT + '/fiat-currency');

                setCurrency(data.data.currencies);

            } catch (error) {
                console.error('Error fetching languages:', error);
            }
        };

        fetchData();
    }, []);
    const handleButtonClick = (value1: string, value2:string) => {
        setIsSelect(!isSelect)
        setSelectedButtonValue(value1+' - '+value2);
    };
    const handleChange = (event:any) => {
        setIsSelect(!isSelect);
        setSelectedButtonValue(selecteCurrency)
        setSelectedCurrency(event.target.value);
    };

    return (
        <Box bg='#f3fbff' w='15rem' display='flex' flexDirection='column'>
        <Button value={selecteCurrency} onClick={handleChange} m='4'  bg='white'>
            {selectedButtonValue || 'Select Language'}
        </Button>

        {isSelect ?
           <Box w='100%' h='50rem' overflow='auto' display='flex' flexDirection='column' justifyContent='center' my='4' >
           
             {currency.map((currency, index) => (
               <Box key={index} w='inherit' px='4'  >
                 <Button bg="white" w='inherit' color="black" fontWeight="600" variant='ghost' borderBottom='0.5px solid #D7DBDF' borderRadius='0'
                   onClick={() => handleButtonClick(currency.name ,currency.symbol)}>
                   {currency.name} - {currency.symbol}
                 </Button>
               </Box>
             ))}
           
         </Box>
         
            : null}
    </Box>
    );
};

export default CurrencySelector;