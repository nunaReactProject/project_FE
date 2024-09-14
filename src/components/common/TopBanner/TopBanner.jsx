import React, { useState } from 'react';
import * as S from './TopBanner.styled';
import { useNavigate } from 'react-router-dom';

export default function TopBanner() {
  const [bannerState, setBannerState] = useState(true);
  const navigate = useNavigate();

  const onCloseBanner = (e) => {
    e.stopPropagation();
    setBannerState(false);
  };

  const onNavigateSearch = () => {
    navigate('/search?name=사의찬미');
  };

  if (!bannerState) {
    return;
  }

  return (
    <S.Overlay onClick={onNavigateSearch}>
      <S.Close onClick={onCloseBanner} />
      <S.BannerImage src='/image/topbanner.JPG' />
    </S.Overlay>
  );
}
