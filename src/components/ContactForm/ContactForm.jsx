import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";
import { HashLoader } from "react-spinners";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addContact({ name }));
      setName("");
    }
  };
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.container}>
      {loading && (
        <div className={css.loading}>
          {" "}
          <HashLoader color="#24cbdb" />{" "}
        </div>
      )}
      {error && <div> Hata: {error} </div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Yeni Kişiyi Giriniz"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
}
