import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Field, Formik, Form, ErrorMessage } from "formik";

import { TextField, SelectField, EntryTypeOption, DiagnosisSelection } from "./FormField";
import { HealthCheckRating, Diagnosis, Entrytype } from "../../types";
import { useStateValue } from "../../state";


/*
 * use type Entry, but omit id,
 * because those are irrelevant for new entry object.
 */
export interface EntryFormValues {
  type: Entrytype;
  description: string;
  date: string;
  specialist: string;
  healthCheckRating: string;
  diagnosisCodes?: Array<Diagnosis['code']>;
  employerName: string;
  sickLeave?: {
    startDate: string;
    endDate: string;
  };
  discharge?: {
    date: string;
    criteria: string;
  };
}

interface Props {
  onSubmit: (values: EntryFormValues) => void;
  onCancel: () => void;
}


const typeOptions: EntryTypeOption[] = [
  { value: "Hospital", label: "Hospital" },
  { value: "OccupationalHealthcare", label: "OccupationalHealthcare" },
  { value: "HealthCheck", label: "HealthCheck" }
];


const healthCheckOptions: EntryTypeOption[] =
  Object.keys(HealthCheckRating).filter(a => !isNaN(parseInt(a))).map(a => {
    return { value: a, label: HealthCheckRating[parseInt(a)] };
  });

const isDate = (input: string): boolean => {
  const inputDate = new Date(input);
  return `${inputDate.getFullYear()}-${(inputDate.getMonth() + 1).toString().padStart(2, '0')}-${inputDate.getDate().toString().padStart(2, '0')}` === input;
};
export const assertNever = (arg: never): never => arg;

export const AddEntryForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  const [{ diagnosis }] = useStateValue();
  const today = new Date();
  return (
    <Formik
      initialValues={{
        type: "Hospital",
        description: "",
        date: `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`,
        specialist: "",
        healthCheckRating: "0",
        diagnosisCodes: [],
        employerName: "",
        sickLeave: { startDate: "", endDate: "" },
        discharge: { date: "", criteria: "" },

      }}
      onSubmit={onSubmit}
      validate={values => {
        const requiredError = "Field is required";
        const invalidDateError = "Invalid date specified, should be YYYY-MM-DD";
        const errors: { [field: string]: string } = {};
        if (!values.type) {
          errors.type = requiredError;
        }
        if (!values.description) {
          errors.description = requiredError;
        }
        if (!values.date) {
          errors.date = requiredError;
        } else if (!isDate(values.date)) {
          errors.date = invalidDateError;
        }
        if (!values.specialist) {
          errors.specialist = requiredError;
        }
        switch (values.type) {
          case "Hospital":
            if (!values.discharge || !values.discharge.date || !values.discharge.criteria) {
              errors.discharge = "Discharge date and criteria is required.";
            }
            break;
          case "OccupationalHealthcare":
            if (!values.employerName) {
              errors.employerName = requiredError;
            }
            break;
          case "HealthCheck":
            if (!values.healthCheckRating) {
              errors.healthCheckRating = requiredError;
            }
            break;
          default:
            assertNever(values.type);
        }
        return errors;
      }}
    >
      {({ isValid, dirty, values, setFieldValue, setFieldTouched }) => {
        return (
          <Form className="form ui">
            <SelectField
              label="Type"
              name="type"
              options={typeOptions}
            />
            <Field
              label="Description"
              placeholder="Description"
              name="description"
              component={TextField}
            />
            <Field
              label="Date"
              placeholder="YYYY-MM-DD"
              name="date"
              component={TextField}
            />
            <Field
              label="Specialist"
              placeholder="Specialist"
              name="specialist"
              component={TextField}
            />
            <DiagnosisSelection
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              diagnoses={Object.values(diagnosis)}
            />
            {values.type === "HealthCheck" &&
              <SelectField
                label="Health-check Rating"
                name="healthCheckRating"
                options={healthCheckOptions}
              />
            }
            {values.type === "OccupationalHealthcare" &&
              <>
                <Field
                  label="Employer Name"
                  placeholder="Employer Name"
                  name="employerName"
                  component={TextField}
                />
                <h4 className="ui dividing header">Sick Leave</h4>
                <div className="equal width fields">
                  <Field
                    label="Start Date"
                    placeholder="YYYY-MM-DD"
                    name="sickLeave.startDate"
                    component={TextField}
                  />
                  <Field
                    label="End Date"
                    placeholder="YYYY-MM-DD"
                    name="sickLeave.endDate"
                    component={TextField}
                  />
                </div>
              </>
            }
            {values.type === "Hospital" &&
              <>
                <h4 className="ui dividing header">Discharge</h4>
                <div style={{ color: 'red' }}>
                  <ErrorMessage name="discharge" />
                </div>
                <div className="equal width fields">
                  <Field
                    label="Date"
                    placeholder="YYYY-MM-DD"
                    name="discharge.date"
                    component={TextField}
                  />
                  <Field
                    label="Criteria"
                    placeholder="Criteria"
                    name="discharge.criteria"
                    component={TextField}
                  />
                </div>
              </>
            }

            <Grid>
              <Grid.Column floated="left" width={5}>
                <Button type="button" onClick={onCancel} color="red">
                  Cancel
                </Button>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Button
                  type="submit"
                  floated="right"
                  color="green"
                  disabled={!dirty || !isValid}
                >
                  Add
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEntryForm;
