import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Auth, Container, Title, Form } from './Auth.styled';

export default () => {
  const [formControls, setFormControls] = useState({
    email: {
      value: '',
      type: 'email',
      label: 'Email',
      errorMessage: 'Введите корректный email',
      valid: false,
      touched: false,
      validation: {
        requierd: true,
        email: true
      }
    },
    password: {
      value: '',
      type: 'password',
      label: 'Пароль',
      errorMessage: 'Введите корректный пароль',
      valid: false,
      touched: false,
      validation: {
        requierd: true,
        minLength: 6
      }
    }
  });

  const loginHandler = () => {
    console.log('login')
  }

  const registerHandler = () => {
    console.log('register')
  }

  const submitHandler = e => {
    e.preventDefault();
  }

  const onChangeHandler = (e, controlName) => {
    console.log(`${controlName}: ${e.target.value}`);
  }

  const renderInputs = () => Object.keys(formControls).map((controlName, index) => {
    const control = formControls[controlName];
    const { value, type, label, errorMessage, valid, touched, validation } = control;
    return (
      <Input
        key={controlName + index}
        value={value}
        type={type}
        label={label}
        errorMessage={errorMessage}
        valid={valid}
        touched={touched}
        shouldValidate={!!validation}
        onChange={e => onChangeHandler(e, controlName)}
      />
    )
  });

  return (
    <Auth>
      <Container>
        <Title>Авторизация</Title>

        <Form onSubmit={submitHandler}>
          {renderInputs()}

          <Button type='success' style={{marginRight: '20px'}} onClick={loginHandler}>Войти</Button>
          <Button type='primary' onClick={registerHandler}>Зарегистрироваться</Button>
        </Form>
      </Container>
    </Auth>
  )
}
