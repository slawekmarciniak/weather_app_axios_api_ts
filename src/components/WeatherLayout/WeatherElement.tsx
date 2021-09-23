import { FC } from "react";
import Paper from "@mui/material/Paper";

const styles = {
  width: 190,
  height: 150,
  margin: 10,
  backgroundColor: "#74b9ff",
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  justifyContent: "space-around",
  padding: 5,
};

interface WeatherElementProps {
  weatherDetail: any;
  // weatherDetail: {
  //   name: string;
  //   details: string;
  // };
}

const WeatherElement: FC<WeatherElementProps> = ({ weatherDetail }) => {
  return (
    <Paper elevation={3} style={styles}>
      <div className="description">{weatherDetail.name}</div>
      <div className="text">{weatherDetail.details}</div>
    </Paper>
  );
};

export default WeatherElement;
