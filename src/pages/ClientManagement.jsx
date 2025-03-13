import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Grid,
  Typography,
  Paper,
  Select,
  FormControl,
  InputLabel,
  Alert,
} from "@mui/material";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    appName: "",
    businessOwnerEmail: "",
    businessOwnerName: "",
    businessOwnerTitle: "",
    businessOwnerGroup: "",
    systemOwnerEmail: "",
    systemOwnerName: "",
    systemOwnerTitle: "",
    systemOwnerGroup: "",
    hostingType: "",
    developedBy: "",
    supportedBy: "",
    piiData: "",
    goLiveDate: "",
    ssoEnabled: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.appName) tempErrors.appName = "Application Name is required";
    if (!formData.businessOwnerEmail)
      tempErrors.businessOwnerEmail = "Business Owner Email is required";
    if (!formData.systemOwnerEmail)
      tempErrors.systemOwnerEmail = "System Owner Email is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 1000, margin: "auto" }}>
      <Typography variant="h6" gutterBottom>
        System / Application Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="System / Application Name *"
            name="appName"
            variant="outlined"
            value={formData.appName}
            onChange={handleChange}
            error={!!errors.appName}
            helperText={errors.appName}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="Business Owner Email ID *"
            name="businessOwnerEmail"
            variant="outlined"
            value={formData.businessOwnerEmail}
            onChange={handleChange}
            error={!!errors.businessOwnerEmail}
            helperText={errors.businessOwnerEmail}
          >
            <MenuItem value="email1@example.com">email1@example.com</MenuItem>
            <MenuItem value="email2@example.com">email2@example.com</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Business Owner Name *"
            name="businessOwnerName"
            variant="outlined"
            value={formData.businessOwnerName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Business Owner Title *"
            name="businessOwnerTitle"
            variant="outlined"
            value={formData.businessOwnerTitle}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Business Owner Group *"
            name="businessOwnerGroup"
            variant="outlined"
            value={formData.businessOwnerGroup}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="System / Application Owner Email ID *"
            name="systemOwnerEmail"
            variant="outlined"
            value={formData.systemOwnerEmail}
            onChange={handleChange}
            error={!!errors.systemOwnerEmail}
            helperText={errors.systemOwnerEmail}
          >
            <MenuItem value="owner1@example.com">owner1@example.com</MenuItem>
            <MenuItem value="owner2@example.com">owner2@example.com</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="System / Application Owner Name *"
            name="systemOwnerName"
            variant="outlined"
            value={formData.systemOwnerName}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Does the system handle PII data?</InputLabel>
            <Select
              name="piiData"
              value={formData.piiData}
              onChange={handleChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="System go-live year and date"
            name="goLiveDate"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.goLiveDate}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Button variant="contained" color="secondary">
            Save As Draft
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Grid>
      </Grid>
      {Object.keys(errors).length > 0 && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          Please fill in all required fields.
        </Alert>
      )}
    </Paper>
  );
};

export default FormComponent;
