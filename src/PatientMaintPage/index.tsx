import React, { useEffect } from "react";
import axios from "axios";
import { Card, Container, Header, Icon } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../constants";
import { Entry, Patient } from "../types";
import { useStateValue, addSensitivePatient } from "../state";
import EntryDetails from "./EntryDetails";

const PatientListPage: React.FC = () => {
  const [{ sensitivePatients }, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();
  const patient = Object.values(sensitivePatients).find((a: Patient) => a.id === id);
  useEffect(() => {
    if (!patient) {
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
            <Header as="h1">{patient.name} {patient.gender === "male" ? <Icon name="mars" /> : patient.gender === "female" ? <Icon name="venus" /> : <Icon name="venus mars" />}</Header>
            <div>ssn: {patient.ssn}</div>
            <div>occupation: {patient.occupation}</div>
            <Header as="h3">entries</Header>
            <Card.Group>
              {patient.entries.map((entry: Entry) => (
                <EntryDetails key={entry.id} entry={entry} />
              ))}
            </Card.Group>
          </div>
          : <Header>patient not found</Header>}
      </Container>

    </div>
  );
};

export default PatientListPage;
