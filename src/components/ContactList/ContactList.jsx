import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import css from "./ContactList.module.css";


export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);
 
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  console.log(contacts);
  return (
    <div className={css.container}>
    
      
      <div className={css.main}>
        <ul>
          {contacts.map((contact) => {
            return (
              <li key={contact.id}>
                {contact.name}
                <br />
                <br />
                {contact.number}
                <button onClick={() => handleDelete(contact.id)}>Sil</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
