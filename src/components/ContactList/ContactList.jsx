import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(contact => (
        <li className={css.contactsItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
