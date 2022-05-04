import { Form, Formik, useFormik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      terms: false,
      jobType: '',
    },
    onSubmit: (value: any) => console.log(value),
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe de tener 15 caracteres o menos')
        .required('Requerido'),
      lastName: Yup.string()
        .max(15, 'Debe de tener 15 caracteres o menos')
        .required('Requerido'),
      email: Yup.string()
        .email('El correo no tiene un formato valido')
        .required('Requerido'),
      terms: Yup.boolean().required('Requerido'),
      jobType: Yup.string().required('Requerido'),
    }),
  });

  return (
    <div>
      <h1>Formik Yup</h1>
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
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='firstName' component='span' />
            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor='email'>Email</label>
            <Field name='email' type='email' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='jobType'>Job Type</label>
            <Field name='jobType' as='select'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>It Jr.</option>
            </Field>
            <ErrorMessage name='jobType' component='span' />

            <label htmlFor='terms'>Terms and conditions</label>
            <Field name='terms' type='checkbox' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
