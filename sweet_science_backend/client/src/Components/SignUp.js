import React, { useState } from "react";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName]= useState("");
  const [weight,setWeight] = useState(0);
  const [experience, setExperience]= useState(1)
  const [image, setImage] = useState("")
 console.log(experience)


  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username:username,
        password:password,
        password_confirmation: passwordConfirmation,
        weight: weight,
        image: image,
        experience: experience,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>SIGNUP</h1>
        <label htmlFor="username">U S E R N A M E</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">P A S S W O R D</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">
          P A S S W O R D C O N F I R M A T I O N
        </label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="Name">N A M E</label>
        <input
          type="text"
          id="Name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <label htmlFor="Image">I M A G E</label>
        <input
          type="text"
          id="Image"
          autoComplete="off"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="Weight">W E I G H T</label>
        <input
          type="text"
          id="Weight"
          autoComplete="off"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label htmlFor="Experience">E X P E R I E N C E</label>
        <select name = "dropdown" value={experience}
            onChange={(e) => setExperience(e.target.value)}>
            <option value = "1">1 (Zero ring experience)</option>
            <option value = "2">2 (Amateur)</option>
            <option value = "3">3 (Up and Coming challenger)</option>
            <option value = "4">4 (Title Contender)</option>
            <option value = "5">5 (Champ)</option>
         </select>
       
    
        <button  type="submit">S I G N U P</button>
      </form>
    </div>
  );
}

export default SignUp;
