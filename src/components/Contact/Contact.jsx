import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contacts}>
        <p className={css.contactsItem}>
          <FaUser className={css.myIcon} />
          <span className={css.contactName}>{contact.name}</span>
        </p>
        <p className={css.contactsItem}>
          <FaPhoneAlt className={css.myIcon} />
          {contact.number}
        </p>
      </div>
      <button
        className={css.contactBtn}
        onClick={() => handleDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}
