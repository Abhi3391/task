import { Box, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { COIN_CARD } from '../api/endPoints';
import SplineChart from './SpChart';

interface ICoinCardProps {
    keywords: string[];
    currency1: string;
    symbol: string;
    pricing: number[];
    change: number;
}

const CoinCard: React.FunctionComponent = () => {
    const [coins, setCoins] = useState<ICoinCardProps[]>([]);
    const coinArray = ['BTCUSDT', 'ETHUSDT', 'XRPUSDT', 'SOL']
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${COIN_CARD}`, {
                    headers: { 'X-API-KEY': 'BitdeltaExchange' }
                });
                const coinData: ICoinCardProps[] = response.data.data?.spot ?? [];
                // console.log("data", coinData)
                setCoins(coinData);
            } catch (error) {
                console.error('Error fetching coin data:', error);
            }
        };

        fetchData();
    }, []);

    // console.log("coin", coins)
    // console.log("keywords", coins[0]?.keywords[0])
    return (
        <Flex justifyContent='space-evenly'>
            {coins.map((item: ICoinCardProps, index: number) => {

                if (coinArray.includes(item.symbol)) {
                    return (
                        <Flex bg='#F0ECE3' borderRadius='20'>
                            <Box key={index} justifyContent='space-between'   p='5' w='10rem'>
                                
                                <Flex>
                                    <Text color='#161D6F' fontSize='2xl'>{item.keywords[0]}</Text>
                                    <Text color='grey' fontSize='sm' pl='3' py='2'> {item.currency1}</Text>
                                </Flex>
                                <Flex direction={'column'}>
                                    <Text as='b' fontSize='lg'>${item.pricing[0]}</Text>
                                    <Text fontSize='sm' color={item.change>0 ? 'green' : 'red'}>{(item.change).toFixed(2)}%</Text>
                                </Flex>
                            </Box>
                            <Box p='3rem' h={'60%'} ><SplineChart data={item.pricing} index={`${item.keywords[0]}-${index}`} change={item.change} /></Box>
                        </Flex>
                    );
                } else {
                    return null
                }
            })}
        </Flex>
    );

};

export default CoinCard;
