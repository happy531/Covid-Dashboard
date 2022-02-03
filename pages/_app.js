import "leaflet/dist/leaflet.css";
import "../styles/globals.scss";
import AppContextProvider from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
