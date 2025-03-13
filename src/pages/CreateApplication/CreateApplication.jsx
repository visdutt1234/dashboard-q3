import React from "react";
import InputField from "../../components/elements/InputField";
import Select from "../../components/elements/Select";
import { BiChevronLeftSquare } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import DateField from "../../components/elements/DateField";

function CreateApplication() {
  return (
    <div className="create-application">
      <h1 className="mb20">
        <NavLink to={"/"}>
          <BiChevronLeftSquare />
        </NavLink>
        Create Application
      </h1>
      <form>
        <div className="shadow">
          {/* System / Application Name */}
          <fieldset className="pt-0 mt-0">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                <InputField
                  label="System / Application Name"
                  name="applicationName"
                  placeholder="Enter Application Name"
                  required
                  error="System / Application Name is required"
                />
              </div>
            </div>
          </fieldset>

          {/* Business Owner */}
          <fieldset>
            <legend>Business Owner</legend>
            <div className="row">
              <div className="col-12 col-sm-4 col-md-4 col-xl-4 mb20">
                <Select
                  label="Business Owner Email ID"
                  options={[
                    { value: "vishnu@gmail.com", label: "vishnu@gmail.com" },
                    { value: "vishnu-1@gmail.com", label: "vishnu@gmail.com" },
                    { value: "vishnu-2@gmail.com", label: "vishnu@gmail.com" },
                    { value: "vishnu-3@gmail.com", label: "vishnu@gmail.com" },
                  ]}
                  errorMessage="Please select an option"
                  placeholder="Enter Business Owner Email ID"
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-xl-4 mb20">
                <InputField
                  label="Business Owner Name"
                  name="businessOwnerName"
                  placeholder="Enter Business Owner Name"
                  required
                  error="Business Owner Name is required"
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-xl-4 mb20">
                <InputField
                  label="Business Owner Title"
                  name="businessOwnerTitle"
                  placeholder="Enter Business Owner Title"
                  required
                  error="Business Owner Title is required"
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-xl-4">
                <InputField
                  label="Business Owner Group"
                  name="businessOwnerGroup"
                  placeholder="Enter Business Owner Group"
                  required
                  error="Business Owner Group is required"
                />
              </div>
            </div>
          </fieldset>

          {/* System / Application Owner */}
          <fieldset className="mb-0">
            <legend>System / Application Owner</legend>
            <div className="row">
              <div className="col-12 col-sm-4 col-md-4 col-xl-4 mb20">
                <InputField
                  type="email"
                  label="System / Application Owner Email ID"
                  name="systemOwnerEmail"
                  placeholder="Enter System / Application Owner Email ID"
                  required
                  error="System / Application Owner Email ID is required"
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-xl-4 mb20">
                <InputField
                  label="System / Application Owner Name"
                  name="systemOwnerName"
                  placeholder="Enter System / Application Owner Name"
                  required
                  error="System / Application Owner Name is required"
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-xl-4 mb20">
                <InputField
                  label="System / Application Owner Title"
                  name="systemOwnerTitle"
                  placeholder="Enter System / Application Owner Title"
                  required
                  error="System / Application Owner Title is required"
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-xl-4">
                <InputField
                  label="System / Application Owner Group"
                  name="systemOwnerGroup"
                  placeholder="Enter System / Application Owner Group"
                  required
                  error="System / Application Owner Group is required"
                />
              </div>
            </div>
          </fieldset>

          {/* Additional Fields */}
          <fieldset className="mt-0 mb-0">
            <div className="row">
              <div className="col-12 col-sm-4 col-md-4 col-xl-4">
                <InputField
                  label="Hosting Type"
                  name="hostingType"
                  placeholder="Enter Hosting Type"
                  error="Hosting Type is required"
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-xl-4">
                <InputField
                  label="Developed By"
                  name="developedBy"
                  placeholder="Enter Developed By"
                  error="Developed By is required"
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-xl-4">
                <InputField
                  label="Supported By"
                  name="supportedBy"
                  placeholder="Enter Supported By"
                  error="Supported By is required"
                />
              </div>
            </div>
          </fieldset>

          {/* Select Fields */}
          <fieldset className="mt-0 pb-0 mb-0">
            <div className="row flex-end">
              <div className="col-12 col-sm-4 col-md-4 col-xl-4 mb20">
                <Select
                  label="Does the system handle PII data?"
                  placeholder="Select"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  errorMessage="Please select an option"
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-xl-4 mb20">
                <DateField
                  label="System go-live year and date"
                  name="dateField"
                  required
                  error="System go-live year and date is required"
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-xl-4 mb20">
                <Select
                  label="Does the system leverage the KPMG entity’s Active Directory (AD) or Azure Active Directory authentication and/or password configuration (e.g., Single Sign On / SSO features enabled)?"
                  placeholder="Select"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                />
              </div>
            </div>
          </fieldset>
        </div>
        <div className="shadow bottom-button">
          <button
            className="secondary"
            type="button"
            aria-label="Save as draft"
          >
            Save As Draft
          </button>
          <button className="secondary" type="button" aria-label="Reset form">
            Reset
          </button>
          <button
            className="primary"
            type="submit"
            aria-label="Create new item"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateApplication;
