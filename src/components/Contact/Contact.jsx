import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(item.id));
  return (
    <li className={styles.contactItem}>
      <div>
        <div className={styles.contactContext}>
          <span>{item.name}</span>
        </div>
        <div className={styles.contactContext}>
          <span>{item.number}</span>
        </div>
      </div>
      <button onClick={handleDelete} type="button" aria-label="delete button">
        Delete
      </button>
    </li>
  );
}
