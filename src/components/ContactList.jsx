import React from "react";
import styles from "./contactList.module.css";

function ContactList({ list, onDelete }) {
  return (
    <ul className={styles.personUl}>
      {list.map((contact) => (
        <li className={styles.divLi} key={contact.id}>
          <div className={styles.personDetails}>
            <div className={styles.row}>
              <svg className="icon icon-user" width="15" height="15">
                <use xlinkHref="#icon-user"></use>
              </svg>
              <span> {contact.name}</span>
            </div>
            <div className={styles.row}>
              <svg className="icon icon-phone" width="15" height="15">
                <use xlinkHref="#icon-phone"></use>
              </svg>
              <span>{contact.number}</span>
            </div>
          </div>
          <div>
            <button
              className={styles.buttonDelete}
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
