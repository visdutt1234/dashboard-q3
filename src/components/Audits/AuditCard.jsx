import React from "react";
import "./AuditCard.scss";
import { IoIosInformationCircle } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const AuditCard = ({ audit }) => {
  return (
    <div className="audit-card">
      <span className="client-tag">Client - {audit.client}</span>
      <h3>
        {audit.title} <CiCircleInfo className="info-icon" />
      </h3>

      <div className="progress-bar">
        <div className="progress" />
      </div>

      <p className="completion-info">
        <span>
          Completed on: <strong>{audit.completedOn}</strong>
        </span>
        <span>{audit.controls} controls</span>
      </p>

      <div className="stats">
        <span className="effective">
          {audit.effective.text}
          <span>
            <IoCheckmarkCircleSharp style={{color: audit.effective.color}}/>
            {audit.effective.num}
          </span>
        </span>
        <span className="effective">
          {audit.nonEffective.text}
          <span>
            <IoIosInformationCircle style={{color: audit.nonEffective.color}}/>
            {audit.nonEffective.num}
          </span>
        </span>
        <span className="effective">
          {audit.partialEffective.text}
          <span>
            <IoIosInformationCircle style={{color: audit.partialEffective.color}}/>
            {audit.partialEffective.num}
          </span>
        </span>
        <span className="effective">
          {audit.ofi.text}
          <span>
            <IoIosInformationCircle style={{color: audit.ofi.color}}/>
            {audit.ofi.num}
          </span>
        </span>
      </div>

      <a href="#" className="view-audit">
        View Audit
      </a>
    </div>
  );
};

export default AuditCard;
