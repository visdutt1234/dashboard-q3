import React from "react";
import "./Dashboard.scss";
import AuditCards from "../../components/AuditCards/AuditCards";
import ControlEvidenceStatus from "../../components/ControlEvidenceStatus/ControlEvidenceStatus";
import ControlEffectiveness from "../../components/ControlEffectiveness/ControlEffectiveness";
import AuditTable from "../../components/AuditTable/ AuditTable";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import Audits from "../../components/Audits/Audits";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <AuditCards />
      <Audits />
      <div className="dashboard-charts mb20">
        <ControlEvidenceStatus />
        <ControlEffectiveness />
      </div>
      <AuditTable />
    </div>
  );
};

export default Dashboard;
