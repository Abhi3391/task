import React, { useState, useEffect } from 'react';
import { Flex, Image, IconButton, useMediaQuery } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { getMethod } from '../api/apiClient';
import { END_POINT } from '../api/endPoints';

interface BannerProps {
  id: number;
  url: string;
  mobile_url: string;
  tab_url: string;
}

const Banner: React.FC = () => {
  const [banners, setBanners] = useState<BannerProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile] = useMediaQuery('(max-width: 600px)');
  const [isTablet] = useMediaQuery('(max-width: 960px)');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMethod(END_POINT + '/general');
        setBanners(response.data.banners);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchData();
  }, []);
  // console.log(banners)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
  };

  const getImageUrl = () => {
    
    if (banners.length === 0) {
      return ''; 
    }
  
    const banner = banners[currentIndex];

    if (isMobile) {
      return banner.mobile_url || banner.url; 
    } else if (isTablet) {
      return banner.tab_url || banner.url;
    } else {
      return banner.url;
    }
  };
  

  return (
    <Flex align="center" bg='hsl(0, 0%, 90%)' justifyContent='center'>
      <IconButton aria-label="Previous" size="sm" icon={<ChevronLeftIcon />} onClick={handlePrev} />
      <Flex overflow="hidden">
        <Image src={getImageUrl()} alt={`Banner ${currentIndex}`} />
      </Flex>
      <IconButton aria-label="Next" size="sm" icon={<ChevronRightIcon />} onClick={handleNext} />
    </Flex>
  );
};

export default Banner;
