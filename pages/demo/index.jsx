import React from 'react';
import { useFormik } from 'formik';
import { Textbox } from '../../component/form';
import { SubmitButton } from '../../component/button';
import { Grid } from '@mui/material';
const DemoForm = () => {
  const formik = useFormik({
    initialValues: {
      category_id: '',
      name: '',
      category_type: '',
      company_name: '',
      iec: '',
      gstin: '',
      bu: '',
      sbu: '',
      module_type: '',
      sub_module_type: '',
      reference_number: '',
      location: ''
    },
    validate: values => {
      const errors = {};
      const specialchar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      const letters = /^[A-Za-z]+$/;

      if (!values.name) {
        errors.name = 'Document is required';
      } else if (!values.name.trim()) {
        errors.name = 'Use characters whitespace is not allowed';
      } else if (values.name.length < 2) {
        errors.name = 'Document must be more than 2 characters';
      } else if (values.name.length > 100) {
        errors.name = 'Document must be less than 100 characters';
      } else if (specialchar.test(values.name)) {
        errors.name = 'Special characters not allowed Only';
      } else if (!letters.test(values.name)) {
        errors.name = 'only characters allowed';
      }
      if (!values.category_id) {
        errors.category_id = 'Category is required';
      } else if (!values.category_id.trim()) {
        errors.category_id = 'Use characters whitespace is not allowed';
      } else if (values.category_id.length < 2) {
        errors.category_id = 'Category must be more than 2 characters';
      } else if (values.category_id.length > 100) {
        errors.category_id = 'Category must be less than 100 characters';
      } else if (specialchar.test(values.category_id)) {
        errors.category_id = 'Special characters not allowed Only';
      } else if (!letters.test(values.category_id)) {
        errors.category_id = 'only characters allowed';
      }

      if (!values.category_type) {
        errors.category_type = 'Category Name is required';
      } else if (specialchar.test(values.category_type)) {
        errors.category_type = 'Special characters not allowed Only';
      } else if (!values.category_type.trim()) {
        errors.category_type = 'Use characters whitespace is not allowed';
      } else if (values.category_type.length < 2) {
        errors.category_type = 'Category Name must be more than 2 characters';
      } else if (values.category_type.length > 100) {
        errors.category_type = 'Category Name be less than 100 characters';
      } else if (!letters.test(values.category_type)) {
        errors.category_type = 'only characters allowed';
      }

      if (!values.company_name) {
        errors.company_name = 'Company is required';
      } else if (!values.company_name.trim()) {
        errors.company_name = 'Use characters whitespace is not allowed';
      } else if (values.company_name.length < 2) {
        errors.company_name = 'Company Name must be more than 2 characters';
      } else if (values.company_name.length > 100) {
        errors.company_name = 'Company Name be less than 100 characters';
      } else if (specialchar.test(values.company_name)) {
        errors.company_name = 'Special characters not allowed Only';
      } else if (!letters.test(values.company_name)) {
        errors.company_name = 'only characters allowed';
      }
      if (!values.iec) {
        errors.iec = 'IEC is required';
      } else if (!values.iec.trim()) {
        errors.iec = 'Use characters whitespace is not allowed';
      } else if (values.iec.length < 2) {
        errors.iec = 'IEC must be more than 2 characters';
      } else if (values.iec.length > 100) {
        errors.iec = 'IEC be less than 100 characters';
      } else if (specialchar.test(values.iec)) {
        errors.iec = 'Special characters not allowed Only';
      } else if (!letters.test(values.iec)) {
        errors.iec = 'only characters allowed';
      }
      if (!values.gstin) {
        errors.gstin = 'GSTIN is required';
      } else if (!values.gstin.trim()) {
        errors.gstin = 'Use characters whitespace is not allowed';
      } else if (values.gstin.length < 2) {
        errors.gstin = 'GSTIN must be more than 2 characters';
      } else if (values.gstin.length > 100) {
        errors.gstin = 'GSTIN be less than 100 characters';
      } else if (specialchar.test(values.gstin)) {
        errors.gstin = 'Special characters not allowed Only';
      } else if (!letters.test(values.gstin)) {
        errors.gstin = 'only characters allowed';
      }
      if (!values.bu) {
        errors.bu = 'BU is required';
      } else if (!values.bu.trim()) {
        errors.bu = 'Use characters whitespace is not allowed';
      } else if (values.bu.length < 2) {
        errors.bu = 'BU must be more than 2 characters';
      } else if (values.bu.length > 100) {
        errors.bu = 'BU be less than 100 characters';
      } else if (specialchar.test(values.bu)) {
        errors.bu = 'Special characters not allowed Only';
      } else if (!letters.test(values.bu)) {
        errors.bu = 'only characters allowed';
      }
      if (!values.sbu) {
        errors.sbu = 'SBU is required';
      } else if (!values.sbu.trim()) {
        errors.sbu = 'Use characters whitespace is not allowed';
      } else if (values.sbu.length < 2) {
        errors.sbu = 'SBU must be more than 2 characters';
      } else if (values.sbu.length > 100) {
        errors.sbu = 'SBU be less than 100 characters';
      } else if (specialchar.test(values.sbu)) {
        errors.sbu = 'Special characters not allowed Only';
      } else if (!letters.test(values.sbu)) {
        errors.sbu = 'only characters allowed';
      }
      if (!values.module_type) {
        errors.module_type = 'Module is required';
      } else if (!values.module_type.trim()) {
        errors.module_type = 'Use characters whitespace is not allowed';
      } else if (values.module_type.length < 2) {
        errors.module_type = 'Module must be more than 2 characters';
      } else if (values.module_type.length > 100) {
        errors.module_type = 'Module be less than 100 characters';
      } else if (specialchar.test(values.module_type)) {
        errors.module_type = 'Special characters not allowed Only';
      } else if (!letters.test(values.module_type)) {
        errors.module_type = 'only characters allowed';
      }
      if (!values.sub_module_type) {
        errors.sub_module_type = 'Sub Module is required';
      } else if (!values.module_type.trim()) {
        errors.module_type = 'Use characters whitespace is not allowed';
      } else if (values.module_type.length < 2) {
        errors.module_type = 'Sub Module must be more than 2 characters';
      } else if (values.module_type.length > 100) {
        errors.module_type = 'Sub Module be less than 100 characters';
      } else if (specialchar.test(values.sub_module_type)) {
        errors.sub_module_type = 'Special characters not allowed Only';
      } else if (!letters.test(values.sub_module_type)) {
        errors.sub_module_type = 'only characters allowed';
      }
      const phoneno = /^-?\d+$/;
      if (!values.reference_number) {
        errors.reference_number = 'Reference No. is required';
      } else if (!phoneno.test(values.reference_number)) {
        errors.reference_number = 'Enter Numbers Only';
      } else if (values.reference_number.length < 10) {
        errors.reference_number = 'Reference No. must be 10 digits';
      }

      if (!values.location) {
        errors.location = 'Location is required';
      } else if (!values.location.trim()) {
        errors.location = 'Use characters whitespace is not allowed';
      } else if (values.location.length < 2) {
        errors.location = 'Location must be more than 2 characters';
      } else if (values.location.length > 100) {
        errors.location = 'Location be less than 100 characters';
      } else if (specialchar.test(values.location)) {
        errors.location = 'Special characters not allowed Only';
      } else if (!letters.test(values.location)) {
        errors.location = 'only characters allowed';
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log('values', values);
    }
  });
  return (
    <React.Fragment>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={4}>
            <Textbox
              fullWidth
              variant="standard"
              label="Category"
              name="category_id"
              value={formik.values.category_id}
              required
              onChange={formik.handleChange}
              error={formik.touched.category_id && formik.errors.category_id}
              helperText={formik.touched.category_id && formik.errors.category_id}
            />
            <Textbox
              required
              fullWidth
              variant="standard"
              label="Document Name"
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              error={formik.touched.name && formik.errors.name}
              helperText={formik.touched.name && formik.errors.name}
            />
            <Textbox
              required
              fullWidth
              variant="standard"
              label="Category Name"
              name="category_type"
              value={formik.values.category_type}
              onChange={formik.handleChange}
              error={formik.touched.category_type && formik.errors.category_type}
              helperText={formik.touched.category_type && formik.errors.category_type}
            />
            <Textbox
              required
              fullWidth
              variant="standard"
              label="IEC"
              value={formik.values.iec}
              name="iec"
              onChange={formik.handleChange}
              error={formik.touched.iec && formik.errors.iec}
              helperText={formik.touched.iec && formik.errors.iec}
            />
            <Textbox
              required
              fullWidth
              variant="standard"
              label="GSTIN"
              name="gstin"
              value={formik.values.gstin}
              onChange={formik.handleChange}
              error={formik.touched.gstin && formik.errors.gstin}
              helperText={formik.touched.gstin && formik.errors.gstin}
            />
          </Grid>
          <Grid item xs={4}>
            <Textbox
              required
              fullWidth
              variant="standard"
              label="Select Module"
              value={formik.values.module_type}
              name="module_type"
              onChange={formik.handleChange}
              error={formik.touched.module_type && formik.errors.module_type}
              helperText={formik.touched.module_type && formik.errors.module_type}
            />
            <Textbox
              required
              fullWidth
              variant="standard"
              label="Select Sub Module"
              value={formik.values.sub_module_type}
              name="sub_module_type"
              onChange={formik.handleChange}
              error={formik.touched.sub_module_type && formik.errors.sub_module_type}
              helperText={formik.touched.sub_module_type && formik.errors.sub_module_type}
            />
            <Textbox
              required
              fullWidth
              variant="standard"
              label="Reference Number"
              value={formik.values.reference_number}
              name="reference_number"
              onChange={formik.handleChange}
              error={formik.touched.reference_number && formik.errors.reference_number}
              helperText={formik.touched.reference_number && formik.errors.reference_number}
            />
            <Textbox
              required
              fullWidth
              variant="standard"
              label="BU"
              name="bu"
              value={formik.values.bu}
              onChange={formik.handleChange}
              error={formik.touched.bu && formik.errors.bu}
              helperText={formik.touched.bu && formik.errors.bu}
            />
            <Textbox
              required
              fullWidth
              variant="standard"
              label="SBU"
              name="sbu"
              value={formik.values.sbu}
              onChange={formik.handleChange}
              error={formik.touched.sbu && formik.errors.sbu}
              helperText={formik.touched.sbu && formik.errors.sbu}
            />
          </Grid>
          <Grid item xs={4}>
            <Textbox
              required
              fullWidth
              variant="standard"
              label="Location"
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              error={formik.touched.location && formik.errors.location}
              helperText={formik.touched.location && formik.errors.location}
            />
          </Grid>
        </Grid>
        <SubmitButton
          title="Add New"
          variant="contained"
          color="error"
          type='submit'
        />
        <SubmitButton
          title="Cancel"
          color="error"
        >
          Cancel
        </SubmitButton>
      </form>
    </React.Fragment>
  );
};

export default DemoForm;
