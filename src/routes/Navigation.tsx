import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';
import {
  FormikAbstract,
  FormikComponents,
  FormikBasicPage,
  RegisterPage,
  RegisterFormikPage,
  DynamicForm,
} from '../03-forms/pages';

export const Navigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React logo' />
          <ul>
            <li>
              <NavLink
                to='/register'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-basic'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-yup'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-components'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-abstract'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik abstract
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/register-formik'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dynamic-form'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/formik-basic' element={<FormikBasicPage />} />
          <Route path='/formik-components' element={<FormikComponents />} />
          <Route path='/formik-abstract' element={<FormikAbstract />} />
          <Route path='/register-formik' element={<RegisterFormikPage />} />
          <Route path='/dynamic-form' element={<DynamicForm />} />
          <Route path='/*' element={<Navigate to='/home' replace />} />
        </Routes>
      </div>
    </Router>
  );
};
