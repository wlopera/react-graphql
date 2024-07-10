/* eslint-disable react/prop-types */

import { gql, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const FIND_PERSON = gql`
  query findQueryByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      id
      name
      phone
      address {
        street
        city
      }
    }
  }
`;

const divStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Centra horizontalmente
  alignItems: "center", // Centra verticalmente
  backgroundColor: "#DAF7A6",
  padding: "20px",
};

export const Persons = ({ persons }) => {
  const [person, setPerson] = useState(null);
  const [getPerson, result] = useLazyQuery(FIND_PERSON);

  useEffect(() => {
    if (result.data) {
      setPerson(result.data.findPerson);
    }
  }, [result]);

  const handlePerson = (name) => {
    getPerson({ variables: { nameToSearch: name } });
  };

  if (person) {
    return (
      <div style={divStyle}>
        <h2>{person.name}</h2>
        <div>{person.id}</div>
        <div>{person.phone}</div>
        <div>
          {person.address.street} - {person.address.city}
        </div>
        <button
          onClick={() => setPerson(null)}
          style={{
            marginTop: "20px",
            width: "200px",
            backgroundColor: "lightgreen",
          }}
        >
          Regresar
        </button>
      </div>
    );
  }

  if (persons === null) {
    return null;
  }

  return (
    <div style={divStyle}>
      <h1>Personas Graphql</h1>
      <ul>
        {persons.map((person, index) => (
          <li
            key={index}
            style={{ textAlign: "start" }}
            onClick={() => handlePerson(person.name)}
          >
            {person.name} - {person.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};
