// import { useEffect } from 'react'
import { usePersons } from "./persons/custom-hooks";
import { Persons } from "./Persons";
import { PersonForm } from "./PersonForm";

import "./App.css";
import { PhoneForm } from "./PhoneForm";

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

  const { loading, data, error } = usePersons();

  if (error) {
    return <span style={{ color: "red" }}>{error}</span>;
  }

  return (
    <>
      {loading ? <p>Cargando...</p> : <Persons persons={data?.allPersons} />}
      <PhoneForm />
      <PersonForm />
    </>
  );
}

export default App;
