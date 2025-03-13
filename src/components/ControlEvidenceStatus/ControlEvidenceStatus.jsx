import React from "react";
import "./ControlEvidenceStatus.scss";
import BarChart from "../BarChart/BarChart";

const data = [
  { label: "Requested", value: 26, color: "#5A32A3" },
  { label: "Reviewal Pending", value: 3, color: "#F4D03F" },
  { label: "Overdue", value: 10, color: "#C0392B" },
  { label: "Rejected", value: 2, color: "#E74C3C" },
  { label: "Accepted", value: 11, color: "#27AE60" },
];

const ControlEvidenceStatus = () => {
  return (
    <div className="control-evidence-status shadow">
      <div className="header">
        <h2>Control Evidence Status</h2>
        <div className="inputfield selectfield">
          <select>
            <option>SOC 2</option>
          </select>
        </div>
      </div>
      <BarChart/>
    </div>
  );
};

export default ControlEvidenceStatus;
