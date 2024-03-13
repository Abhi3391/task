import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { fetchLanguages } from '../api/apiClient';
import { END_POINT } from '../api/endPoints';


interface BannerProps {
}

const Banner: React.FunctionComponent<BannerProps> = (props) => {
  const [banner, setBanner] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datas = await fetchLanguages(END_POINT + '/general');
        console.log("banner", datas.data.banners)
        setBanner(datas.data.banners);

      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Box>
      grhr
    </Box>
  );
};

export default Banner;
