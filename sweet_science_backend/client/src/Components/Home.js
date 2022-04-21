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
        PLEASE LOGIN OR SIGN UP
      </h1>
    );
  }
}

export default Home;
