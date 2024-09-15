import React, { useEffect, useState } from 'react';
import * as S from './Register.styled';
import TextInput from '../../components/Register/TextInput';
import PasswordInput from '../../components/Register/PasswordInput';
import Button from '../../components/Register/Button';
import Spam from '../../components/Register/Spam';
import { useRegisterMutation } from '../../hooks/useRegisterMutation';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [userInfo, setUserInfo] = useState({ userId: '', password: '', name: '' });
  const [validPassword, setValidPassword] = useState('');
  const { mutate: registerMutate } = useRegisterMutation();
  const [userIdWarning, setUserIdWarning] = useState('');
  const [passwordWarning, setPasswordWarning] = useState('');
  const [passwordValidWarning, setPasswordValidWarning] = useState('');
  const [nameWarning, setNameWarning] = useState('');
  const [adultSpamState, setAdultSpamState] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  const navigate = useNavigate();

  const onRegister = () => {
    const userIdRegex = /^[a-zA-Z0-9]{6,14}$/;
    if (!userIdRegex.test(userInfo.userId)) {
      setUserIdWarning('아이디는 6~14자 영문, 숫자로만 구성되어야 합니다.');
      return;
    } else {
      setUserIdWarning('');
    }

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,14}$/;
    if (!passwordRegex.test(userInfo.password)) {
      setPasswordWarning('비밀번호는 8~14자, 영문, 숫자, 특수문자를 포함해야 합니다.');
      return;
    } else {
      setPasswordWarning('');
    }

    if (userInfo.password !== validPassword) {
      setPasswordValidWarning('비밀번호가 일치하지 않습니다.');
      return;
    } else {
      setPasswordValidWarning('');
    }

    const nameRegex = /^[A-Za-z가-힣]{4,8}$/;
    if (!nameRegex.test(userInfo.name)) {
      setNameWarning('이름은 4~8자 영문 또는 한글로 구성되어야 합니다.');
      return;
    } else {
      setNameWarning('');
    }

    if (!adultSpamState) return;

    registerMutate(
      { userInfo },
      {
        onSuccess: () => {
          alert('회원가입 성공');
        },
        onError: (e) => {
          alert(e.response.data.error);
        }
      }
    );
    navigate('/login');
  };

  useEffect(() => {
    if (
      userInfo.userId !== '' &&
      userInfo.password !== '' &&
      validPassword !== '' &&
      userInfo.name !== '' &&
      adultSpamState
    ) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [userInfo, validPassword, adultSpamState]);

  console.log(userInfo, validPassword);

  return (
    <S.Container>
      <TextInput
        title={'아이디'}
        placeholder={'6~14자 영문, 숫자'}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        userIdWarning={userIdWarning}
        nameWarning={nameWarning}
      />
      <PasswordInput
        title={'비밀번호'}
        placeholder={'8~14자 영문, 숫자, 특수문자 포함'}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        passwordWarning={passwordWarning}
      />
      <PasswordInput
        title={'비밀번호 확인'}
        placeholder={'8~14자 영문, 숫자, 특수문자 포함'}
        validPassword={validPassword}
        setValidPassword={setValidPassword}
        passwordValidWarning={passwordValidWarning}
      />
      <TextInput
        title={'이름'}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        placeholder={'4~8자'}
        nameWarning={nameWarning}
      />
      <Spam adultSpamState={adultSpamState} setAdultSpamState={setAdultSpamState} />
      <Button onRegister={onRegister} buttonState={buttonState} />
    </S.Container>
  );
}
