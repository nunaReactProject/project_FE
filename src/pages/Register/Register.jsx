import React from 'react';
import * as S from './Register.styled';
import TextInput from '../../components/Register/TextInput';
import PasswordInput from '../../components/Register/PasswordInput';
import Button from '../../components/Register/Button';
import Spam from '../../components/Register/Spam';

export default function Register() {
  return (
    <S.Container>
      <TextInput title={'아이디'} placeholder={'6~20자 영문, 숫자'} />
      <PasswordInput title={'비밀번호'} placeholder={'8~12자 영문, 숫자, 특수문자'} />
      <PasswordInput title={'비밀번호 확인'} placeholder={'8~12자 영문, 숫자, 특수문자'} />
      <TextInput title={'이름'} />
      <Spam />
      <Button />
    </S.Container>
  );
}
