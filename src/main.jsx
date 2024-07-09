import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client'

import './index.css'

const GRAPHQL_URI = import.meta.env.VITE_GRAPHQL_URI;

// console.log('GraphQL URI:', GRAPHQL_URI);

// Debo pasar esa uri a variables de ambiente
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: GRAPHQL_URI
  })
})


// const request = gql`
//   query {
//     allPersons {
//       id
//       name
//       phone
//       address {
//         street
//         city
//       }
//     }
//   }
// `

// client.query({query: request})
//   .then(response => console.log("Respuesta de graphql:", response.data))
//   .catch((error) => console.error("Error en la consulta GraphQL:", error));

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
