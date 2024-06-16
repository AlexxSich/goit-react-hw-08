import css from './HomePage.module.css';
export default function HomePage() {
  return (
    <div className={css.container}>
      <h3>Welcome to Home page of PhoneBook App</h3>
      <p>Here you can save your contacts</p>
    </div>
  );
}
