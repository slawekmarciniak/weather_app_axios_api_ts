import { FC } from "react";
import Paper from "@mui/material/Paper";
interface WeatherElementProps {
  weatherDetail: any;
}

const styles = {
  width: 200,
  height: 150,
  margin: 10,
  backgroundColor: "#74b9ff",
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  justifyContent: "space-around",
};
const WeatherElement: FC<WeatherElementProps> = ({ weatherDetail }) => {
  return (
    <Paper elevation={3} style={styles}>
      <div>{weatherDetail.name}</div>
      <div>{weatherDetail.details}</div>
    </Paper>
  );
};

export default WeatherElement;
