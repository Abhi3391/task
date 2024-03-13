import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import * as React from 'react';

interface IDemoProps {
    data: {
        name: string ,
        symbol: string,
    }[];
}

const Demo: React.FunctionComponent<IDemoProps> = ({ data }) => {
    console.log("data", data);
    
    return (
        <Box display='flex' overflow='auto' h='80vh' w='50vh'>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                {data.map((language, index) => (
                    <GridItem key={index} colSpan={1}>
                        <Button fontSize="medium" color="black" fontWeight="600" variant='ghost'>{language.name} - {language.symbol}</Button>
                    </GridItem>
                ))} 
            </Grid>
        </Box>
    );
};

export default Demo;
