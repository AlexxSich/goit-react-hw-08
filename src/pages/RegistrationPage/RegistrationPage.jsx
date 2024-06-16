import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <div className={css.container}>
      <h3>Registration Page</h3>
      <RegistrationForm />
    </div>
  );
}
