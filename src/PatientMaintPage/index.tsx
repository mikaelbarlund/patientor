import React, { useEffect } from "react";
import axios from "axios";
import { Card, Container, Header, Icon, Button } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../constants";
import { Entry, Patient } from "../types";
import { useStateValue, addSensitivePatient } from "../state";
import EntryDetails from "./EntryDetails";
import AddEntryModal from "./AddEntryModal";
import { EntryFormValues } from "./AddEntryModal/AddEntryForm";

const PatientListPage: React.FC = () => {
  const [{ sensitivePatients }, dispatch] = useStateValue();
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const patient = Object.values(sensitivePatients).find((a: Patient) => a.id === id);

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
  };
  const submitNewEntryForm = async (values: EntryFormValues) => {
    try {
      console.log(values);
      const { data: newPatient } = await axios.post<Patient>(
        `${apiBaseUrl}/patients/${id}/entries`,
        values
      );
      console.log(newPatient);
      dispatch(addSensitivePatient(newPatient));
      closeModal();
    } catch (e) {
      console.error(e.response.data);
    }
  };


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
      <AddEntryModal
        modalOpen={modalOpen}
        onSubmit={submitNewEntryForm}
        onClose={closeModal}
      />
      <Button onClick={() => openModal()}>Add New Entry</Button>
    </div>
  );
};

export default PatientListPage;
