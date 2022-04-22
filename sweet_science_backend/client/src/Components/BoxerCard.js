import React from "react";
import { useState, useEffect } from "react";

function BoxerCard({ id }) {
  const [currentBoxer, setCurrentBoxer] = useState({});
  const [currentBoxerWorkouts, setCurrentBoxerWorkouts] = useState([]);
  const [newExperience, setNewExperience] = useState(1);
  useEffect(
    () =>
      fetch(`/boxers/${id}`)
        .then((response) => response.json())
        // .then(boxerData => console.log(boxerData))
        .then((boxerData) => {
          setCurrentBoxer(boxerData);
          setCurrentBoxerWorkouts(boxerData.workouts);
        }),
    []
  );

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/boxers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        experience: newExperience,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newExperience) => setNewExperience(newExperience));
      }
    });
  }
  // .then(setCurrentBoxerWorkouts(currentBoxer.workouts))

  // console.log(currentBoxerWorkouts, "a");
  return (
    <div className="boxer-container">
      <img alt="{currentBoxer.name}" src={currentBoxer.image}></img>
      <h1
        style={{
          color: "#FFBF00",
          fontFamily: "Games",
          textShadow: "2px 2px brown",
        }}
      >
        Boxer name: {currentBoxer.name}
      </h1>
      <h2
        style={{
          color: "#FFBF00",
          fontFamily: "Games",
          textShadow: "2px 2px brown",
        }}
      >
        Experience level: {currentBoxer.experience}
      </h2>
      <h3
        style={{
          color: "#FFBF00",
          fontFamily: "Games",
          textShadow: "2px 2px brown",
        }}
      >
        Weight: {currentBoxer.weight}
      </h3>
      <div className="boxer-workouts">
        {currentBoxerWorkouts.map((boxerWorkout) => {
          return (
            <div>
              <p
                style={{
                  color: "#FFBF00",
                  fontFamily: "Games",
                  textShadow: "2px 2px brown",
                }}
              >
                {boxerWorkout.date}
              </p>
              <p
                style={{
                  color: "white",
                  fontFamily: "Games",
                  textShadow: "2px 2px brown",
                }}
              >
                {boxerWorkout.drill_id} Completion level:
                {boxerWorkout.completion_level}{" "}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Experience">E X P E R I E N C E</label>
          <select
            name="dropdown"
            value={newExperience}
            onChange={(e) => setNewExperience(e.target.value)}
          >
            <option value="1">1 (Zero ring experience)</option>
            <option value="2">2 (Amateur)</option>
            <option value="3">3 (Up and Coming challenger)</option>
            <option value="4">4 (Title Contender)</option>
            <option value="5">5 (Champ)</option>
          </select>
          <button type="submit">L E V E L U P</button>
        </form>
      </div>
      ;
    </div>
  );
}
export default BoxerCard;
