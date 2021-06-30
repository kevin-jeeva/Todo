import React from "react";
import { Menu } from "semantic-ui-react";

const NavBar = ({ activeItem, handleItemClick }) => {
  return (
    <Menu pointing secondary size="huge">
      <Menu.Item
        link
        name="home"
        active={activeItem === "/"}
        onClick={() => handleItemClick("/")}
      />
      <Menu.Item
        name="completed todos"
        active={activeItem === "/completed"}
        onClick={() => handleItemClick("/completed")}
      />
      <Menu.Menu position="right">
        <Menu.Item
          name="clear storage"
          active={activeItem === "/clear"}
          onClick={() => handleItemClick("/clear")}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
