function Home({ user }) {
  if (user) {
    return <h1 style={{ color: "red" }}>Welcome, {user.username}!</h1>;
  } else {
    return <h1 style={{ color: "red" }}>Please Login or Sign Up</h1>;
  }
}

export default Home;
