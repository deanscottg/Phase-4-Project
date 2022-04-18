import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import NavBar from "./NavBar";
import Home from "./Home";
import BoxerNews from "./BoxerNews";
import BoxerAccountPage from "./BoxerAccountPage";
import Tutorial from "./Tutorial";
import WorkoutLog from "./WorkoutLog";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <Home user={user} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <LogIn setUser={setUser} />
            </Route>
            <Route path="/boxer">
              <BoxerNews />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/page">
              <BoxerAccountPage />
            </Route>
            <Route path="/tutorial">
              <Tutorial />
            </Route>
            <Route path="/workout">
              <WorkoutLog />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
