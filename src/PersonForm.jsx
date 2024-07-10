import { useState } from "react";
import { useAddPerson } from "./persons/custom-hooks";
import { Notify } from "./Notify";

export const PersonForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const notifyError = (errorMessage) => {
    setErrorMessage(errorMessage);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  const [createPerson] = useAddPerson(notifyError);

  const handleSubmit = (e) => {
    e.preventDefault();

    createPerson({ variables: { name, phone, street, city } });

    setName("");
    setPhone("");
    setStreet("");
    setCity("");
  };

  return (
    <div className="personForm-container">
      <h2>Nueva Persona</h2>
      <Notify errorMessage={errorMessage} />
      <form onSubmit={handleSubmit} className="personForm-form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          className="personForm-input"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Teléfono"
          className="personForm-input"
        />
        <input
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Calle"
          className="personForm-input"
        />
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ciudad"
          className="personForm-input"
        />
        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
};
