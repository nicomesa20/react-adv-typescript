import '../styles/styles.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {
  const onSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Debe de tener 2 caracteres o mas')
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('El correo no tiene un formato valido')
            .required('Requerido'),
          password1: Yup.string()
            .min(6, 'Debe de tener 6 caracteres o mas')
            .required('Requerido'),
          password2: Yup.string().oneOf(
            [Yup.ref('password1')],
            'Las contraseñas no coinciden'
          ),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label='name' name='name' />
            <MyTextInput label='email' name='email' />
            <MyTextInput label='password1' name='password1' type='password' />
            <MyTextInput label='password2' name='password2' type='password' />
            <button type='submit'>Create</button>
            <button type='button' onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
