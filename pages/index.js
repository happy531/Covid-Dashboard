import Map from "../components/Map";
import Dashboard from "../components/Dashboard/Dashboard";

export default function Home() {
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
      <Map />
      <Dashboard />
    </main>
  );
}
