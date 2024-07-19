import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    SelectInput,
    NumberInput,
    ReferenceInput,
    DateInput,
    CreateProps
} from 'react-admin';

const PossessionCreate: React.FC<CreateProps> = (props) => {
    const [type, setType] = React.useState<string>('');

    const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setType(event.target.value as string);
    };

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="nom" />
                <SelectInput
                    source="type"
                    choices={[
                        { id: 'ARGENT', name: 'Argent' },
                        { id: 'MATERIEL', name: 'Matériel' },
                        { id: 'FLUXARGENT', name: 'Flux d\'Argent' },
                    ]}
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
        </Create>
    );
};

export default PossessionCreate;