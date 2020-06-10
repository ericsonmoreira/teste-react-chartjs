import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import icon from '../../../public/loginicon.svg'
import {
  Container,
  Title,
  SubTitle,
  FieldLogin,
  BtnLogin,
} from './styles';
import * as yup from 'yup'

function Login() {

  const handleSubmit = (values) => {
    console.log(values)
  }

  // validações
  const validations = yup.object().shape({
    email: yup
      .string()
      .email().
      required('email obrigatório'),
    password: yup
      .string()
      .min(8, 'senha com mínimo de 8 caracteres')
      .required('senha obrigatória')
  })

  return (
    <Container>
      {/* <img src={icon} alt="login" /> */}
      <Title>Login</Title>
      <SubTitle>Preença os campos para continuar</SubTitle>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={validations}
        onSubmit={(values) => handleSubmit}
      >
        <Form>
          <FieldLogin>
            <Field name="email" className="Field" placeholder="Email" />
            <ErrorMessage component="span" name="email" />
          </FieldLogin>
          <FieldLogin>
            <Field name="password" className="Field" placeholder="Senha" />
            <ErrorMessage component="span" name="password" />
          </FieldLogin>
          <BtnLogin type="submit">Login</BtnLogin>
        </Form>
      </Formik>

    </Container>
  );
}

export default Login;