import { ChangeEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm({
    name: 'Nicolas',
    email: 'nicolas@email.com',
    password1: '123456',
    password2: '123456',
  });

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'} `}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type='text'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'} `}
        />
        {!isValidEmail(email) && <span>Esto no es un email</span>}
        <input
          type='password'
          placeholder='Password'
          name='password1'
          value={password1}
          onChange={onChange}
          className={`${password1.trim().length <= 0 && 'has-error'} `}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type='password'
          placeholder='Confirm Password'
          name='password2'
          value={password2}
          onChange={onChange}
          className={`${password2.trim().length <= 0 && 'has-error'} `}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        <button type='submit'>Create</button>
        <button type='button' onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
