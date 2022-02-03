import React from "react";
import classes from "./Dashboard.module.scss";
import { useAppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { message, country, cases, deaths, recovered } = useAppContext();

  return (
    <div className={classes.dashboard}>
      {message ? (
        message
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
