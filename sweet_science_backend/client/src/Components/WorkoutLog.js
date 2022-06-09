import React, { useState } from "react";

function WorkoutLog({ user, setUser }) {
  const [workout, setWorkout] = useState([]);
  const [drill, setDrill] = useState(9);
  const [rounds, setRounds] = useState(0);
  const [completionLevel, setCompletionLevel] = useState(1);
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/workout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        drill_id: drill,
        rounds: rounds,
        completion_level: completionLevel,
        date: date,
        boxer_id: user.id,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((workout) => setWorkout(workout));
      }
    });
    setUser(user.id, "check");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>LETS GET TO WORK</h1>
        <p>SUBMIT YOUR LATEST WORKOUT</p>
        <label htmlFor="Drill">D R I L L</label>
        <select
          name="dropdown"
          value={drill}
          onChange={(e) => setDrill(e.target.value)}
        >
          <option value="9">H E A V Y B A G</option>
          <option value="10">J U M P R O P E</option>
          <option value="11">P A D W O R K</option>
          <option value="12">S L I P L I N E</option>
          <option value="13">M E D I C I N E B A L L</option>
          <option value="14">T R E A D M I L L</option>
          <option value="15">S H A D O W B O X I N G</option>
          <option value="16">S P E E D B A G</option>
        </select>

        <label htmlFor="Rounds">R O U N D S</label>
        <input
          type="text"
          id="Rounds"
          autoComplete="off"
          value={rounds}
          onChange={(e) => setRounds(e.target.value)}
        />

        <label htmlFor="Date">D A T E</label>
        <input
          type="date"
          id="Date"
          autoComplete="off"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="Completion level">C O M P L E T I O N</label>
        <select
          name="dropdown"
          value={completionLevel}
          onChange={(e) => setCompletionLevel(e.target.value)}
        >
          <option value="1">1 (Gassed,but keep going)</option>
          <option value="2">2 (Winded, but getting there)</option>
          <option value="3">3 (Fighting to get to that bell)</option>
          <option value="4">4 (Strong through every round)</option>
          <option value="5">5 (Where's my belt?)</option>
        </select>

        <button type="submit">L O G</button>
      </form>
    </div>
  );
}

export default WorkoutLog;
