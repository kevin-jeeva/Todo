import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./navigation/NavBar";
import Routes from "./navigation/Routes";

const App = () => {
  const history = useHistory();
  const [activeItem, setActiveItem] = useState();

  useEffect(() => {
    setActiveItem(history.location.pathname);
  }, []);

  const handleItemClick = (props) => {
    if (props === "/clear") {
      localStorage.clear();
    }

    history.push(props);
    setActiveItem(props);
  };

  return (
    <>
      <NavBar activeItem={activeItem} handleItemClick={handleItemClick} />
      <Routes />
    </>
  );
};

export default App;
