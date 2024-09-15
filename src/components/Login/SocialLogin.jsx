import React from 'react';
import * as S from './SocialLogin.styled';

export default function SocialLogin({ warning }) {
  return (
    <S.Container>
      <S.KakaoButton src='/image/kakao.png' />
      <S.GoogleBox>
        <S.GoogleImg src='/image/google.png' />
      </S.GoogleBox>
    </S.Container>
  );
}
