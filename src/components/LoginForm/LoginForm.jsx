import { Form, Formik, Field } from 'formik';
import css from './LoginForm.module.css';

import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { toast } from 'react-toastify';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .catch(() => {
        toast.error('Something went wrong!!! Try again');
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" required />
        </label>
        <label className={css.label}>
          Password
          <Field
            className={css.input}
            type="password"
            name="password"
            required
          />
        </label>
        {/* <button className={css.submitBtn} type="submit">
          Log In
        </button> */}
        <Button variant="contained" type="submit">
          Log In
        </Button>
      </Form>
    </Formik>
  );
}
