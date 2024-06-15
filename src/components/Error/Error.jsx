import css from './Error.module.css';

export default function Error() {
  return (
    <div>
      <p className={css.errorMessage}>Something went wrong. Try again...</p>
    </div>
  );
}
