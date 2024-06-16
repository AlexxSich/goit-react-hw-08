import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';
export default function LoginPage() {
  return (
    <div className={css.container}>
      <h3>Please log in</h3>
      <LoginForm />
    </div>
  );
}
