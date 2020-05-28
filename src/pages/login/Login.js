import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import icon from '../../../public/loginicon.svg'
import { Container } from './styles';
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
      <img src={icon} alt="login" />
      <h1>Login</h1>
      <p>Preença os campos para continuar</p>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={validations}
        onSubmit={ (values) => handleSubmit}
      >
        <Form>
          <div>
            <Field name="email" className="Field" placeholder="Email" />
            <ErrorMessage component="span" name="email" />
          </div>
          <div>
            <Field name="password" className="Field" placeholder="Senha" />
            <ErrorMessage component="span" name="password" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </Container>
  );
}

export default Login;