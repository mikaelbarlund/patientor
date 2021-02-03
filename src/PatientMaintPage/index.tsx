import React from "react";
import axios from "axios";
import { Container, Icon } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../constants";
import { Patient } from "../types";
import { useStateValue, addSensitivePatient } from "../state";

const PatientListPage: React.FC = () => {
  const [{ sensitivePatients }, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();
  const patient = Object.values(sensitivePatients).find((a: Patient) => a.id === id);
  React.useEffect(() => {
    if (!patient || !patient.ssn) {
      const fetchPatient = async () => {
        try {
          const { data: patientFromApi } = await axios.get<Patient>(
            `${apiBaseUrl}/patients/${id}`
          );
          dispatch(addSensitivePatient(patientFromApi));
        } catch (e) {
          console.error(e);
        }
      };
      fetchPatient();
    }
  }, [dispatch, id, patient]);

  return (
    <div className="App">
      <Container textAlign="left">
        {patient ?
          <div>
            <h1>{patient.name} {patient.gender === "male" ? <Icon name="mars" /> : patient.gender === "female" ? <Icon name="venus" /> : <Icon name="venus mars" />}</h1>
            <div>ssn: {patient.ssn}</div>
            <div>occupation: {patient.occupation}</div>
          </div>
          : <h1>patient not found</h1>}
      </Container>

    </div>
  );
};

export default PatientListPage;
