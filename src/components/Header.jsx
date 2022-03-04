import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';

//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
function Header() {
  return (
    <header>
      <h1><HighlightIcon /> Keeper App</h1>
    </header>
  );
}

export default Header;
