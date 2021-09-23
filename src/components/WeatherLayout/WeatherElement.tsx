import { FC } from "react";
import Paper from "@mui/material/Paper";
interface WeatherElementProps {
  weatherDetail: any;
}

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

const WeatherElement: FC<WeatherElementProps> = ({ weatherDetail }) => {
  return (
    <Paper elevation={3} style={styles}>
      <div className="description">{weatherDetail.name}</div>
      <div className="text">{weatherDetail.details}</div>
    </Paper>
  );
};

export default WeatherElement;
