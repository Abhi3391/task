import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Flex } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { COIN_TABLE } from '../api/endPoints';

interface ICoinData {
    keywords: string[];
    pricing: number[];
    change: number;
    volume: number;
    high: number;
    low: number;
    currency1: string;
}
function formatNumberToLakhs(number: number): string {
    if (number >= 100000) {
        return (number / 100000).toFixed(2) + ' L';
    } else {
        return number.toFixed(2);
    }
}

const CoinTable: React.FC = () => {
    const [coins, setCoins] = useState<ICoinData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(COIN_TABLE, {
                    headers: { 'X-API-KEY': 'BitdeltaExchange' }
                });
                const coinData: ICoinData[] = response.data.data?.spot ?? [];
                console.log(coinData)
                setCoins(coinData);
            } catch (error) {
                console.error('Error fetching coin data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box height='500px' overflow='auto' p='7' borderColor='black' borderWidth='1px' m='4'>
            <TableContainer borderRadius='1' >
                <Table variant='simple'>
                    <Thead bg='#FFF7F1'>
                        <Tr>
                            <Th>Name:</Th>
                            <Th>Price:</Th>
                            <Th>High:</Th>
                            <Th>Low:</Th>
                            <Th>Change:</Th>
                            <Th>Circulating Supply:</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {coins?.map((coin, index) => (
                            <Tr key={index}>
                                <Td>
                                    <Flex>
                                        <Box>{coin.keywords[0]}</Box>
                                        <Box pl='2' fontSize='sm' color='gray'>{coin.currency1}</Box>
                                    </Flex>
                                </Td>
                                <Td><Box color={coin.pricing[0] >= 0 ? 'green' : 'red'}>$ {coin.pricing[0]}</Box></Td>
                                <Td>$ {coin.high}</Td>
                                <Td>$ {coin.low}</Td>
                                <Td>
                                    <Box color={coin.change >= 0 ? 'green' : 'red'}>
                                        $ {(coin.change / 10).toFixed(2)}
                                    </Box>
                                </Td>
                                <Td>{formatNumberToLakhs(coin.volume)}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>

    );
};

export default CoinTable;
