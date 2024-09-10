import React, { useRef, useState, useEffect } from 'react';
import { useBannerQuery } from '../../../hooks/useBannerQuery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import * as bn from './Banner.styled.js';

const Banner = () => {
  const { data, isLoading } = useBannerQuery();
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
      {data.map((dt, index) => (
        <div key={index}>
          <bn.BannerContainer bgColor={dt.b}>
            <bn.BannerWrap>
              <bn.BannerContent>
                <bn.BannerCategory>{hoveredIndex !== null ? data[hoveredIndex].genrenm : dt.genrenm}</bn.BannerCategory>
                <bn.BannerTitle>{hoveredIndex !== null ? data[hoveredIndex].prfnm : dt.prfnm}</bn.BannerTitle>
                <bn.BannerPeriod>
                  {hoveredIndex !== null
                    ? `${data[hoveredIndex].prfpdfrom} - ${data[hoveredIndex].prfpdto}`
                    : `${dt.prfpdfrom} - ${dt.prfpdto}`}
                </bn.BannerPeriod>
                <bn.BannerLocation>{hoveredIndex !== null ? data[hoveredIndex].fcltynm : dt.fcltynm}</bn.BannerLocation>
                <bn.BannerPosters>
                  {data.map((image, imgIndex) => (
                    <bn.BannerPosterItem
                      key={imgIndex}
                      src={image.poster}
                      onMouseEnter={() => setHoveredIndex(imgIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />
                  ))}
                </bn.BannerPosters>
              </bn.BannerContent>
              <bn.BannerImg src={hoveredIndex !== null ? data[hoveredIndex].poster : dt.poster} />
            </bn.BannerWrap>
          </bn.BannerContainer>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
