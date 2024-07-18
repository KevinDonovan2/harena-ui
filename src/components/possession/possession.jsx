import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    SelectInput,
    NumberInput,
    ReferenceInput,
} from 'react-admin';

// lister les possessions
export const PossessionList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="nom" />
            <TextField source="type" />
            <TextField source="valeur_comptable" />
        </Datagrid>
    </List>
);

//créer une nouvelle possession
export const PossessionCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nom" />
            <SelectInput source="type" choices={[
                { id: 'ARGENT', name: 'Argent' },
                { id: 'MATERIEL', name: 'Matériel' },
                { id: 'FLUXARGENT', name: 'Flux d\'Argent' },
            ]} />
            <NumberInput source="valeur_comptable" />
        </SimpleForm>
    </Create>
);

//editer une possession existante
export const PossessionEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nom" />
            <SelectInput source="type" choices={[
                { id: 'ARGENT', name: 'Argent' },
                { id: 'MATERIEL', name: 'Matériel' },
                { id: 'FLUXARGENT', name: 'Flux d\'Argent' },
            ]} />
            <NumberInput source="valeur_comptable" />
        </SimpleForm>
    </Edit>
);
const Possession = {
    list: PossessionList,
    create: PossessionCreate,
    edit: PossessionEdit
};

export default Possession;
