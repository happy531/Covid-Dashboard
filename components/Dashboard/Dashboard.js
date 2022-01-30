import React from "react";
import classes from "./Dashboard.module.scss";

const Dashboard = ({ covidData }) => {
  return (
    <div className={classes.dashboard}>
      <div className={classes.info}>
        <div className={classes.info__title}>Cases</div>
        <div className={classes.number}>{covidData.cases}</div>
      </div>
      <div className={classes.info}>
        <div className={classes.info__title}>Deaths</div>
        <div className={classes.number}>{covidData.deaths}</div>
      </div>
      <div className={classes.info}>
        <div className={classes.info__title}>Recovered</div>
        <div className={classes.number}>{covidData.recovered}</div>
      </div>
    </div>
  );
};

export default Dashboard;
