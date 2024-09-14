import React, { useRef, useState, useEffect } from 'react';
import { useBannerQuery } from '../../../hooks/useBannerQuery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import * as bn from './Banner.styled.js';

const Banner = () => {
  const { data, isLoading } = useBannerQuery();
  useEffect(() => {
    if (data) console.log('data', data);
  }, [data]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sliderRef = useRef(null);

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

  return (
    <Slider {...settings} ref={sliderRef}>
      {data.map((banner, index) => (
        <div key={index}>
          <bn.BannerContainer>
            <bn.BannerPosters>
              {data.map((image, imgIndex) => (
                <bn.BannerPosterItem
                  key={imgIndex}
                  src={image.thumbnail}
                  onMouseEnter={() => setHoveredIndex(imgIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
            </bn.BannerPosters>
            <bn.BannerImg src={banner.poster} />
          </bn.BannerContainer>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
