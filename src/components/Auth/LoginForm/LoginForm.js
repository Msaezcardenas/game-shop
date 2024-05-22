import React from 'react';
import { Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { Auth } from '@/api';
import { useRouter } from 'next/router';
import { initialValues, validationSchema } from './LoginForm.form';
import { useAuth } from '@/hooks/useAuth';

const authCtrl = new Auth();

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  console.log(useAuth());

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const reponse = await authCtrl.login(formValue);
        login(reponse.jwt);
        // router.push('/');
        console.log(reponse);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name='identifier'
        type='text'
        placeholder='Correo electronico o nombre de usuario'
        value={formik.values.identifier}
        onChange={formik.handleChange}
        error={formik.errors.identifier}
      />
      <Form.Input
        name='password'
        type='password'
        placeholder='Contraseña'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Button type='submit' fluid loading={formik.isSubmitting}>
        Entrar
      </Form.Button>
    </Form>
  );
}
