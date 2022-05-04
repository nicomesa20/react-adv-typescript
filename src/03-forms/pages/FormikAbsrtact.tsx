import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

import { MyCheckBox, MySelect, MyTextInput } from '../components';
export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('El correo no tiene un formato valido')
            .required('Requerido'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar los terminos'),
          jobType: Yup.string()
            .required('Requerido')
            .notOneOf(['it-jr'], 'Esta opcion no es permitida'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='First Name'
            />
            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='Last Name'
            />
            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='Email'
            />

            <MySelect label='Job Type' name='jobType'>
              <option value=''>Select Job Type</option>
              <option value='it-jr'>IT-Jr</option>
              <option value='it-sr'>IT-Sr</option>
              <option value='it-manager'>IT-Manager</option>
              <option value='it-architect'>IT-Architect</option>
            </MySelect>

            <MyCheckBox label='Accept Terms' name='terms' id='terms' />
            {/* <MyTextInput
              label='Terms'
              name='terms'
              type='checkbox'
            /> */}

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
