import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    NumberInput,
    ReferenceInput,
    DateInput,
} from 'react-admin';

const PossessionEdit = props => {
    const [type, setType] = React.useState('');

    const handleTypeChange = event => {
        setType(event.target.value);
    };

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="nom" />
                <SelectInput
                    source="type"
                    choices={[
                        { id: 'ARGENT', name: 'Argent' },
                        { id: 'MATERIEL', name: 'Matériel' },
                        { id: 'FLUXARGENT', name: 'Flux d\'Argent' },
                    ]}
                    onChange={handleTypeChange}
                />
                {type === 'ARGENT' && (
                    <>
                        <SelectInput
                            source="argent.type"
                            choices={[
                                { id: 'DETTE', name: 'Dette' },
                                { id: 'CREANCE', name: 'Créance' },
                                { id: 'ESPECES', name: 'Espèces' },
                                { id: 'AUTRES', name: 'Autres' },
                            ]}
                        />
                        <DateInput source="argent.date_d_ouverture" />
                    </>
                )}
                {type === 'MATERIEL' && (
                    <>
                        <DateInput source="materiel.date_d_acquisition" />
                        <NumberInput source="materiel.taux_dappreciation_annuel" />
                    </>
                )}
                {type === 'FLUXARGENT' && (
                    <>
                        <ReferenceInput source="flux_argent.argent" reference="argents">
                            <SelectInput optionText="nom" />
                        </ReferenceInput>
                        <DateInput source="flux_argent.debut" />
                        <DateInput source="flux_argent.fin" />
                        <NumberInput source="flux_argent.flux_mensuel" />
                        <NumberInput source="flux_argent.date_d_operation" />
                    </>
                )}
                <NumberInput source="valeur_comptable" />
            </SimpleForm>
        </Edit>
    );
};

export default PossessionEdit;

