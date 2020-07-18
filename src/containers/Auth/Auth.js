import React, { useState } from 'react'
import is from 'is_js'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { Auth, Container, Title, Form } from './Auth.styled'

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
        required: true,
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
        required: true,
        minLength: 6
      }
    }
  });
  const [isFormValid, setFormValid] = useState(false)

  const loginHandler = () => {
    console.log('login')
  }

  const registerHandler = () => {
    console.log('register')
  }

  const submitHandler = e => {
    e.preventDefault()
  }

  const validateControl = (value, validation) => {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = is.email(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  const onChangeHandler = (e, controlName) => {
    const newFormControls = { ...formControls }
    const control = { ...newFormControls[controlName] }

    control.value = e.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)

    newFormControls[controlName] = control

    let isFormValid = true
    Object.keys(newFormControls).forEach(name => {
      isFormValid = newFormControls[name].valid && isFormValid
    })

    setFormValid(isFormValid)
    setFormControls(newFormControls)
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

          <Button
            type='success'
            style={{ marginRight: '20px' }}
            onClick={loginHandler}
            disabled={!isFormValid}
          >
            Войти
          </Button>
          <Button
            type='primary'
            onClick={registerHandler}
            disabled={!isFormValid}
          >
            Зарегистрироваться
          </Button>
        </Form>
      </Container>
    </Auth>
  )
}
