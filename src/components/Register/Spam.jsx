import React, { useState } from 'react';
import * as S from './Spam.styled';
export default function Spam({ adultSpamState, setAdultSpamState }) {
  const [spamState, setSpamState] = useState(false);

  const onCheckChange = (state, setState) => {
    setState(!state);
  };

  return (
    <S.Container>
      <S.CheckBox onClick={() => onCheckChange(spamState, setSpamState)}>
        {spamState ? <S.CheckOn /> : <S.CheckOff />}
        <S.SpamText>SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)</S.SpamText>
      </S.CheckBox>
      <S.CheckBox onClick={() => onCheckChange(adultSpamState, setAdultSpamState)}>
        {adultSpamState ? <S.CheckOn /> : <S.CheckOff />}
        <S.SpamText>14세 이상입니다.</S.SpamText>
      </S.CheckBox>
      <S.Description>만 14세 미만 회원은 법정대리인(부모님) 동의를 받은 경우만 회원가입이 가능합니다.</S.Description>
    </S.Container>
  );
}
