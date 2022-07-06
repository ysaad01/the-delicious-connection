import "./App.css";
import { setContext } from "@apollo/client/link/context";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";

import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <Header className="App-header"></Header>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
        <div className="page-container">{/* <SearchLocation /> */}</div>
      </div>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
