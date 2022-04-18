import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <div>
        <Link className="navButton" to="/">
          H O M E
        </Link>
      </div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <div>
            <Link className="navButton" to="/signup">
              S I G N U P
            </Link>
            <Link className="navButton" to="/login">
              L O G I N
            </Link>
            <Link className="navButton" to="/boxer">
              B O X E R
            </Link>
            <Link className="navButton" to="/page">
              P A G E
            </Link>
            <Link className="navButton" to="/tutorial">
              T U T O R I A L
            </Link>
            <Link className="navButton" to="/workout">
              W O R K O U T
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
