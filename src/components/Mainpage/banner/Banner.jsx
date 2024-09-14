import React, { useRef, useState, useEffect } from 'react';
import { useBannerQuery } from '../../../hooks/useBannerQuery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import * as bn from './Banner.styled.js';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const { data, isLoading } = useBannerQuery();
  useEffect(() => {
    if (data) console.log('data', data);
  }, [data]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false
  };

  useEffect(() => {
    if (hoveredIndex !== null && sliderRef.current) {
      sliderRef.current.slickGoTo(hoveredIndex);
    }
  }, [hoveredIndex]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.length) {
    return <div>No data available</div>;
  }

  const onNavigateBanner = (index) => {
    console.log(index);
    index === 0 && navigate('/detail/PF249007');
    index === 1 && window.open('https://www.youtube.com/watch?v=g7Ch9lpzK_A');
    index === 2 && navigate('/search?name=시카고');
    index === 3 && navigate('/detail/PF243257');
    index === 4 && alert('coming soon');
    index === 5 && alert('coming soon');
  };

  return (
    <Slider {...settings} ref={sliderRef}>
      {data.map((banner, index) => (
        <div key={index}>
          <bn.BannerContainer>
            <bn.BannerPosters>
              {data.map((image, imgIndex) => (
                <bn.BannerPosterItem
                  key={imgIndex}
                  j
                  src={image.thumbnail}
                  onMouseEnter={() => setHoveredIndex(imgIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
            </bn.BannerPosters>
            <bn.BannerImg
              src={banner.poster}
              onClick={() => {
                onNavigateBanner(index);
              }}
            />
          </bn.BannerContainer>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
