import React from "react";
import styles from "./contact.module.css";

function Contact({ name, number }) {
  return (
    <div>
      <li>
        <p>{name}</p>
        <p>{number}</p>
      </li>
    </div>
  );
}

export default Contact;
