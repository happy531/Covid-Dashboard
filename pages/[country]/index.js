import Map from "../../components/Map";
import Dashboard from "../../components/Dashboard/Dashboard";
import axios from "../../axios/axios";

export default function Home({ covidData }) {
  console.log(covidData);
  const { countryInfo } = covidData;
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Map countryInfo={countryInfo} />
      <Dashboard covidData={covidData} />
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
