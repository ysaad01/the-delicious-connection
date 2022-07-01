import "./App.css";
import { setContext } from "@apollo/client/link/context";
import decode from "jwt-decode";
import Landing from "./pages/Landing";
import SearchLocation from "./pages/AddLoc";
// import apollo
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Landing />
        </header>
        <SearchLocation />
      </div>
    </ApolloProvider>
  );
}

export default App;
