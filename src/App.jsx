// import { useEffect } from 'react'
import { gql, useQuery } from "@apollo/client";
import "./App.css";
import { Persons } from "./Persons";
import { PersonForm } from "./PersonForm";

// eslint-disable-next-line react-refresh/only-export-components
export const ALL_PERSONS = gql`
  query {
    allPersons {
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

function App() {
  // useEffect(() => {
  //   const queryGraphqlData = async()=>{
  //     const response = await fetch('http://localhost:4000', {
  //       method: 'POST',
  //       headers: {'Content-Type':'application/json'},
  //       body: JSON.stringify({query: `
  //         query {
  //           allPersons {
  //             name
  //           }
  //         }
  //       `})
  //     })

  //     const jsonData = await response.json()
  //     console.log("Consulta a Graphql-server:", jsonData.data)
  //   }
  //   queryGraphqlData()

  // }, [])

  //const { loading, data, error } = useQuery(ALL_PERSONS, { pollInterval: 2000 });

  const { loading, data, error } = useQuery(ALL_PERSONS);

  if (error) {
    return <span style={{ color: "red" }}>{error}</span>;
  }

  return (
    <>
      {loading ? <p>Cargando...</p> : <Persons persons={data?.allPersons} />}
      <PersonForm />{" "}
    </>
  );
}

export default App;
