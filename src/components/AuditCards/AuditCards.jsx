import React from "react";
import "./AuditCards.scss";
import { FaClipboardCheck, FaClock, FaCalendarAlt } from "react-icons/fa";

const auditData = [
  { id: 1, icon: <FaClock />, number: 3, text: "In-progress Audits", color: "#F1C44D" },
  { id: 2, icon: <FaClipboardCheck />, number: 5, text: "Completed Audits", color: "#3F9A26" },
  { id: 3, icon: <FaCalendarAlt />, number: 2, text: "Upcoming Audits", color: "#01B8F6" },
];

const AuditCards = () => {
  return (
    <div className="top-audit-cards">
      {auditData.map((audit) => (
        <div className="card shadow" key={audit.id}>
          <div className="icon" style={{ backgroundColor: audit.color }}>
            {audit.icon}
          </div>
          <div className="content">
            <h2>{audit.number}</h2>
            <p>{audit.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuditCards;
