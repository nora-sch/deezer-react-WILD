import { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { ImBin } from "react-icons/im";
function Navbar({ playlist, deletePlaylist, deleteOneByOne }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    // <Nav style = {{  position: "fixed",top: 0,  overflow: "hidden", zIndex:1000, backgroundColor:"white", width:'100%' }}>
    <Nav>
      <NavItem>
        <NavLink active href="#">
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
      <NavItem>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
          <DropdownToggle caret>Playlist ({playlist.length})</DropdownToggle>
          <DropdownMenu>
            <Button onClick={() => deletePlaylist()}>Delete All</Button>
            {playlist.map((album, i) => (
              <DropdownItem
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                key={i + "-" + album.title}
              >
                {album.title} <ImBin onClick={() => deleteOneByOne(album)} />
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavItem>
    </Nav>
  );
}

export default Navbar;
