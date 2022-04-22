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

  const isLoggedIn = !!user;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          {isLoggedIn ? (
            <>
              <Route path="/">
                <Home user={user} />
              </Route>
              <Route path="/boxingnews">
                <BoxerNews />
              </Route>

              <Route path="/boxers/:id">
                <BoxerAccountPage />
              </Route>
              <Route path="/tutorial">
                <Tutorial />
              </Route>
              <Route path="/workout">
                <WorkoutLog user={user} setUser={setUser} />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </>
          ) : (
            <>
              <Route path="/signup">
                <SignUp setUser={setUser} />
              </Route>
              <Route path="/login">
                <LogIn setUser={setUser} />
              </Route>
            </>
          )}
        </Switch>
      </main>
    </>
  );
}

export default App;
