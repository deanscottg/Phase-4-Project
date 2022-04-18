function Home({ user }) {
  if (user) {
    return <h1 style={{ color: "red" }}>W E L C O M E, {user.username}!</h1>;
  } else {
    return <h1 style={{ color: "red" }}>PLEASE LOGIN OR SIGN UP</h1>;
  }
}

export default Home;
