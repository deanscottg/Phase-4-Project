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
          Home
        </Link>
      </div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <div>
            <Link className="navButton" to="/signup">
              Signup
            </Link>
            <Link className="navButton" to="/login">
              Login
            </Link>
            <Link className="navButton" to="/boxer">
              Boxer
            </Link>
            <Link className="navButton" to="/page">
              Page
            </Link>
            <Link className="navButton" to="/tutorial">
              Tutorial
            </Link>
            <Link className="navButton" to="/workout">
              Workout
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
