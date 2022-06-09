function Home({ user }) {
  if (user) {
    return (
      <h1
        style={{
          color: "#800020",
          fontFamily: "Slackey",
          textShadow: "2px 2px brown",
        }}
      >
        W E L C O M E, {user.username}!
      </h1>
    );
  } else {
    return (
      <h1
        style={{
          color: "#800020",
          fontFamily: "Slackey",
          textShadow: "2px 2px brown",
        }}
      >
        STOP BEING LAZY, TIME TO GET TO WORK!
        <img src="https://images.squarespace-cdn.com/content/v1/6092af110d26e274e108d8cd/1620227355435-PAVG0XZR8FWCMYXSALIS/Sweet-Science-Boxing-Gym-Logo-PDF.png"></img>
      </h1>
    );
  }
}

export default Home;
