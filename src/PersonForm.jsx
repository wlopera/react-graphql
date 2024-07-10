import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { ALL_PERSONS } from "./App";

const CREATE_PERSON = gql`
  mutation createPerson(
    $name: String!
    $phone: String
    $street: String!
    $city: String!
  ) {
    addPerson(name: $name, phone: $phone, street: $street, city: $city) {
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
  backgroundColor: "#CCD1D1",
  padding: "20px",
  marginTop: "20px",
};

export const PersonForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createPerson({ variables: { name, phone, street, city } });

    setName("");
    setPhone("");
    setStreet("");
    setCity("");
  };

  return (
    <div style={divStyle}>
      <h2>Nueva Persona</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "40vh" }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          style={{ marginBottom: "5px" }}
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Teléfono"
          style={{ marginBottom: "5px" }}
        />
        <input
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Calle"
          style={{ marginBottom: "5px" }}
        />
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ciudad"
          style={{ marginBottom: "5px" }}
        />
        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
};
