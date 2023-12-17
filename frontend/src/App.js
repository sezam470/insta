import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Auth from "./components/Auth";
import Routing from "./Routing";
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const [apiRequest, setApiRequest] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body;
  };

  useEffect(() => {
    callBackendAPI()
    .then((data) => setApiRequest(data))
    .catch(err => setApiRequest({error: 'Ошибка сервера'}));
  }, [])

  if (apiRequest?.error) {
    return (
      <p>{apiRequest?.message}</p>
    )
  }

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer autoClose={2000} closeButton={false} />
      {user ? <Routing /> : <Auth />}
    </StyledThemeProvider>
  );
};

export default App;
