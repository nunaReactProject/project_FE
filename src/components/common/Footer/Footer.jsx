import React from 'react';
import * as S from './Footer.styled.js';

export default function Footer() {
  const onSocialMove = (social) => {
    social === 'blog' && window.open('https://section.blog.naver.com/', '_blank');
    social === 'youtube' && window.open('https://www.youtube.com/', '_blank');
    social === 'facebook' && window.open('https://www.facebook.com/', '_blank');
    social === 'instagram' && window.open('https://www.instagram.com/', '_blank');
    social === 'twitter' && window.open('https://x.com/', '_blank');
  };

  return (
    <>
      <S.TopLine />
      <S.FooterContainer>
        <S.MenuBox>
          <S.Content>회사소개</S.Content>
          <S.HeightLine>|</S.HeightLine>
          <S.StrongContent>개인정보 처리방침</S.StrongContent>
          <S.HeightLine>|</S.HeightLine>
          <S.Content>청소년 보호정책</S.Content>
          <S.HeightLine>|</S.HeightLine>
          <S.Content>이용약관</S.Content>
          <S.HeightLine>|</S.HeightLine>
          <S.Content>고객센터</S.Content>
          <S.HeightLine>|</S.HeightLine>
          <S.Content>티켓판매안내</S.Content>
          <S.HeightLine>|</S.HeightLine>
          <S.Content>광고안내</S.Content>
        </S.MenuBox>
        <S.InfoBox>
          <S.Title>티켓파크 주식회사</S.Title>
          <S.Description>
            <p>주소 : 06043 서울특별시 강남대로, 티켓파크 타워</p>
            <S.DescriptionHeightLine>|</S.DescriptionHeightLine>
            <p>대표이사: 조병민</p>
            <S.DescriptionHeightLine>|</S.DescriptionHeightLine>
            <p>사업자등록번호: 123-00-67890</p>
          </S.Description>
          <S.Description>
            <p>1588-0000</p>
            <S.DescriptionHeightLine>|</S.DescriptionHeightLine>
            <p>project@ticketpark.com</p>
            <S.DescriptionHeightLine>|</S.DescriptionHeightLine>
            <p>통신판매업 신고번호: 제 2024-서울강남-02468호</p>
            <S.DescriptionHeightLine>|</S.DescriptionHeightLine>
            <S.StrongDescription>사업자정보확인</S.StrongDescription>
            <S.DescriptionHeightLine>|</S.DescriptionHeightLine>
            <p>개인정보보호 책임자: 윤영식</p>
          </S.Description>
        </S.InfoBox>
        <S.BottomBox>
          <S.Copyright>Copyright © NHN LINK Corporation. All rights reserved.</S.Copyright>
          <S.SocialBox>
            <S.SocialImg src='/image/blog.JPG' onClick={() => onSocialMove('blog')} />
            <S.SocialImg src='/image/youtube.JPG' onClick={() => onSocialMove('youtube')} />
            <S.SocialImg src='/image/facebook.JPG' onClick={() => onSocialMove('facebook')} />
            <S.SocialImg src='/image/instagram.JPG' onClick={() => onSocialMove('instagram')} />
            <S.SocialImg src='/image/twitter.JPG' onClick={() => onSocialMove('twitter')} />
          </S.SocialBox>
        </S.BottomBox>
      </S.FooterContainer>
    </>
  );
}
