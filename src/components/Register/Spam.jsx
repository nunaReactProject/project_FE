import React, { useState } from 'react';
import * as S from './Spam.styled';
export default function Spam() {
  const [spamState, setSpamState] = useState(false);
  const [adultState, setAdultState] = useState(false);

  const onCheckChange = (state, setState) => {
    setState(!state);
  };

  return (
    <S.Container>
      <S.CheckBox>
        {spamState ? (
          <S.CheckOn onClick={() => onCheckChange(spamState, setSpamState)} />
        ) : (
          <S.CheckOff onClick={() => onCheckChange(spamState, setSpamState)} />
        )}
        <S.SpamText>SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)</S.SpamText>
      </S.CheckBox>
      <S.CheckBox>
        {adultState ? (
          <S.CheckOn onClick={() => onCheckChange(adultState, setAdultState)} />
        ) : (
          <S.CheckOff onClick={() => onCheckChange(adultState, setAdultState)} />
        )}
        <S.SpamText>14세 이상입니다.</S.SpamText>
      </S.CheckBox>
      <S.Description>만 14세 미만 회원은 법정대리인(부모님) 동의를 받은 경우만 회원가입이 가능합니다.</S.Description>
    </S.Container>
  );
}
