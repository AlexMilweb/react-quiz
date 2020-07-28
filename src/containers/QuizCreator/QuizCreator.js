import React, { useState } from 'react'
import api from '../../api'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import { createControl, validate, validateForm } from '../../form/formFramework'
import { QuizCreator, Wrapper, Title, Form } from './QuizCreator.styled'

const createOptionControl = number => createControl({
  label: `Вариант ${number}`,
  errorMessage: 'Значение не может быть пустым',
  id: number
}, { required: true })

const createFormControls = () => ({
  question: createControl({
    label: 'Введите вопрос',
    errorMessage: 'Вопрос не может быть пустым'
  }, { required: true }),
  option1: createOptionControl(1),
  option2: createOptionControl(2),
  option3: createOptionControl(3),
  option4: createOptionControl(4),
})

export default () => {
  const [quiz, setQuiz] = useState([])
  const [formControls, setFormControls] = useState(createFormControls())
  const [rightAnswerId, setRightAnswerId] = useState(1)
  const [isFormValid, setIsFormValid] = useState(false)

  const submitHandler = e => {
    e.preventDefault()
  }

  const addQuestionHandler = e => {
    e.preventDefault()

    const newQuiz = quiz.concat()
    const index = newQuiz.length + 1
    const { question, option1, option2, option3, option4 } = formControls

    const questionItem = {
      question: question.value,
      id: index,
      rightAnswerId,
      answers: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
        { text: option4.value, id: option4.id }
      ]
    }

    newQuiz.push(questionItem)
    setQuiz(newQuiz)
    setFormControls(createFormControls())
    setRightAnswerId(1)
    setIsFormValid(false)
  }

  const createQuizHandler = async e => {
    e.preventDefault()

    try {
      await api.post('/quizes.json', quiz)

      setQuiz([])
      setFormControls(createFormControls())
      setRightAnswerId(1)
      setIsFormValid(false)
    } catch (e) {
      console.log(e)
    }
  }

  const changeHandler = (value, controlName) => {
    const newFormControls = { ...formControls }
    const control = { ...newFormControls[controlName] }

    control.touched = true
    control.value = value
    control.valid = validate(control.value, control.validation)

    newFormControls[controlName] = control

    setFormControls(newFormControls)
    setIsFormValid(validateForm(newFormControls))
  }

  const selectChangeHandler = e => {
    setRightAnswerId(+e.target.value)
  }

  const renderControls = () => {
    return Object.keys(formControls).map((controlName, index) => {
      const { label, value, valid, validation, touched, errorMessage } = formControls[controlName]

      return (
        <div key={controlName + index}>
          <Input
            label={label}
            value={value}
            valid={valid}
            shouldValidate={!!validation}
            touched={touched}
            errorMessage={errorMessage}
            onChange={e => changeHandler(e.target.value, controlName)}
          />
          {index === 0 && <hr />}
        </div>
      )
    })
  }

  const select = <Select
    label='Выберите правильный ответ'
    value={rightAnswerId}
    onChange={selectChangeHandler}
    options={[
      { text: 1, value: 1 },
      { text: 2, value: 2 },
      { text: 3, value: 3 },
      { text: 4, value: 4 }
    ]}
  />

  return (
    <QuizCreator>
      <Wrapper>
        <Title>Создание теста</Title>
        <Form onSubmit={submitHandler}>
          { renderControls() }
          { select }

          <Button
            type='primary'
            onClick={addQuestionHandler}
            style={{ marginRight: '20px' }}
            disabled={!isFormValid}
          >
            Добавить вопрос
          </Button>

          <Button
            type='success'
            onClick={createQuizHandler}
            disabled={quiz.length === 0}
          >
            Создать тест
          </Button>

        </Form>
      </Wrapper>
    </QuizCreator>
  )
}
