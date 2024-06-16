import { Form, Formik, Field } from 'formik';
import css from './RegistrationForm.module.css';

import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { toast } from 'react-toastify';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .catch(() => {
        toast.error('Something went wrong!!! Try again');
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.input} type="text" name="name" />
        </label>
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
          Register
        </button> */}
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Form>
    </Formik>
  );
}
