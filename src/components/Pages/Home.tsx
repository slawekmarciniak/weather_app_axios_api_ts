import { FC } from "react";

const styles = {
  color: "#e67e22",
  fontSize: 30,
  height: "100vh",
  marginTop: 100,
};

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return <div style={styles}>Weather App (demo)</div>;
};

export default Home;
