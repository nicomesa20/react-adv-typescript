import formJson from '../data/custom-form.json';
import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('required');
    }
    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value || 2,
        `Minimo ${(rule as any).value || 2} caracteres`
      );
    }

    if (rule.type === 'email') {
      schema = schema.email('Email no valido');
    }
    requiredFields[input.name] = schema;
  }
}

const validationsSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationsSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(
              ({ name, placeholder, type, label, options, value }) => {
                if (
                  type === 'text' ||
                  type === 'email' ||
                  type === 'password'
                ) {
                  return (
                    <MyTextInput
                      key={name}
                      type={type as any}
                      name={name}
                      label={label}
                      placeholder={placeholder}
                    />
                  );
                } else if (type === 'select') {
                  return (
                    <MySelect key={name} label={label} name={name}>
                      <option value=''>Select</option>
                      {options?.map(({ id, label }) => (
                        <option key={id} value={id}>
                          {label}
                        </option>
                      ))}
                    </MySelect>
                  );
                }
                throw new Error(`Unsupported input type: ${type}`);
              }
            )}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
