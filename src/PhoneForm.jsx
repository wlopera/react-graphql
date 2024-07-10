import { useEffect, useState } from "react";
import { useChangePerson } from "./persons/custom-hooks";
import { Notify } from "./Notify";

export const PhoneForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const [changePhone, result] = useChangePerson();

  const notifyError = (errorMessage) => {
    setErrorMessage(errorMessage);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  useEffect(() => {
    if (result.data?.editNumber === null) {
      console.error("Data No encontrada");
      notifyError("Data no encontrada");
    }
  }, [result.data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    changePhone({ variables: { name, phone } });
    setName("");
    setPhone("");
  };

  return (
    <div className="personPhone-container">
      <h2>Modificar Número Telefónico</h2>
      <Notify errorMessage={errorMessage} />
      <form onSubmit={handleSubmit} className="personPhone-form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          className="personPhone-input"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Número Telefónico"
          className="personPhone-input"
        />
        <button className="personPhone-botton-edit">Modificar Teléfono</button>
      </form>
    </div>
  );
};
