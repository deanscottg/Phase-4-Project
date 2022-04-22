import React from "react";
import { useState, useEffect } from "react";

function BoxerCard({ id }) {
  const [currentBoxer, setCurrentBoxer] = useState({});
  const [currentBoxerWorkouts, setCurrentBoxerWorkouts] = useState([]);
  useEffect(
    () =>
      fetch(`/boxers/${id}`)
        .then((response) => response.json())
        .then((boxerData) => {
          setCurrentBoxer(boxerData);
          setCurrentBoxerWorkouts(boxerData.workouts);
        }),
    []
  );

  console.log(currentBoxerWorkouts, "a");
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
    </div>
  );
}

export default BoxerCard;
