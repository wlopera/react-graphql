/* eslint-disable react/prop-types */
import { useState } from "react";
import { usePerson } from "./persons/custom-hooks.js";

import "./App.css";

export const Persons = ({ persons }) => {
  const [person, setPerson] = useState(null);
  const [getPerson] = usePerson();

  // const [getPerson, result] = usePerson();
  // useEffect(() => {
  //   if (result.data) {
  //     setPerson(result.data.findPerson);
  //   }
  // }, [result]);

  const handlePerson = async (name) => {
    const data = await getPerson({ variables: { nameToSearch: name } });
    setPerson(data.data.findPerson);
  };

  if (person) {
    return (
      <div className="person-container">
        <h2>{person.name}</h2>
        <div>{person.id}</div>
        <div>{person.phone}</div>
        <div>
          {person.address.street} - {person.address.city}
        </div>
        <button onClick={() => setPerson(null)} className="person-botton-add">
          Regresar
        </button>
      </div>
    );
  }

  if (persons === null) {
    return null;
  }

  return (
    <div className="person-container">
      <h1>Personas Graphql</h1>
      <ul>
        {persons.map((person, index) => (
          <li
            key={index}
            className="person-li"
            onClick={() => handlePerson(person.name)}
          >
            {person.name} - {person.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};
