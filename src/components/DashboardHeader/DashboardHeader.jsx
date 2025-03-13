import React, { useState } from "react";
import "./DashboardHeader.scss";
import { FaSearch } from "react-icons/fa";
import Select from "../elements/Select";

const DashboardHeader = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const clients = [
    { value: "Client", label: "Client" },
    { value: "Client", label: "Client" },
    { value: "Client", label: "Client" },
    { value: "Client", label: "Client" },
  ];

  const banks = [
    { value: "Client", label: "Client" },
    { value: "HDFC Bank", label: "HDFC Bank" },
    { value: "SBI Bank", label: "SBI Bank" },
    { value: "ICICI Bank", label: "ICICI Bank" },
  ];

  return (
    <div className="dashboard-header">
      <h1>Dashboard</h1>

      <div className="filter-options">
        <Select
          options={clients}
          error="Please select client"
          defaultValue="Client"
          aria-label="Select Client"
        />
        <Select
          options={banks}
          error="Please select client"
          defaultValue="ICICI Bank"
          aria-label="Select Bank"
        />
        <div className="inputfield">
          {/* <label htmlFor="from-date" className="sr-only">Enter From Date</label> */}
          <input
            id="from-date"
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            aria-label="Enter From Date"
            aria-required="true"
          />
        </div>
        <div className="inputfield">
          {/* <label htmlFor="to-date" className="sr-only">Enter To Date</label> */}
          <input
            id="to-date"
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            aria-label="Enter To Date"
            aria-required="true"
          />
        </div>

        <button className="search-btn" aria-label="Search">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
