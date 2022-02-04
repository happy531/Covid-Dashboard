import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

import { useRouter } from "next/router";

import classes from "./Dashboard.module.scss";

const Dashboard = () => {
  const { message, country, cases, deaths, recovered } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStartLoading = () => {
      setIsLoading(true);
    };
    const handleStopLoading = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStartLoading);
    router.events.on("routeChangeComplete", handleStopLoading);
    router.events.on("routeChangeError", handleStopLoading);

    return () => {
      router.events.off("routeChangeStart", handleStartLoading);
      router.events.off("routeChangeComplete", handleStopLoading);
      router.events.off("routeChangeError", handleStopLoading);
    };
  }, [router]);

  // Router.onRouteChangeStart = () => {
  //   console.log("onRouteChangeStart triggered");
  //   setIsLoading(true);
  // };
  //
  // Router.onRouteChangeComplete = () => {
  //   console.log("onRouteChangeComplete triggered");
  //   setIsLoading(false);
  // };

  return (
    <div className={classes.dashboard}>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <>
          <h3>{country}</h3>
          <div className={classes.info}>
            <div className={classes.info__title}>Cases</div>
            <div className={classes.number}>{cases}</div>
          </div>
          <div className={classes.info}>
            <div className={classes.info__title}>Deaths</div>
            <div className={classes.number}>{deaths}</div>
          </div>
          <div className={classes.info}>
            <div className={classes.info__title}>Recovered</div>
            <div className={classes.number}>{recovered}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
