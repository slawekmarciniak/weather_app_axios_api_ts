import { createContext, useState } from "react";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openWeatherData, setOpenWeatherData] = useState();
  const [accuWeatherData, setAccuWeatherData] = useState();
  const [weatherbitData, setWeatherbitData] = useState();
  const [city, setCity] = useState("");

  const handleInputChange = (e) => setCity(e.target.value);
  const resetInput = () => {
    setCity("");
  };

  return (
    <AppContext.Provider
      value={{
        openWeatherData,
        setOpenWeatherData,
        accuWeatherData,
        setAccuWeatherData,
        weatherbitData,
        setWeatherbitData,
        city,
        setCity,
        handleInputChange,
        resetInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
