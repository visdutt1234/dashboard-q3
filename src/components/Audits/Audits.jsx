import React, { useState } from "react";
import "./Audits.scss";
import AuditCard from "./AuditCard";

const auditsData = [
  {
    id: 1,
    title: "SOC 2",
    client: "ICICI Bank",
    completedOn: "6 Oct 24",
    controls: 30,
    effective: {
      text: "Effective",
      num: 25,
      color: "#3F9A26"
    },
    nonEffective: {
      text: "Non-Effective",
      num:2,
      color: "#C53534",
    },
    partialEffective: {
      text: "partial Effective",
      num: 1,
      color: "#F1C44D"
    },
    ofi: {
      text: "OFI",
      num: 2,
      color: "#796CEA"
    },
  },
  {
    id: 2,
    title: "CCPA",
    client: "ICICI Bank",
    completedOn: "6 Oct 24",
    controls: 30,
    effective: {
      text: "Effective",
      num: 25,
      color: "#3F9A26"
    },
    nonEffective: {
      text: "Non-Effective",
      num:2,
      color: "#C53534",
    },
    partialEffective: {
      text: "partial Effective",
      num: 1,
      color: "#F1C44D"
    },
    ofi: {
      text: "OFI",
      num: 2,
      color: "#796CEA"
    },
  },
  {
    id: 3,
    title: "GDPR",
    client: "ICICI Bank",
    completedOn: "6 Oct 24",
    controls: 30,
    effective: {
      text: "Effective",
      num: 25,
      color: "#3F9A26"
    },
    nonEffective: {
      text: "Non-Effective",
      num:2,
      color: "#C53534",
    },
    partialEffective: {
      text: "partial Effective",
      num: 1,
      color: "#F1C44D"
    },
    ofi: {
      text: "OFI",
      num: 2,
      color: "#796CEA"
    },
  },
];

const Audits = () => {
  const [activeTab, setActiveTab] = useState("Completed");

  return (
    <div className="audits-container shadow mb20">
      <div className="audits-header">
        <h2>Audits</h2>
        <a href="#" className="view-all">
          View All
        </a>
      </div>

      <div className="tabs mb20">
        <button
          className={activeTab === "In-progress" ? "active" : ""}
          onClick={() => setActiveTab("In-progress")}
        >
          In-progress
        </button>
        <button
          className={activeTab === "Completed" ? "active" : ""}
          onClick={() => setActiveTab("Completed")}
        >
          Completed
        </button>
      </div>

      <div className="audit-cards">
        {auditsData.map((audit) => (
          <AuditCard key={audit.id} audit={audit} />
        ))}
      </div>
    </div>
  );
};

export default Audits;
