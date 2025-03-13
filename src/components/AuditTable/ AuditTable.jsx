import React from "react";
import "./AuditTable.scss";
import { FaEye } from "react-icons/fa";

const audits = [
  {
    audit: "Privacy Template",
    reviewPeriod: "Nov-2024 - Nov-2025",
    startDate: "12-11-2024",
    endDate: "26-11-2024",
    auditor: "Admin User",
    auditorExtra: "+11",
    auditee: "SPJ Sharma",
    auditeeExtra: "+2",
  },
  {
    audit: "Privacy Template",
    reviewPeriod: "Nov-2024 - Nov-2025",
    startDate: "12-11-2024",
    endDate: "26-11-2024",
    auditor: "Admin User",
    auditorExtra: "+11",
    auditee: "SPJ Sharma",
    auditeeExtra: "+2",
  },
  {
    audit: "Privacy Template",
    reviewPeriod: "Nov-2024 - Nov-2025",
    startDate: "12-11-2024",
    endDate: "26-11-2024",
    auditor: "Admin User",
    auditorExtra: "+11",
    auditee: "SPJ Sharma",
    auditeeExtra: "+2",
  },
  {
    audit: "Privacy Template",
    reviewPeriod: "Nov-2024 - Nov-2025",
    startDate: "12-11-2024",
    endDate: "26-11-2024",
    auditor: "Admin User",
    auditorExtra: "+11",
    auditee: "SPJ Sharma",
    auditeeExtra: "+2",
  },
  {
    audit: "Privacy Template",
    reviewPeriod: "Nov-2024 - Nov-2025",
    startDate: "12-11-2024",
    endDate: "26-11-2024",
    auditor: "Admin User",
    auditorExtra: "+11",
    auditee: "SPJ Sharma",
    auditeeExtra: "+2",
  },
  {
    audit: "Privacy Template",
    reviewPeriod: "Nov-2024 - Nov-2025",
    startDate: "12-11-2024",
    endDate: "26-11-2024",
    auditor: "Admin User",
    auditorExtra: "+11",
    auditee: "SPJ Sharma",
    auditeeExtra: "+2",
  },
];

const AuditTable = () => {
  return (
    <div className="audit-table-container">
      <table className="audit-table">
        <thead>
          <tr>
            <th>Audit</th>
            <th>Review Period</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Auditor</th>
            <th>Auditee</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {audits.map((audit, index) => (
            <tr key={index}>
              <td>{audit.audit}</td>
              <td>{audit.reviewPeriod}</td>
              <td>{audit.startDate}</td>
              <td>{audit.endDate}</td>
              <td>
                {audit.auditor} <span className="extra">{audit.auditorExtra}</span>
              </td>
              <td>
                {audit.auditee} <span className="extra">{audit.auditeeExtra}</span>
              </td>
              <td className="action">
                <FaEye size={18} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditTable;
