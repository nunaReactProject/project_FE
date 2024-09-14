import React, { useEffect, useState } from 'react';
import * as S from './DetailTab.styled';

function DetailTab({ handleDetail, handleLocation }) {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const handleClick = (num) => {
    switch (num) {
      case 1:
        setActive1(true);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        handleDetail(true); //탭 상세 활성
        handleLocation(false); //탭 장소 비활성
        break;
      case 2:
        setActive1(false);
        setActive2(true);
        setActive3(false);
        setActive4(false);
        handleDetail(false); //탭 상세 활성
        handleLocation(true);
        break;
      case 3:
        setActive1(false);
        setActive2(false);
        setActive3(true);
        setActive4(false);
        break;
      case 4:
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(true);
        break;
      default:
        setActive1(true);
        setActive2(false);
        setActive3(false);
        setActive4(false);
    }
  };

  return (
    <S.DetailTab>
      <S.TabButton onClick={() => handleClick(1)} active={active1 ? true : null}>
        상세정보
      </S.TabButton>
      <S.TabButton onClick={() => handleClick(2)} active={active2 ? true : null}>
        장소정보
      </S.TabButton>
      <S.DisableButton></S.DisableButton>
      <S.DisableButton></S.DisableButton>
    </S.DetailTab>
  );
}

export default DetailTab;
