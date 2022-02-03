import { createContext, useContext, useState } from "react";

const AppContext = createContext(undefined, undefined);

export default function AppContextProvider({ children }) {
  const [covidData, setCovidData] = useState({});
  const { countryInfo, message, country, cases, deaths, recovered } = covidData;

  let value = {
    setCovidData,
    countryInfo,
    message,
    country,
    cases,
    deaths,
    recovered,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
