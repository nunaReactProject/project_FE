import * as S from './DetailProduct.styled';
import { divMap } from './DetailLocation.styled';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import React, { useEffect } from 'react';

function DetailLocation({ adress, name, subName, la, lo }) {
  return (
    <div>
      <S.flexDiv map={true}>
        <S.Title mb={true}>장소 정보</S.Title>
        <S.locateP>장소: {adress}</S.locateP>
        <S.locateP>
          공연장명: {name}&nbsp;{subName}
        </S.locateP>
        <S.locateP>대표번호: 031-1577-7766</S.locateP>

        <Map center={{ lat: la, lng: lo }} style={{ width: '1120px', height: '500px' }}>
          <MapMarker position={{ lat: la, lng: lo }}></MapMarker>
        </Map>
      </S.flexDiv>
    </div>
  );
}

export default DetailLocation;
