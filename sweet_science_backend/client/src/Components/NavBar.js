import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("http://localhost:3000/logout", { method: "DELETE" }).then((r) => {
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
        <div>
          {user ? (
            <button className="logoutButton" onClick={handleLogoutClick}>
              L O G O U T
            </button>
          ) : (
            <>
              <Link className="navButton" to="/signup">
                S I G N U P
              </Link>
              <Link className="navButton" to="/login">
                L O G I N
              </Link>
            </>
          )}
          <Link className="navButton" to="/boxingnews">
            N E W S
          </Link>
          <Link className="navButton" to={`/boxers/${user?.id}`}>
            P A G E
          </Link>
          <Link className="navButton" to="/tutorial">
            T U T O R I A L
          </Link>
          <Link className="navButton" to="/workout">
            W O R K O U T
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
