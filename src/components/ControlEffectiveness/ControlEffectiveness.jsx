import React from "react";
import "./ControlEffectiveness.scss";
import BarChart from "../BarChart/BarChart";
import DonutChart from "../DonutChart/DonutChart";

const ControlEffectiveness = () => {
  return (
    <div className="control-effectiveness shadow">
      <div className="header">
        <h2>Control Effectiveness</h2>
        <div className="inputfield selectfield">
          <select>
            <option>SOC 2</option>
          </select>
        </div>
      </div>
      <DonutChart/>
    </div>
  );
};

export default ControlEffectiveness;
