import Map from "../../components/Map";
import Dashboard from "../../components/Dashboard/Dashboard";
import axios from "../../axios/axios";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";

export default function Home({ covidData }) {
  const { setCovidData } = useAppContext();
  useEffect(() => {
    setCovidData(covidData);
  }, [covidData, setCovidData]);

  return (
    <main>
      <Map />
      <Dashboard />
    </main>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { country: "poland" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { data: covidData } = await axios.get(params.country);

  return {
    props: {
      covidData,
    },
  };
}
