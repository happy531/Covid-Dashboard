import Map from "../../components/Map";
import Dashboard from "../../components/Dashboard/Dashboard";
import axios from "../../axios/axios";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";
import Head from "next/head";

export default function Home({ covidData }) {
  const { setCovidData, country } = useAppContext();
  useEffect(() => {
    setCovidData(covidData);
  }, [covidData, setCovidData]);

  return (
    <>
      <Head>
        <title>Covid Dashboard - {country}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <main>
        <Map />
        <Dashboard />
      </main>
    </>
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
