import axios from "axios";
import React, { useEffect } from "react";
import { Card, Icon, List } from "semantic-ui-react";
import { apiBaseUrl } from "../constants";
import { setDiagnosisList, useStateValue } from "../state";
import { Diagnosis, Entry, HealthCheckEntry } from "../types";

/**
 * Helper function for exhaustive type checking
 */
const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};


const DiagnosticCodes: React.FC<{ diagnosisCodes: string[] | undefined }> = ({ diagnosisCodes }) => {
    const [{ diagnosis }] = useStateValue();
    return (
        <>
            {diagnosisCodes ?
                <Card.Content>
                    <Card.Description>
                        <List items={diagnosisCodes?.map((code: string) => {
                            const diagnose = Object.values(diagnosis).find((a: Diagnosis) => a.code === code);
                            return `${code} ${diagnose ? diagnose.name : ''}`;
                        })} />
                    </Card.Description>
                </Card.Content> : <></>}
        </>
    );
};

const HealthChecklEntryDetails: React.FC<{ entry: HealthCheckEntry }> = ({ entry }) => {
    let heartColor: "green" | "yellow" | "red" | "violet" | undefined = 'green';
    switch (entry.healthCheckRating) {
        case 0:
            break;
        case 1:
            heartColor = 'yellow';
            break;
        case 2:
            heartColor = 'red';
            break;
        case 3:
            heartColor = 'violet';
            break;
        default:
            break;
    }

    return (
        < Card >
            <Card.Content>
                <Card.Header >{entry.date}<Icon name='doctor' size='large' /></Card.Header>
                <Card.Meta>{entry.specialist}</Card.Meta>
                <Card.Description content={entry.description} />
                <Card.Description ><Icon name='heart' size='small' color={heartColor} /></Card.Description>
            </Card.Content>
            <DiagnosticCodes diagnosisCodes={entry.diagnosisCodes} />
        </Card >
    );
};
const OccupationalHealthcareEntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
    return (
        < Card >
            <Card.Content>
                <Card.Header >{entry.date}<Icon name='stethoscope' size='large' /></Card.Header>
                <Card.Meta>{entry.specialist}</Card.Meta>
                <Card.Description content={entry.description} />
            </Card.Content>
            <DiagnosticCodes diagnosisCodes={entry.diagnosisCodes} />
        </Card >
    );
};
const HospitalEntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
    return (
        < Card >
            <Card.Content>
                <Card.Header >{entry.date}<Icon name='hospital' size='large' /></Card.Header>
                <Card.Meta>{entry.specialist}</Card.Meta>
                <Card.Description content={entry.description} />
            </Card.Content>
            <DiagnosticCodes diagnosisCodes={entry.diagnosisCodes} />
        </Card >
    );
};
const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
    const [{ diagnosis }, dispatch] = useStateValue();
    useEffect(() => {
        if (!diagnosis || Object.values(diagnosis).length === 0) {
            const fetchDiagnosis = async () => {
                try {
                    const { data: diagnosisListFromApi } = await axios.get<Diagnosis[]>(
                        `${apiBaseUrl}/diagnosis`);
                    dispatch(setDiagnosisList(diagnosisListFromApi));
                } catch (e) {
                    console.error(e);
                }
            };
            fetchDiagnosis();
        }
    }, [dispatch, diagnosis]);

    switch (entry.type) {
        case 'HealthCheck':
            return <HealthChecklEntryDetails entry={entry} />;
        case 'OccupationalHealthcare':
            return <OccupationalHealthcareEntryDetails entry={entry} />;
        case 'Hospital':
            return <HospitalEntryDetails entry={entry} />;
        default:
            return assertNever(entry);

    }

};

export default EntryDetails;